import { mock, MockProxy } from "jest-mock-extended";
import MockDate from "mockdate";

import { Query } from "@/application/types";
import { fakeScheduleEntity } from "@/slices/schedule/entities/ScheduleEntity.spec";
import { DeleteScheduleRepository } from "@/slices/schedule/repositories/contracts";

import { deleteSchedule } from "./DeleteSchedule";

describe("deleteSchedule", () => {
  let testInstance: any;
  let fakeQuery: Query;
  let deleteScheduleRepository: MockProxy<DeleteScheduleRepository>;
  beforeAll(async () => {
    MockDate.set(new Date());
    deleteScheduleRepository = mock();
    fakeQuery = { fields: { name: "123" }, options: {} };
    deleteScheduleRepository.deleteSchedule.mockResolvedValue(fakeScheduleEntity);
  });
  beforeEach(() => {
    testInstance = deleteSchedule(deleteScheduleRepository);
  });
  afterAll(async () => {
    MockDate.reset();
  });
  it("should call deleteSchedule of DeleteScheduleRepository with correct values", async () => {
    await testInstance(fakeQuery);
    expect(deleteScheduleRepository.deleteSchedule).toHaveBeenCalledWith(fakeQuery);
    expect(deleteScheduleRepository.deleteSchedule).toHaveBeenCalledTimes(1);
  });
  it("should return a new schedule deleted when deleteScheduleRepository delete it", async () => {
    const schedule = await testInstance(fakeQuery);
    expect(schedule).toEqual(fakeScheduleEntity);
  });
  it("should return null a new schedule deleted when deleteScheduleRepository delete it", async () => {
    deleteScheduleRepository.deleteSchedule.mockResolvedValue(null);
    const schedule = await testInstance(fakeScheduleEntity);
    expect(schedule).toBeNull();
  });
  it("should rethrow if deleteSchedule of DeleteScheduleRepository throws", async () => {
    deleteScheduleRepository.deleteSchedule.mockRejectedValueOnce(new Error("any_error"));
    await expect(testInstance(fakeQuery)).rejects.toThrowError("any_error");
  });
});
