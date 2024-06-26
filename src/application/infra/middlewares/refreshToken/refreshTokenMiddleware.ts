import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";

import { AccessDeniedError, ServerError } from "@/application/errors";
import {
  forbidden,
  HttpRequest,
  HttpResponse,
  serverError,
  success,
  unauthorized,
} from "@/application/helpers";
import { env } from "@/application/infra/config";
import { Middleware } from "@/application/infra/contracts";
import { LoadUser } from "@/slices/user/useCases/loadUser";

export class RefreshTokenMiddleware implements Middleware {
  constructor(
    private readonly loadUser: LoadUser,
    private readonly roles: string[]
  ) {}
  private async verifyToken(token: string, secret: string): Promise<any> {
    try {
      return jwt.verify(token, secret);
    } catch (error) {
      return null;
    }
  }
  async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<any>> {
    try {
      const authHeader = httpRequest?.headers?.["refreshtoken"];
      if (authHeader) {
        const decoded = await this.verifyToken(authHeader, env.jwtRefreshSecret);
        if (!decoded) {
          return unauthorized();
        }
        const { _id } = decoded;
        const query = {
          fields: {
            _id: new ObjectId(_id),
            role: { $in: this.roles },
          },
          options: { projection: { password: 0 } },
        };
        const user = await this.loadUser(query);
        if (user) {
          return success({ userId: user?._id, userLogged: user });
        }
      }
      return forbidden(new AccessDeniedError());
    } catch (error) {
      return serverError(error as ServerError);
    }
  }
}