import { NavigationCategory } from "components/DocsPage";
import {
  getPageMeta,
  getNavigation,
  getSlugListForVersion,
  getMdFileNameBySlug,
  versions,
  latest,
  PageMeta,
} from "utils/data-fetcher-docs";

interface Version {
  title: string;
  href: string;
  isLatest: boolean;
  isCurrent: boolean;
}

const getVersions = (current: string): Version[] => {
  return versions.map((version) => ({
    title: version,
    href: version === latest ? "/" : `/ver/${version}/`,
    isLatest: latest === version,
    isCurrent: (current || latest) === version,
  }));
};
export interface PageData {
  navigation: NavigationCategory[];
  meta: PageMeta;
  versions: Version[];
  isLatestVersion: boolean;
}

export const getPostBySlug = async (
  slug: string | string[] = ""
): Promise<PageData | undefined> => {
  let version: string;
  let slugString = slug as string;

  if (Array.isArray(slug)) {
    if (slug[0] === "ver" && versions.includes(slug[1])) {
      version = slug[1];
      slugString = slug.slice(2).join("/");
    } else {
      slugString = slug.join("/");
    }
  }

  const filepath = getMdFileNameBySlug(version, slugString);

  if (!filepath) return;

  const navigation = getNavigation(version);
  const meta = getPageMeta(filepath);

  return {
    navigation,
    meta,
    versions: getVersions(version),
    isLatestVersion: !version,
  };
};

// Generating list of possible slugs
// Right now its all files in the docs dir, except README.md

export const getSlugList = (): string[] =>
  versions.reduce((result, version) => {
    return [...result, ...getSlugListForVersion(version)];
  }, []);
