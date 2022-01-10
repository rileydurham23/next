import glob from "glob";
import { resolve, join } from "path";
import { loadConfig as loadDocsConfig } from "./config-docs";
import { loadConfig as loadSiteConfig } from "./config-site";
import { generateSitemap as sitemapGenerator } from "./sitemap";
import {
  getPageInfo,
  extensions,
  getURIFromPath,
  pagesRoot,
} from "./pages-helpers";

const { latest, versions, redirects } = loadSiteConfig();

const NEXT_PUBLIC_DOCS_DIR = process.env.NEXT_PUBLIC_DOCS_DIR as string;

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
  new RegExp(`^${pagesRoot}${NEXT_PUBLIC_DOCS_DIR}/.*`),
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
 * Returns all slugs for one docs version with normalized paths.
 */

const getSlugsForVersion = (version: string) => {
  const root = join("/ver", version);
  const path = resolve("content", version, "docs/pages");

  return glob
    .sync(join(path, "**/*.mdx"))
    .filter(filterNoIndexPage)
    .map((filename) =>
      filename.replace(/\/?(index)?.mdx?$/, "/").replace(path, root)
    );
};

/*
 * Converts paths to absolute from relative (we need sitemaps to have absolute paths).
 */

const normalizeDocSlug = (slug: string, version: string) => {
  const isLatest = version === latest;

  return (
    NEXT_PUBLIC_DOCS_DIR +
    (isLatest ? slug.replace(`/ver/${latest}`, "") : slug)
  );
};

/*
 * Generates sitemap used by search engines.
 * Only have paths for current version of docs.
 */

export const generateSitemap = () => {
  const sitePages = getNonDocsPaths().map((loc) => ({ loc }));
  const currentDocPages = getSlugsForVersion(latest).map((slug) => ({
    loc: normalizeDocSlug(slug, latest),
  }));

  sitemapGenerator({
    pages: [...sitePages, ...currentDocPages],
    path: resolve("public", "next_sitemap.xml"),
  });
};

/*
 * Generates sitemap used by Algolia indexer.
 * Have paths for all versions of docs and no other pages.
 */

export const generateFullSitemap = () => {
  const docPages = [];

  versions.forEach((version) => {
    docPages.push(
      ...getSlugsForVersion(version).map((slug) => ({
        loc: normalizeDocSlug(slug, version),
      }))
    );
  });

  sitemapGenerator({
    pages: docPages,
    path: resolve("public", "algolia_searchmap.xml"),
  });
};

/*
 * Each version of docs has its own set of redirects in their config.json files.
 * Here we load and merge them all with the redirects list from the main config.json.
 */

export const getRedirects = () => {
  const result = versions.flatMap((version) => {
    const config = loadDocsConfig(version);

    return config.redirects ? config.redirects : [];
  });

  if (redirects) {
    result.push(...redirects);
  }

  return result;
};
