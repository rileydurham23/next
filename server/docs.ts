import renderToString from "next-mdx-remote/render-to-string";

import {
  getPageContent,
  getNavigation,
  getSlugListForVersion,
  versions,
  latest,
  PageMeta,
} from "utils/data-fetcher-docs";

import { getPlugins } from "utils/plugins";

import { NavigationCategory } from "components/DocNavigation";

interface Version {
  title: string;
  href: string;
  isLatest: boolean;
  isCurrent: boolean;
}

const getVersions = (current: string): Version[] => {
  const root = "/teleport/docs/";

  return versions.map((version) => ({
    title: version,
    href: version === latest ? root : root + version,
    isLatest: latest === version,
    isCurrent: (current || latest) === version,
  }));
};

export interface SerializedMdx {
  compiledSource: string;
  renderedOutput: string;
  scope?: Scope;
}

export interface PageData {
  navigation: NavigationCategory[];
  meta: PageMeta;
  mdx: SerializedMdx;
  versions: Version[];
  isLatestVersion: boolean;
}

export const getPostBySlug = async (
  slug: string | string[] = "",
  components: Record<string, React.ReactNode>
): Promise<PageData | undefined> => {
  let version: string;
  let slugString = slug as string;

  if (Array.isArray(slug)) {
    if (versions.includes(slug[0])) {
      version = slug[0];
      slugString = slug.slice(1).join("/");
    } else {
      slugString = slug.join("/");
    }
  }

  const { publicDir, filepath, meta, content } = getPageContent(
    slugString,
    version
  );

  const navigation = getNavigation(version);

  const { remarkPlugins, rehypePlugins } = getPlugins({
    currentPublicDir: publicDir,
    withMdx: true,
    headersCallback: (result) => {
      meta.headers = result;
    },
    titleCallback: (result) => {
      meta.h1 = result;

      if (!meta.title) {
        meta.title = result;
      }
    },
  });

  const mdx = await renderToString(content, {
    components,
    mdxOptions: {
      rehypePlugins,
      remarkPlugins,
      filepath,
    },
  });

  return {
    navigation,
    meta,
    mdx,
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
