const bodyAddScheduleJsonSchema = {
  type: "object",
  required: [
    "description",
    "hourStart1",
    "hourEnd1",
    "days1",
    "minimumTimeForReSchedule",
    "name",
  ],
  properties: {
    name: { type: "string" },
    description: { type: "string" },
    minimumTimeForReSchedule: { type: "integer" },
    days1: {
      type: "object",
      required: [
        "monday1",
        "sunday1",
        "thursday1",
        "wednesday1",
        "tuesday1",
        "friday1",
        "saturday1",
      ],
      properties: {
        monday1: { type: "boolean" },
        sunday1: { type: "boolean" },
        thursday1: { type: "boolean" },
        wednesday1: { type: "boolean" },
        tuesday1: { type: "boolean" },
        friday1: { type: "boolean" },
        saturday1: { type: "boolean" },
      },
    },
    hourStart1: { type: "string" },
    hourEnd1: { type: "string" },
    days2: {
      type: "object",
      required: [
        "monday2",
        "sunday2",
        "thursday2",
        "wednesday2",
        "tuesday2",
        "friday2",
        "saturday2",
      ],
      properties: {
        monday2: { type: "boolean" },
        sunday2: { type: "boolean" },
        thursday2: { type: "boolean" },
        wednesday2: { type: "boolean" },
        tuesday2: { type: "boolean" },
        friday2: { type: "boolean" },
        saturday2: { type: "boolean" },
      },
    },
    hourStart2: { type: "string" },
    hourEnd2: { type: "string" },
    days3: {
      type: "object",
      required: [
        "monday3",
        "sunday3",
        "thursday3",
        "wednesday3",
        "tuesday3",
        "friday3",
        "saturday3",
      ],
      properties: {
        monday3: { type: "boolean" },
        sunday3: { type: "boolean" },
        thursday3: { type: "boolean" },
        wednesday3: { type: "boolean" },
        tuesday3: { type: "boolean" },
        friday3: { type: "boolean" },
        saturday3: { type: "boolean" },
      },
    },
    hourStart3: { type: "string" },
    hourEnd3: { type: "string" },
    hourLunchStart1: { type: "string" },
    hourLunchEnd1: { type: "string" },
    hourLunchStart2: { type: "string" },
    hourLunchEnd2: { type: "string" },
    hourLunchStart3: { type: "string" },
    hourLunchEnd3: { type: "string" },
  },
};
const headersJsonSchema = {
  type: "object",
  properties: {
    authorization: { type: "string" },
  },
  required: ["authorization"],
};
const addScheduleResponse = {
  type: "object",
  properties: {
    _id: { type: "string", maxLength: 24, minLength: 24 },
    name: { type: "string" },
    description: { type: "string" },
    minimumTimeForReSchedule: { type: "integer" },
    days1: {
      type: "object",
      required: [
        "monday1",
        "sunday1",
        "thursday1",
        "wednesday1",
        "tuesday1",
        "friday1",
        "saturday1",
      ],
      properties: {
        monday1: { type: "boolean" },
        sunday1: { type: "boolean" },
        thursday1: { type: "boolean" },
        wednesday1: { type: "boolean" },
        tuesday1: { type: "boolean" },
        friday1: { type: "boolean" },
        saturday1: { type: "boolean" },
      },
    },
    hourStart1: { type: "string" },
    hourEnd1: { type: "string" },
    days2: {
      type: "object",
      nullable: true,
      required: [
        "monday2",
        "sunday2",
        "thursday2",
        "wednesday2",
        "tuesday2",
        "friday2",
        "saturday2",
      ],
      properties: {
        monday2: { type: "boolean", nullable: true },
        sunday2: { type: "boolean", nullable: true },
        thursday2: { type: "boolean", nullable: true },
        wednesday2: { type: "boolean", nullable: true },
        tuesday2: { type: "boolean", nullable: true },
        friday2: { type: "boolean", nullable: true },
        saturday2: { type: "boolean", nullable: true },
      },
    },
    hourStart2: { type: "string", nullable: true },
    hourEnd2: { type: "string", nullable: true },
    days3: {
      type: "object",
      nullable: true,
      required: [
        "monday3",
        "sunday3",
        "thursday3",
        "wednesday3",
        "tuesday3",
        "friday3",
        "saturday3",
      ],
      properties: {
        monday3: { type: "boolean", nullable: true },
        sunday3: { type: "boolean", nullable: true },
        thursday3: { type: "boolean", nullable: true },
        wednesday3: { type: "boolean", nullable: true },
        tuesday3: { type: "boolean", nullable: true },
        friday3: { type: "boolean", nullable: true },
        saturday3: { type: "boolean", nullable: true },
      },
    },
    hourStart3: { type: "string", nullable: true },
    hourEnd3: { type: "string", nullable: true },
    hourLunchStart1: { type: "string", nullable: true },
    hourLunchEnd1: { type: "string", nullable: true },
    hourLunchStart2: { type: "string", nullable: true },
    hourLunchEnd2: { type: "string", nullable: true },
    hourLunchStart3: { type: "string", nullable: true },
    hourLunchEnd3: { type: "string", nullable: true },
    active: { type: "boolean", nullable: true },
    createdById: { type: "string" },
    createdAt: { type: "string" },
  },
};
export const addSchedulePostSchema = {
  schema: {
    body: bodyAddScheduleJsonSchema,
    response: { 200: addScheduleResponse },
    headers: headersJsonSchema,
  },
};

