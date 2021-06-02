import { Redirect } from "next/dist/lib/load-custom-routes";
import config from "../config.json";
interface Config {
  versions: {
    name: string;
    branch: string;
    latest?: true;
  }[];
  redirects?: Redirect[];
}

interface NormalizedConfig {
  latest: string;
  versions: string[];
  branches: Record<string, string>;
  redirects?: Redirect[];
}

export const load = () => {
  return (config as unknown) as Config;
};

export const normalize = (config: Config): NormalizedConfig => {
  const latest = (() => {
    const { versions } = config as Config;
    let latest = versions.find(({ latest }) => latest === true)?.name;

    if (!latest) {
      latest = versions[versions.length - 1].name;
    }

    return latest;
  })();

  const versions = config.versions.map(({ name }) => name);

  const branches = config.versions.reduce((result, { name, branch }) => {
    return { ...result, [name]: branch };
  }, {});

  const result: NormalizedConfig = { latest, versions, branches };

  if (config.redirects) {
    result.redirects = config.redirects;
  }

  return result;
};

export default function getConfig() {
  return normalize(load());
}
