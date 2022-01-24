import { ValidateFunction } from "ajv";

/*
 * Common JSON schema fragment for site and docs.
 */

export const redirectsSchemaFragment = {
  type: "array",
  items: {
    type: "object",
    properties: {
      source: { type: "string" },
      destination: { type: "string" },
      boolean: { type: "boolean", nullable: true },
      basePath: { type: "boolean", nullable: true },
      statusCode: { type: "number", nullable: true },
      permanent: { type: "boolean", nullable: true },
      has: {
        type: "object",
        properties: {
          type: { type: "string" },
          key: { type: "string", nullable: true },
          value: { type: "string", nullable: true },
        },
        nullable: true,
        additionalProperties: false,
      },
    },
    required: ["source", "destination"],
    additionalProperties: false,
  },
};

/*
 * If validation return erros, write them to console and exit.
 */

export const validateConfig = <T = Record<string, unknown>>(
  validator: ValidateFunction,
  config: T
) => {
  if (!validator(config)) {
    console.error(validator.errors);

    process.exit(1);
  }
};
