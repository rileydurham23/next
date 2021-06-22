import { Redirect } from "next/dist/lib/load-custom-routes";
import { resolve } from "path";
import { existsSync, readFileSync } from "fs";
import { isExternalLink, isHash, extractPath } from "./url";
import {
  NavigationCategory,
  NavigationItem,
} from "../components/DocsPage/types";
import getConfig from "./config-site";

export interface Config {
  navigation: NavigationCategory[];
  variables?: Record<string, unknown>;
  redirects?: Redirect[];
}

const normalizeDocsUrl = (version: string, url: string, raw?: boolean) => {
  const { latest } = getConfig();

  if (isExternalLink(url) || isHash(url)) {
    return url;
  }

  if (!extractPath(url).endsWith("/")) {
    const configPath = getConfigPath(version);

    throw Error(`File ${configPath} misses trailing slash in '${url}' path.`);
  }

  const addVersion = raw || latest !== version;
  const root = process.env.NEXT_PUBLIC_DOCS_DIR;
  const prefix = `${root}${addVersion ? `/ver/${version}` : ""}`;

  return prefix + url;
};

const normalizeDocsUrls = (
  version: string,
  entries: NavigationItem[]
): NavigationItem[] => {
  return entries.map((entry) => {
    const newEntry = Object.assign(entry);

    newEntry.slug = normalizeDocsUrl(version, entry.slug);

    if (entry.entries) {
      newEntry.entries = normalizeDocsUrls(version, entry.entries);
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
      entries: normalizeDocsUrls(version, category.entries),
    };
  });

const normalizeRedirects = (
  version: string,
  redirects: Redirect[]
): Redirect[] => {
  return redirects.map((redirect) => {
    return {
      ...redirect,
      source: normalizeDocsUrl(version, redirect.source),
      destination: normalizeDocsUrl(version, redirect.destination),
    };
  });
};

const getConfigPath = (version: string) =>
  resolve("content", version, "docs/config.json");

export const load = (version: string) => {
  const path = getConfigPath(version);

  if (existsSync(path)) {
    const content = readFileSync(path, "utf-8");

    return JSON.parse(content) as Config;
  } else {
    throw Error(`File ${path} does not exists.`);
  }
};

export const normalize = (config: Config, version: string): Config => {
  config.navigation = normalizeNavigation(version, config.navigation);

  if (config.redirects) {
    config.redirects = normalizeRedirects(version, config.redirects);
  }

  if (!config.variables) {
    config.variables = {};
  }

  return config;
};
