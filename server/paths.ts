import glob from "glob";
import { resolve, join } from "path";
import { loadSiteConfig, loadDocsConfig } from "./config";
import { generateSitemap as sitemapGenerator } from "./sitemap";
import {
  getPageInfo,
  extensions,
  getURIFromPath,
  pagesRoot,
} from "./pages-helpers";

const { latest, versions, redirects } = loadSiteConfig();

const NEXT_PUBLIC_DOCS_DIR = process.env.NEXT_PUBLIC_DOCS_DIR as string;

/* mdx pages with "noindex" in frontmatter should be excluded from sitemap */

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

const getNonDocsPaths = () => {
  return glob
    .sync(join(pagesRoot, `**/*.{${extensions.join()}}`))
    .filter((path) => !nextPages.some((regexp) => regexp.test(path)))
    .filter(filterNoIndexPage)
    .map((path) => getURIFromPath(path));
};

type Identity = (path: string) => boolean;

const getSlugsForVersion = (version: string, filter: Identity = () => true) => {
  const root = join("/ver", version);
  const path = resolve("content", version, "docs/pages");

  return glob
    .sync(join(path, "**/*.mdx"))
    .filter(filter)
    .map((filename) =>
      filename.replace(/\/?(index)?.mdx?$/, "/").replace(path, root)
    );
};

const normalizeDocSlug = (slug: string, version: string) => {
  const isLatest = version === latest;

  return (
    NEXT_PUBLIC_DOCS_DIR +
    (isLatest ? slug.replace(`/ver/${latest}`, "") : slug)
  );
};

export const generateSitemap = () => {
  const sitePages = getNonDocsPaths().map((loc) => ({ loc }));
  const currentDocPages = getSlugsForVersion(latest, filterNoIndexPage).map(
    (slug) => ({ loc: normalizeDocSlug(slug, latest) })
  );

  sitemapGenerator({
    pages: [...sitePages, ...currentDocPages],
    path: resolve("public", "next_sitemap.xml"),
  });
};

export const generateFullSitemap = () => {
  const docPages = [];

  versions.forEach((version) => {
    docPages.push(
      ...getSlugsForVersion(version, filterNoIndexPage).map((slug) => ({
        loc: normalizeDocSlug(slug, version),
      }))
    );
  });

  sitemapGenerator({
    pages: docPages,
    path: resolve("public", "algolia_searchmap.xml"),
  });
};

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
