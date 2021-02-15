import { existsSync, readFileSync } from "fs";
import { join, resolve } from "path";
import glob from "glob";
import template from "utils/template";
import { NavigationCategory } from "components/DocsPage/types";
import { versions, latest, contentRoot, docsSourcesRoot } from "config";

const DOCS_REPO_ROOT = resolve(contentRoot);
const DOCS_DIRECTIORY = resolve(docsSourcesRoot);
const { NEXT_PUBLIC_GITHUB_DOCS } = process.env;

export const getVersion = (filepath: string) => {
  return /\/teleport\/docs\/([^/]+)\//.exec(filepath)[1];
};

interface Config {
  navigation: NavigationCategory[];
  variables: never;
}

export const getConfig = (version: string) => {
  const path = join(DOCS_DIRECTIORY, version, "config.json");

  if (existsSync(path)) {
    try {
      const content = readFileSync(path, "utf-8");
      const config = JSON.parse(content);

      config.navigation.forEach((c) => {
        c.entries.forEach((i) => {
          i.slug =
            version === latest ? `${i.slug}` : `/ver/${version}${i.slug}`;
        });
      });

      if (!config.variables) {
        config.variables = {};
      }

      return config as Config;
    } catch {
      throw Error(`File ${path} didn't include 'navigation' field.`);
    }
  } else {
    throw Error(`File ${path} does not exists.`);
  }
};
interface ParseMdxContentProps {
  content: string;
  filepath: string;
}

export const parseMdxContent = ({
  content: originalContent,
  filepath,
}: ParseMdxContentProps) => {
  const current = getVersion(filepath);
  const { navigation, variables } = getConfig(current);
  const content = template(originalContent, contentRoot, variables);

  const githubUrl = filepath.replace(
    DOCS_REPO_ROOT,
    `${NEXT_PUBLIC_GITHUB_DOCS}/edit/master`
  );

  return {
    content,
    navigation,
    githubUrl,
    versions: {
      current,
      latest,
      available: versions,
    },
  };
};

export const getSlugListForVersion = (version: string) => {
  const path = join(DOCS_DIRECTIORY, version, "pages");
  const root = join("/ver", version);

  return glob
    .sync(join(path, "**/*.md"))
    .map((filename) => filename.replace(/\/?(index)?.md$/, "/"))
    .map((filename) => filename.replace(path, root));
};

export const getLatestVersionRewirites = () => {
  return getSlugListForVersion(latest).map((destination) => ({
    source: destination.replace(`/ver/${latest}`, ""),
    destination,
  }));
};
