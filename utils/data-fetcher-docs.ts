import { existsSync, readFileSync } from "fs";
import { join, resolve } from "path";
import glob from "glob";
import template from "utils/template";
import { NavigationCategory, NavigationItem } from "components/DocsPage/types";
import { versions, latest, contentRoot, docsSourcesRoot } from "config";

const DOCS_REPO_ROOT = resolve(contentRoot);
const DOCS_DIRECTIORY = resolve(docsSourcesRoot);
const { NEXT_PUBLIC_GITHUB_DOCS } = process.env;

export const getVersion = (filepath: string) => {
  return /\/teleport\/docs\/([^/]+)\//.exec(filepath)[1];
};

interface Config {
  navigation: NavigationCategory[];
  variables: Record<string, unknown>;
}

const normalizeUrls = (
  version: string,
  entries: NavigationItem[]
): NavigationItem[] => {
  return entries.map((entry) => {
    const newEntry = Object.assign(entry);

    const slugPrefix = version === latest ? "" : `/ver/${version}`;

    newEntry.slug = slugPrefix + entry.slug;

    if (entry.entries) {
      newEntry.entries = normalizeUrls(version, entry.entries);
    }

    return newEntry;
  });
};

const normalizeNavigation = (
  version: string,
  navigation: NavigationCategory[]
): NavigationCategory[] =>
  navigation.map((category) => {
    return {
      ...category,
      entries: normalizeUrls(version, category.entries),
    };
  });

export const getConfig = (version: string) => {
  const path = join(DOCS_DIRECTIORY, version, "config.json");

  if (existsSync(path)) {
    try {
      const content = readFileSync(path, "utf-8");
      const config = JSON.parse(content) as Config;

      config.navigation = normalizeNavigation(version, config.navigation);

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
    .sync(join(path, "**/*.mdx"))
    .map((filename) => filename.replace(/\/?(index)?.mdx?$/, "/"))
    .map((filename) => filename.replace(path, root));
};

export const getLatestVersionRewirites = () => {
  return getSlugListForVersion(latest).map((destination) => ({
    source: destination.replace(`/ver/${latest}`, ""),
    destination,
  }));
};
