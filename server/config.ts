import Ajv, { ValidateFunction } from "ajv";
import { load as loadSite, normalize as normalizeSite } from "./config-site";
import { load as loadDocs, normalize as normalizeDocs } from "./config-docs";

const ajv = new Ajv();

const redirectsSchemaFragment = {
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

const siteSchema = {
  type: "object",
  properties: {
    versions: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: { type: "string" },
          branch: { type: "string" },
          latest: { type: "boolean", nullable: true },
        },
        additionalProperties: false,
        required: ["name", "branch"],
      },
      minItems: 1,
      uniqueItems: true,
    },
    redirects: redirectsSchemaFragment,
    allowedMarketoIds: {
      type: "array",
      items: {
        type: "number",
      },
    },
  },
  required: ["versions", "allowedMarketoIds"],
};

const siteConfigValidator = ajv.compile(siteSchema);

const docsSchema = {
  type: "object",
  properties: {
    variables: {
      type: "object",
    },
    navigation: {
      type: "array",
      items: {
        type: "object",
        properties: {
          icon: { type: "string" },
          title: { type: "string" },
          entries: {
            type: "array",
            items: {
              type: "object",
              $id: "navigation-item",
              properties: {
                title: { type: "string" },
                slug: { type: "string" },
                entries: {
                  type: "array",
                  items: { $ref: "navigation-item" },
                },
              },
              required: ["title", "slug"],
              additionalProperties: false,
            },
          },
        },
        required: ["title", "icon", "entries"],
        additionalProperties: false,
      },
      minItems: 1,
      uniqueItems: true,
    },
    redirects: redirectsSchemaFragment,
  },
  required: ["navigation"],
  additionalProperties: false,
};

const docsConfigValidator = ajv.compile(docsSchema);

const validateConfig = (
  validator: ValidateFunction,
  config: Record<string, unknown>
) => {
  if (!validator(config)) {
    console.error(validator.errors);

    process.exit(1);
  }
};

export const loadSiteConfig = () => {
  const config = loadSite();

  validateConfig(
    siteConfigValidator,
    config as unknown as Record<string, unknown>
  );

  return normalizeSite(config);
};

export const loadDocsConfig = (version: string) => {
  const config = loadDocs(version);

  validateConfig(
    docsConfigValidator,
    config as unknown as Record<string, unknown>
  );

  return normalizeDocs(config, version);
};
