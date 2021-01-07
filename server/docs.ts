import renderToString from "next-mdx-remote/render-to-string";

import {
  getPageContent,
  getNavigation,
  getSlugListForVersion,
  versions,
} from "utils/data-fetcher-docs";

import { HeaderMeta } from "utils/rehype-headers";
import { getPlugins } from "utils/plugins";

import { NavigationCategory } from "components/Navigation";

export interface SerializedMdx {
  compiledSource: string;
  renderedOutput: string;
  scope?: Scope;
}

interface PageData {
  navigation: NavigationCategory[];
  meta: Record<string, string>;
  mdx: {
    compiledSource: string;
    renderedOutput: string;
    scope?: Scope;
  };
  headers: HeaderMeta[];
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

  let headers: HeaderMeta[] = [];

  const { remarkPlugins, rehypePlugins } = getPlugins({
    currentPublicDir: publicDir,
    withMdx: true,
    headersCallback: (returnedHeaders: HeaderMeta[]) => {
      headers = returnedHeaders;
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

  return { navigation, meta, headers, mdx };
};

// Generating list of possible slugs
// Right now its all files in the docs dir, except README.md

export const getSlugList = (): string[] =>
  versions.reduce((result, version) => {
    return [...result, ...getSlugListForVersion(version)];
  }, []);
