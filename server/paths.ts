import glob from "glob";
import { resolve, join } from "path";
import { generateSitemap as sitemapGenerator } from "./sitemap";
import {
  getPageInfo,
  extensions,
  getURIFromPath,
  pagesRoot,
} from "./pages-helpers";

/*
 * Excludes mdx pages with "noindex" in frontmatter from sitemap
 */

const filterNoIndexPage = (path: string) => {
  const isMdxPage = /\.mdx?$/.test(path);

  if (!isMdxPage) {
    return true;
  }

  const { data } = getPageInfo<{ noindex?: boolean }>(path);

  const { frontmatter } = data;

  return !frontmatter.noindex;
};

/*
 * Filenames inside "pages" folder to exclude from sitemsp.
 * Docs pages are also filtered here and are added separately later
 * to filter only the current version.
 */

const nextPages = [
  new RegExp(`^${pagesRoot}/api/.*$`),
  new RegExp(`^${pagesRoot}/_app.(${extensions.join("|")})$`),
  new RegExp(`^${pagesRoot}/_document.(${extensions.join("|")})$`),
];

/*
 * We generate nonDocs and docs path separately because different sitempast require
 * different sets of docs names.
 */

const getNonDocsPaths = () => {
  return glob
    .sync(join(pagesRoot, `**/*.{${extensions.join()}}`))
    .filter((path) => !nextPages.some((regexp) => regexp.test(path)))
    .filter(filterNoIndexPage)
    .map((path) => getURIFromPath(path));
};

/*
 * Generates sitemap used by search engines.
 * Only have paths for current version of docs.
 */

export const generateSitemap = () => {
  sitemapGenerator({
    pages: getNonDocsPaths().map((loc) => ({ loc })),
    path: resolve("public", "next_sitemap.xml"),
  });
};