const queryStringJsonLoadScheduleSchema = {
  type: "object",
  properties: {
    _id: { type: "string", maxLength: 24, minLength: 24 },
  },
  required: ["_id"],
};
const loadScheduleResponse = {
  type: "object",
  properties: {
    _id: { type: "string", maxLength: 24, minLength: 24 },
    name: { type: "string" },
    description: { type: "string" },
    minimumTimeForReSchedule: { type: "integer" },
    days1: {
      type: "object",
      required: [
        "monday1",
        "sunday1",
        "thursday1",
        "wednesday1",
        "tuesday1",
        "friday1",
        "saturday1",
      ],
      properties: {
        monday1: { type: "boolean" },
        sunday1: { type: "boolean" },
        thursday1: { type: "boolean" },
        wednesday1: { type: "boolean" },
        tuesday1: { type: "boolean" },
        friday1: { type: "boolean" },
        saturday1: { type: "boolean" },
      },
    },
    hourStart1: { type: "string" },
    hourEnd1: { type: "string" },
    days2: {
      type: "object",
      nullable: true,
      required: [
        "monday2",
        "sunday2",
        "thursday2",
        "wednesday2",
        "tuesday2",
        "friday2",
        "saturday2",
      ],
      properties: {
        monday2: { type: "boolean", nullable: true },
        sunday2: { type: "boolean", nullable: true },
        thursday2: { type: "boolean", nullable: true },
        wednesday2: { type: "boolean", nullable: true },
        tuesday2: { type: "boolean", nullable: true },
        friday2: { type: "boolean", nullable: true },
        saturday2: { type: "boolean", nullable: true },
      },
    },
    hourStart2: { type: "string", nullable: true },
    hourEnd2: { type: "string", nullable: true },
    days3: {
      type: "object",
      nullable: true,
      required: [
        "monday3",
        "sunday3",
        "thursday3",
        "wednesday3",
        "tuesday3",
        "friday3",
        "saturday3",
      ],
      properties: {
        monday3: { type: "boolean", nullable: true },
        sunday3: { type: "boolean", nullable: true },
        thursday3: { type: "boolean", nullable: true },
        wednesday3: { type: "boolean", nullable: true },
        tuesday3: { type: "boolean", nullable: true },
        friday3: { type: "boolean", nullable: true },
        saturday3: { type: "boolean", nullable: true },
      },
    },
    hourStart3: { type: "string", nullable: true },
    hourEnd3: { type: "string", nullable: true },
    hourLunchStart1: { type: "string", nullable: true },
    hourLunchEnd1: { type: "string", nullable: true },
    hourLunchStart2: { type: "string", nullable: true },
    hourLunchEnd2: { type: "string", nullable: true },
    hourLunchStart3: { type: "string", nullable: true },
    hourLunchEnd3: { type: "string", nullable: true },
    active: { type: "boolean", nullable: true },
    createdById: { type: "string" },
    createdAt: { type: "string" },
  },
};
export const loadScheduleGetSchema = {
  schema: {
    headers: headersJsonSchema,
    querystring: queryStringJsonLoadScheduleSchema,
    response: {
      200: loadScheduleResponse,
    },
  },
};
const deleteScheduleResponse = { type: "boolean" };
const queryStringJsonDeleteScheduleSchema = {
  type: "object",
  properties: {
    _id: { type: "string", maxLength: 24, minLength: 24 },
  },
  required: ["_id"],
};
export const deleteScheduleSchema = {
  schema: {
    headers: headersJsonSchema,
    querystring: queryStringJsonDeleteScheduleSchema,
    response: {
      200: deleteScheduleResponse,
    },
  },
};
const queryStringJsonUpdateScheduleSchema = {
  type: "object",
  properties: {
    _id: { type: "string", maxLength: 24, minLength: 24 },
  },
  required: ["_id"],
};
const updateScheduleResponse = {
  type: "object",
  properties: {
    _id: { type: "string", maxLength: 24, minLength: 24 },
    name: { type: "string" },
    description: { type: "string" },
    minimumTimeForReSchedule: { type: "integer" },
    days1: {
      type: "object",
      required: [
        "monday1",
        "sunday1",
        "thursday1",
        "wednesday1",
        "tuesday1",
        "friday1",
        "saturday1",
      ],
      properties: {
        monday1: { type: "boolean" },
        sunday1: { type: "boolean" },
        thursday1: { type: "boolean" },
        wednesday1: { type: "boolean" },
        tuesday1: { type: "boolean" },
        friday1: { type: "boolean" },
        saturday1: { type: "boolean" },
      },
    },
    hourStart1: { type: "string" },
    hourEnd1: { type: "string" },
    days2: {
      type: "object",
      nullable: true,
      required: [
        "monday2",
        "sunday2",
        "thursday2",
        "wednesday2",
        "tuesday2",
        "friday2",
        "saturday2",
      ],
      properties: {
        monday2: { type: "boolean", nullable: true },
        sunday2: { type: "boolean", nullable: true },
        thursday2: { type: "boolean", nullable: true },
        wednesday2: { type: "boolean", nullable: true },
        tuesday2: { type: "boolean", nullable: true },
        friday2: { type: "boolean", nullable: true },
        saturday2: { type: "boolean", nullable: true },
      },
    },
    hourStart2: { type: "string", nullable: true },
    hourEnd2: { type: "string", nullable: true },
    days3: {
      type: "object",
      nullable: true,
      required: [
        "monday3",
        "sunday3",
        "thursday3",
        "wednesday3",
        "tuesday3",
        "friday3",
        "saturday3",
      ],
      properties: {
        monday3: { type: "boolean", nullable: true },
        sunday3: { type: "boolean", nullable: true },
        thursday3: { type: "boolean", nullable: true },
        wednesday3: { type: "boolean", nullable: true },
        tuesday3: { type: "boolean", nullable: true },
        friday3: { type: "boolean", nullable: true },
        saturday3: { type: "boolean", nullable: true },
      },
    },
    hourStart3: { type: "string", nullable: true },
    hourEnd3: { type: "string", nullable: true },
    hourLunchStart1: { type: "string", nullable: true },
    hourLunchEnd1: { type: "string", nullable: true },
    hourLunchStart2: { type: "string", nullable: true },
    hourLunchEnd2: { type: "string", nullable: true },
    hourLunchStart3: { type: "string", nullable: true },
    hourLunchEnd3: { type: "string", nullable: true },
    active: { type: "boolean", nullable: true },
    createdById: { type: "string" },
    createdAt: { type: "string" },
  },
};
const updateScheduleBody = {
  type: "object",
  properties: {
    name: { type: "string" },
    description: { type: "string" },
    minimumTimeForReSchedule: { type: "integer" },
    days1: {
      type: "object",
      required: [
        "monday1",
        "sunday1",
        "thursday1",
        "wednesday1",
        "tuesday1",
        "friday1",
        "saturday1",
      ],
      properties: {
        monday1: { type: "boolean" },
        sunday1: { type: "boolean" },
        thursday1: { type: "boolean" },
        wednesday1: { type: "boolean" },
        tuesday1: { type: "boolean" },
        friday1: { type: "boolean" },
        saturday1: { type: "boolean" },
      },
    },
    hourStart1: { type: "string" },
    hourEnd1: { type: "string" },
    days2: {
      type: "object",
      nullable: true,
      required: [
        "monday2",
        "sunday2",
        "thursday2",
        "wednesday2",
        "tuesday2",
        "friday2",
        "saturday2",
      ],
      properties: {
        monday2: { type: "boolean", nullable: true },
        sunday2: { type: "boolean", nullable: true },
        thursday2: { type: "boolean", nullable: true },
        wednesday2: { type: "boolean", nullable: true },
        tuesday2: { type: "boolean", nullable: true },
        friday2: { type: "boolean", nullable: true },
        saturday2: { type: "boolean", nullable: true },
      },
    },
    hourStart2: { type: "string", nullable: true },
    hourEnd2: { type: "string", nullable: true },
    days3: {
      type: "object",
      nullable: true,
      required: [
        "monday3",
        "sunday3",
        "thursday3",
        "wednesday3",
        "tuesday3",
        "friday3",
        "saturday3",
      ],
      properties: {
        monday3: { type: "boolean", nullable: true },
        sunday3: { type: "boolean", nullable: true },
        thursday3: { type: "boolean", nullable: true },
        wednesday3: { type: "boolean", nullable: true },
        tuesday3: { type: "boolean", nullable: true },
        friday3: { type: "boolean", nullable: true },
        saturday3: { type: "boolean", nullable: true },
      },
    },
    hourStart3: { type: "string", nullable: true },
    hourEnd3: { type: "string", nullable: true },
    hourLunchStart1: { type: "string", nullable: true },
    hourLunchEnd1: { type: "string", nullable: true },
    hourLunchStart2: { type: "string", nullable: true },
    hourLunchEnd2: { type: "string", nullable: true },
    hourLunchStart3: { type: "string", nullable: true },
    hourLunchEnd3: { type: "string", nullable: true },
  },
};
export const updateScheduleSchema = {
  schema: {
    headers: headersJsonSchema,
    querystring: queryStringJsonUpdateScheduleSchema,
    body: updateScheduleBody,
    response: {
      200: updateScheduleResponse,
    },
  },
};
const queryStringJsonLoadScheduleByPageSchema = {
  type: "object",
  properties: {
    page: { type: "integer", minimum: 1 },
    sortBy: { type: "string" },
    typeSort: { type: "string" },
  },
  required: ["page"],
};
const loadScheduleByPageResponse = {
  type: "object",
  properties: {
    schedules: {
      type: "array",
      maxItems: 10,
      items: {
        type: "object",
        properties: {
          _id: { type: "string", maxLength: 24, minLength: 24 },
          name: { type: "string" },
          description: { type: "string" },
          minimumTimeForReSchedule: { type: "integer" },
          days1: {
            type: "object",
            required: [
              "monday1",
              "sunday1",
              "thursday1",
              "wednesday1",
              "tuesday1",
              "friday1",
              "saturday1",
            ],
            properties: {
              monday1: { type: "boolean" },
              sunday1: { type: "boolean" },
              thursday1: { type: "boolean" },
              wednesday1: { type: "boolean" },
              tuesday1: { type: "boolean" },
              friday1: { type: "boolean" },
              saturday1: { type: "boolean" },
            },
          },
          hourStart1: { type: "string" },
          hourEnd1: { type: "string" },
          days2: {
            type: "object",
            nullable: true,
            required: [
              "monday2",
              "sunday2",
              "thursday2",
              "wednesday2",
              "tuesday2",
              "friday2",
              "saturday2",
            ],
            properties: {
              monday2: { type: "boolean", nullable: true },
              sunday2: { type: "boolean", nullable: true },
              thursday2: { type: "boolean", nullable: true },
              wednesday2: { type: "boolean", nullable: true },
              tuesday2: { type: "boolean", nullable: true },
              friday2: { type: "boolean", nullable: true },
              saturday2: { type: "boolean", nullable: true },
            },
          },
          hourStart2: { type: "string", nullable: true },
          hourEnd2: { type: "string", nullable: true },
          days3: {
            type: "object",
            nullable: true,
            required: [
              "monday3",
              "sunday3",
              "thursday3",
              "wednesday3",
              "tuesday3",
              "friday3",
              "saturday3",
            ],
            properties: {
              monday3: { type: "boolean", nullable: true },
              sunday3: { type: "boolean", nullable: true },
              thursday3: { type: "boolean", nullable: true },
              wednesday3: { type: "boolean", nullable: true },
              tuesday3: { type: "boolean", nullable: true },
              friday3: { type: "boolean", nullable: true },
              saturday3: { type: "boolean", nullable: true },
            },
          },
          hourStart3: { type: "string", nullable: true },
          hourEnd3: { type: "string", nullable: true },
          hourLunchStart1: { type: "string", nullable: true },
          hourLunchEnd1: { type: "string", nullable: true },
          hourLunchStart2: { type: "string", nullable: true },
          hourLunchEnd2: { type: "string", nullable: true },
          hourLunchStart3: { type: "string", nullable: true },
          hourLunchEnd3: { type: "string", nullable: true },
          active: { type: "boolean", nullable: true },
          createdById: { type: "string" },
          createdAt: { type: "string" },
        },
      },
    },
    total: { type: "integer" },
  },
};
export const loadScheduleByPageGetSchema = {
  schema: {
    headers: headersJsonSchema,
    querystring: queryStringJsonLoadScheduleByPageSchema,
    response: {
      200: loadScheduleByPageResponse,
    },
  },
};
