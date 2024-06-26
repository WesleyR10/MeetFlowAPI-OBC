const bodyAddUserJsonSchema = {
  type: "object",
  required: ["name", "email", "password", "passwordConfirmation", "role", "serviceIds"],
  properties: {
    name: { type: "string" },
    email: { type: "string" },
    role: {
      type: "string",
      enum: ["professional"],
    },
    password: { type: "string" },
    passwordConfirmation: { type: "string" },
    serviceIds: { type: "array", items: { type: "string", maxLength: 24, minLength: 24 } },
  },
};
const headersJsonSchema = {
  type: "object",
  properties: {
    authorization: { type: "string" },
  },
  required: ["authorization"],
};
const headersProfileJsonSchema = {
  type: "object",
};
const addUserResponse = {
  type: "object",
  properties: {
    _id: { type: "string", maxLength: 24, minLength: 24 },
    name: { type: "string" },
    email: { type: "string" },
    active: { type: "boolean" },
    createdById: { type: "string" },
    createdAt: { type: "string" },
    headLine: { type: "string" },
    occupationArea: { type: "string" },
  },
};
export const addUserPostSchema = {
  schema: {
    body: bodyAddUserJsonSchema,
    response: { 200: addUserResponse },
    headers: headersJsonSchema,
  },
};

const queryStringJsonLoadUserSchema = {
  type: "object",
  properties: {
    _id: { type: "string", maxLength: 24, minLength: 24 },
  },
  required: ["_id"],
};
const loadUserResponse = {
  type: "object",
  properties: {
    _id: { type: "string", maxLength: 24, minLength: 24 },
    name: { type: "string" },
    serviceIds: {
      type: "array",
      nullable: true,
      items: { type: "string", maxLength: 24, minLength: 24 },
    },
    email: { type: "string" },
    scheduleId: { type: "string", maxLength: 24, minLength: 24 },
    myScheduleId: { type: "string", maxLength: 24, minLength: 24 },
    occupationArea: { type: "string" },
    photoUrl: { type: "string" },
    headLine: { type: "string" },
    appointmentsTotal: { type: "integer" },
    active: { type: "boolean" },
    createdById: { type: "string" },
    createdAt: { type: "string" },
  },
};
export const loadUserGetSchema = {
  schema: {
    headers: headersJsonSchema,
    querystring: queryStringJsonLoadUserSchema,
    response: {
      200: loadUserResponse,
    },
  },
};
const deleteUserResponse = { type: "boolean" };
const queryStringJsonDeleteUserSchema = {
  type: "object",
  properties: {
    _id: { type: "string", maxLength: 24, minLength: 24 },
  },
  required: ["_id"],
};
export const deleteUserSchema = {
  schema: {
    headers: headersJsonSchema,
    querystring: queryStringJsonDeleteUserSchema,
    response: {
      200: deleteUserResponse,
    },
  },
};
const queryStringJsonUpdateUserSchema = {
  type: "object",
  properties: {
    _id: { type: "string", maxLength: 24, minLength: 24 },
  },
  required: ["_id"],
};
const updateUserResponse = {
  type: "object",
  properties: {
    _id: { type: "string", maxLength: 24, minLength: 24 },
    name: { type: "string" },
    serviceIds: {
      type: "array",
      nullable: true,
      items: { type: "string", maxLength: 24, minLength: 24 },
    },
    email: { type: "string" },
    myScheduleId: { type: "string", maxLength: 24, minLength: 24 },
    headLine: { type: "string" },
    photoUrl: { type: "string", nullable: true },
    occupationArea: { type: "string" },
    createdById: { type: "string" },
  },
};
const updateUserBody = {
  type: "object",
  properties: {
    name: { type: "string" },
    occupationArea: { type: "string" },
    active: { type: "boolean" },
    photoUrl: { type: "string" },
    email: { type: "string" },
    password: { type: "string" },
    headLine: { type: "string" },
  },
};
export const updateUserSchema = {
  schema: {
    headers: headersJsonSchema,
    querystring: queryStringJsonUpdateUserSchema,
    body: updateUserBody,
    response: {
      200: updateUserResponse,
    },
  },
};
const queryStringJsonLoadUserByPageSchema = {
  type: "object",
  properties: {
    page: { type: "integer", minimum: 1 },
    sortBy: { type: "string" },
    typeSort: { type: "string" },
    userId: { type: "string" }
  },
  required: ["page"],
};
const queryStringJsonLoadProfessionalSchema = {
  type: "object",
};
const loadProfessionalResponse = {
  type: "object",
  nullable: true,
  properties: {
    data: {type: "array"},
  },
};
const loadUserByPageResponse = {
  type: "object",
  properties: {
    users: {
      type: "array",
      maxItems: 10,
      items: {
        type: "object",
        properties: {
          _id: { type: "string", maxLength: 24, minLength: 24 },
          name: { type: "string" },
          role: {
            type: "string",
            enum: ["professional", "client", "visitor"],
          },
          serviceIds: {
            type: "array",
            nullable: true,
            items: { type: "string", maxLength: 24, minLength: 24 },
          },
          active: { type: "boolean" },
          createdById: { type: "string" },
          createdAt: { type: "string" },
        },
      },
    },
    total: { type: "integer" },
  },
};
export const loadUserByPageGetSchema = {
  schema: {
    headers: headersJsonSchema,
    querystring: queryStringJsonLoadUserByPageSchema,
    response: {
      200: loadUserByPageResponse,
    },
  },
};

export const loadProfessionalGetSchema = {
  schema: {
    headers: headersProfileJsonSchema,
    querystring: queryStringJsonLoadProfessionalSchema,
    response: {
      200: loadProfessionalResponse,
    },
  },
};

export const loadProfessionalByPageGetSchema = {
  schema: {
    headers: headersProfileJsonSchema,
    querystring: queryStringJsonLoadUserByPageSchema,
    response: {
      200: loadUserByPageResponse,
    },
  },
};
const loadUserGeoNearResponse = {
  type: "object",
  properties: {
    users: {
      type: "array",
      maxItems: 10,
      items: {
        type: "object",
        properties: {
          _id: { type: "string", maxLength: 24, minLength: 24 },
          name: { type: "string" },
          distance: { type: "number" },
          role: {
            type: "string",
            enum: ["professional", "client", "visitor"],
          },
          serviceIds: {
            type: "array",
            nullable: true,
            items: { type: "string", maxLength: 24, minLength: 24 },
          },
          createdAt: { type: "string" },
        },
      },
    },
    total: { type: "integer" },
    cache: { type: "boolean", nullable: true },
  },
};
const queryStringJsonLoadUserGeoNearSchema = {
  type: "object",
  properties: {
    page: { type: "integer", minimum: 1 },
    sortBy: { type: "string" },
    typeSort: { type: "string" },
  },
  required: ["page"],
};
export const loadUserByGeoNearSchema = {
  schema: {
    headers: headersJsonSchema,
    querystring: queryStringJsonLoadUserGeoNearSchema,
    response: {
      200: loadUserGeoNearResponse,
    },
  },
};