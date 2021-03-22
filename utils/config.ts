import Ajv, { ValidateFunction } from "ajv";
import { load as loadSite, normalize as normalizeSite } from "./config-site";
import { load as loadDocs, normalize as normalizeDocs } from "./config-docs";

const ajv = new Ajv();

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
  },
  required: ["versions"],
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
    redirects: {
      type: "array",
      items: {
        type: "object",
        properties: {
          source: { type: "string" },
          destination: { type: "string" },
          permanent: { type: "boolean", nullable: true },
        },
        required: ["source", "destination"],
        additionalProperties: false,
      },
    },
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
    (config as unknown) as Record<string, unknown>
  );

  return normalizeSite(config);
};

export const loadDocsConfig = (version: string) => {
  const config = loadDocs(version);

  validateConfig(
    docsConfigValidator,
    (config as unknown) as Record<string, unknown>
  );

  return normalizeDocs(config, version);
};
