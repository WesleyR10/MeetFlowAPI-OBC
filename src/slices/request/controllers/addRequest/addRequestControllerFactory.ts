import { makeLogController } from "@/application/decorators/logControllerFactory";
import { makeValidationComposite } from "@/application/factories";
import { Controller } from "@/application/infra/contracts";
import { AddRequestController } from "@/slices/request/controllers";
import { makeAddRequestFactory } from "@/slices/request/useCases";

export const makeAddRequestController = (): Controller => {
  const requiredFields = [
    "status",
    "serviceId",
    "scheduleId",
    "clientId",
    "professionalId",
    "haveRecurrence",
    "initDate",
    "endDate",
  ];
  return makeLogController(
    "addRequest",
    new AddRequestController(
      makeValidationComposite(requiredFields),
      makeAddRequestFactory()
    )
  );
};
