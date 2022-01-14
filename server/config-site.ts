/*
 * this is the main config loading and normalization logic.
 */

import Ajv from "ajv";
import { Redirect } from "next/dist/lib/load-custom-routes";
import { validateConfig, redirectsSchemaFragment } from "./config-common";
import config from "../config.json";

interface Config {
  versions: {
    name: string;
    branch: string;
    latest?: true;
  }[];
  redirects?: Redirect[];
  allowedMarketoIds: number[];
}

interface NormalizedConfig {
  latest: string;
  versions: string[];
  branches: Record<string, string>;
  redirects?: Redirect[];
  allowedMarketoIds: number[];
}

/*
 * This a JSON schema describing config.json file format, if actual config
 * have wrong fields or don't have something required, it will throw error then we try
 * to start dev or build mode.
 */

const ajv = new Ajv();

const validator = ajv.compile({
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
});

/*
 * Config format for storing data and config format for using data not nescessary the same.
 * Storing version data as a singe array is convenient, but for usage, having separate
 * "latest", "versions" and "branches" fileds are easier, so we transform them here.
 */

export const normalize = ({
  versions,
  allowedMarketoIds,
  redirects,
}: Config): NormalizedConfig => {
  const result: NormalizedConfig = {
    latest: (
      versions.find(({ latest }) => latest === true) ||
      versions[versions.length - 1]
    ).name,
    versions: versions.map(({ name }) => name),
    branches: versions.reduce((result, { name, branch }) => {
      return { ...result, [name]: branch };
    }, {}),
    allowedMarketoIds,
  };

  if (redirects) {
    result.redirects = redirects;
  }

  return result;
};

/* Load, validate and normalize config. */

export const loadConfig = () => {
  validateConfig(validator, config);

  return normalize(config as Config);
};
