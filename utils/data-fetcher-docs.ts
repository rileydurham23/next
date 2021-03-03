import { existsSync, readFileSync } from "fs";
import { resolve } from "path";
import template from "utils/template";
import { NavigationCategory, NavigationItem } from "components/DocsPage/types";
import { versions, latest } from "config.json";

const { NEXT_PUBLIC_GITHUB_DOCS } = process.env;

export const getVersion = (filepath: string) =>
  /\/content\/([^/]+)\/docs\//.exec(filepath)[1];

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
  const path = resolve("content", version, "docs/config.json");

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
  const root = resolve(`content/${current}`);
  const content = template(originalContent, root, variables);

  const githubUrl = filepath.replace(
    root,
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
