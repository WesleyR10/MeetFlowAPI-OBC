import { mock,MockProxy } from "jest-mock-extended";
import MockDate from "mockdate";

import { MissingParamError } from "@/application/errors";
import { badRequest, success, Validation } from "@/application/helpers";
import { Controller } from "@/application/infra/contracts";
import { GoogleOAuthService } from "@/application/infra/oAuth";
import { fakeAppointmentEntity } from "@/slices/appointment/entities/AppointmentEntity.spec";
import { fakeUserEntity } from "@/slices/user/entities/UserEntity.spec";

import { AddAppointmentController } from "./addAppointmentController";

describe("AddAppointmentController", () => {
  let testInstance: AddAppointmentController;
  let addAppointment: jest.Mock;
  let validateAvailableTimes: jest.Mock;
  let validation: MockProxy<Validation>;
  // let loadAccount: jest.Mock;
  // let updateAccount: jest.Mock;
  let googleOAuthService: MockProxy<GoogleOAuthService>;

  beforeAll(async () => {
    MockDate.set(new Date());
    addAppointment = jest.fn();
    addAppointment.mockResolvedValue({
      ...fakeAppointmentEntity,
      createdById: fakeUserEntity?._id,
    });
    validateAvailableTimes = jest.fn();
    validateAvailableTimes.mockResolvedValue(true);
    validation = mock();
    validation.validate.mockReturnValue([] as never);
    // loadAccount = jest.fn();
    // updateAccount = jest.fn();
    googleOAuthService = mock();
  });
  afterAll(() => {
    MockDate.reset();
  });
  beforeEach(() => {
    testInstance = new AddAppointmentController(
      validation,
      addAppointment,
      validateAvailableTimes,
      googleOAuthService
    );
  });
  it("should extends class Controller", async () => {
    expect(testInstance).toBeInstanceOf(Controller);
  });
  test("should call validation with correct params", async () => {
    await testInstance.execute({ body: fakeAppointmentEntity });
    expect(validation.validate).toHaveBeenCalledWith(fakeAppointmentEntity);
    expect(validation.validate).toHaveBeenCalledTimes(1);
  });
  test("should call addAppointment with correct params", async () => {
    const result = await testInstance.execute({
      body: fakeAppointmentEntity,
      userId: fakeUserEntity?._id,
    });
    expect(result).toEqual(
      success({
        ...fakeAppointmentEntity,
        createdById: fakeUserEntity?._id,
      })
    );
    expect(addAppointment).toHaveBeenCalledWith({
      ...fakeAppointmentEntity,
      createdById: fakeUserEntity?._id,
    });
    expect(addAppointment).toHaveBeenCalledTimes(1);
  });
  test("should call validateAvailableTimes with correct params and return bad request if returns false in validation", async () => {
    validateAvailableTimes.mockResolvedValueOnce(false);
    const result = await testInstance.execute({
      body: fakeAppointmentEntity,
      userId: fakeUserEntity?._id,
    });
    expect(result).toEqual(badRequest([]));
    expect(validateAvailableTimes).toHaveBeenCalledWith({
      date: fakeAppointmentEntity?.initDate,
      initDate: fakeAppointmentEntity?.initDate,
      endDate: fakeAppointmentEntity?.endDate,
      scheduleId: fakeAppointmentEntity?.scheduleId,
      serviceId: fakeAppointmentEntity?.serviceId,
    });
    expect(validateAvailableTimes).toHaveBeenCalledTimes(1);
  });
  test("should throws if addAppointment throw", async () => {
    addAppointment.mockRejectedValueOnce(new Error("error"));
    const result = testInstance.execute({
      body: fakeAppointmentEntity,
      userId: fakeUserEntity?._id,
    });
    await expect(result).rejects.toThrow(new Error("error"));
  });
  test("should return bad request if i dont pass any required field", async () => {
    validation.validate.mockReturnValueOnce([new MissingParamError("name")]);
    const httpResponse = await testInstance.execute({ body: fakeAppointmentEntity });
    expect(httpResponse).toEqual(badRequest([new MissingParamError("name")]));
  });
});
