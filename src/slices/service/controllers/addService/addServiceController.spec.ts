import { mock,MockProxy } from "jest-mock-extended";
import MockDate from "mockdate";

import { MissingParamError } from "@/application/errors";
import { badRequest, success, Validation } from "@/application/helpers";
import { Controller } from "@/application/infra/contracts";
import { fakeServiceEntity } from "@/slices/service/entities/ServiceEntity.spec";
import { fakeUserEntity } from "@/slices/user/entities/UserEntity.spec";

import { AddServiceController } from "./addServiceController";

describe("AddServiceController", () => {
  let testInstance: AddServiceController;
  let addService: jest.Mock;
  let loadUser: jest.Mock;
  let updateUser: jest.Mock;
  let validation: MockProxy<Validation>;
  beforeAll(async () => {
    MockDate.set(new Date());
    addService = jest.fn();
    addService.mockResolvedValue({
      ...fakeServiceEntity,
      createdById: fakeUserEntity?._id,
    });
    loadUser = jest.fn();
    loadUser.mockResolvedValue(fakeUserEntity);
    updateUser = jest.fn();
    updateUser.mockResolvedValue(fakeUserEntity);
    validation = mock();
    validation.validate.mockResolvedValue([] as never);
  });
  afterAll(() => {
    MockDate.reset();
  });
  beforeEach(() => {
    testInstance = new AddServiceController( validation,
      addService,
      loadUser,
      updateUser);
  });
  it("should extends class Controller", async () => {
    expect(testInstance).toBeInstanceOf(Controller);
  });
  test("should call validation with correct params", async () => {
    await testInstance.execute({ body: fakeServiceEntity });
    expect(validation.validate).toHaveBeenCalledWith(fakeServiceEntity);
    expect(validation.validate).toHaveBeenCalledTimes(1);
  });
  test("should call addService with correct params", async () => {
    const result = await testInstance.execute({
      body: fakeServiceEntity,
      userId: fakeUserEntity?._id,
    });
    expect(result).toEqual(
      success({
        ...fakeServiceEntity,
        createdById: fakeUserEntity?._id,
      })
    );
    expect(addService).toHaveBeenCalledWith({
      ...fakeServiceEntity,
      createdById: fakeUserEntity?._id,
    });
    expect(addService).toHaveBeenCalledTimes(1);
  });
  test("should call loadUser with correct params", async () => {
    await testInstance.execute({ body: fakeServiceEntity, userId: fakeUserEntity?._id });
    expect(loadUser).toHaveBeenCalledWith({
      fields: { _id: fakeUserEntity?._id },
      options: {},
    });
    expect(loadUser).toHaveBeenCalledTimes(1);
  });
  test("should return bad request if user does not have a schedule", async () => {
    loadUser.mockResolvedValueOnce({});
    const httpResponse = await testInstance.execute({
      body: fakeServiceEntity,
      userId: fakeUserEntity?._id,
    });
    expect(httpResponse).toEqual(badRequest("User does not have a schedule"));
  });
  test("should call updateUser with correct params", async () => {
    await testInstance.execute({ body: fakeServiceEntity, userId: fakeUserEntity?._id });
    expect(updateUser).toHaveBeenCalledWith(
      {
        fields: { _id: fakeUserEntity?._id },
        options: {},
      },
      { serviceIds: [fakeServiceEntity._id] }
    );
    expect(updateUser).toHaveBeenCalledTimes(1);
  });
  test("should throws if addService throw", async () => {
    addService.mockRejectedValueOnce(new Error("error"));
    const result = testInstance.execute({
      body: fakeServiceEntity,
      userId: fakeUserEntity?._id,
    });
    await expect(result).rejects.toThrow(new Error("error"));
  });
  test("should return bad request if i dont pass any required field", async () => {
    validation.validate.mockReturnValueOnce([new MissingParamError("name")]);
    const httpResponse = await testInstance.execute({ body: fakeServiceEntity });
    expect(httpResponse).toEqual(badRequest([new MissingParamError("name")]));
  });
});
