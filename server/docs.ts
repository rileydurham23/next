import renderToString from "next-mdx-remote/render-to-string";
import { ThemeProvider } from "styled-components";
import { Settings, Attacher } from "unified";
import theme from "components/theme";
import { mdxHydrateOptions } from "components/MDX";
import { NavigationCategory } from "components/DocNavigation";
import {
  getPageContent,
  getNavigation,
  getSlugListForVersion,
  versions,
  latest,
  PageMeta,
} from "utils/data-fetcher-docs";
import { getPlugins } from "utils/plugins";

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

export interface SerializedMdx {
  compiledSource: string;
  renderedOutput: string;
}

export interface PageData {
  navigation: NavigationCategory[];
  meta: PageMeta;
  mdx: SerializedMdx;
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
    provider: {
      component: ThemeProvider,
      props: { theme },
    },
    components: mdxHydrateOptions.components,
    mdxOptions: {
      rehypePlugins: rehypePlugins as Attacher<[Settings?], Settings>[],
      remarkPlugins: remarkPlugins as Attacher<[Settings?], Settings>[],
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
