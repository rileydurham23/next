import config from "../config.json";
interface Config {
  versions: {
    name: string;
    branch: string;
    latest?: true;
  }[];
}

export const load = () => {
  return (config as unknown) as Config;
};

export const normalize = (config: Config) => {
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

  return { latest, versions, branches };
};

export default function getConfig() {
  return normalize(load());
}
