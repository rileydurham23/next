import { resolve, join } from "path";
import { loadConfig as loadDocsConfig } from "./config-docs";
import { loadConfig as loadSiteConfig } from "./config-site";

const { branches, versions, latest } = loadSiteConfig();
const { NEXT_PUBLIC_GITHUB_DOCS } = process.env;

export const getVersion = (filepath: string) => {
  const result = /content\/([^/]+)\/docs\//.exec(filepath);
  return result ? result[1] : "";
};

export const getVersionRootPath = (filepath: string) => {
  const version = getVersion(filepath);

  if (version) {
    return resolve(`content/${version}`);
  } else {
    // CI task for linting stores files in the roor of the content folder
    return resolve("content");
  }
};

export const getVersionDocsPath = (filepath: string) => {
  const root = getVersionRootPath(filepath);

  return join(root, "docs");
};

export const getVersionConfigPath = (filepath: string) => {
  const docs = getVersionDocsPath(filepath);

  return resolve(docs, "docs/config.json");
};

export const getGithubURL = (filepath: string) => {
  const current = getVersion(filepath);
  const root = getVersionRootPath(filepath);
  const ghIssuePath = `${NEXT_PUBLIC_GITHUB_DOCS}/issues/new?labels=documentation&template=documentation.md`;

  return branches[current]
    ? `${ghIssuePath}&title=[v.${current}]%20${filepath.replace(root, "")}`
    : ghIssuePath;
};

export const getPageMeta = (vfile: VFile) => {
  const current = getVersion(vfile.path);
  const { navigation } = loadDocsConfig(current);

  const githubUrl = getGithubURL(vfile.path);

  return {
    navigation,
    githubUrl,
    versions: {
      current,
      latest,
      available: versions,
    },
  };
};
