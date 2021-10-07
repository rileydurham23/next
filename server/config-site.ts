import { Redirect } from "next/dist/lib/load-custom-routes";
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

export const load = () => {
  return config as unknown as Config;
};

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

export default function getConfig() {
  return normalize(load());
}
