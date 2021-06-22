import glob from "glob";
import { resolve, join } from "path";
import { loadSiteConfig, loadDocsConfig } from "./config";
import { generateSitemap as sitemapGenerator } from "./sitemap";

const { latest, versions, redirects } = loadSiteConfig();

const NEXT_PUBLIC_DOCS_DIR = process.env.NEXT_PUBLIC_DOCS_DIR as string;

const extensions = ["md", "mdx", "ts", "tsx", "js", "jsx"];
const pagesRoot = resolve("pages");
const nextPages = [
  new RegExp(`^${pagesRoot}/_app.(${extensions.join("|")})$`),
  new RegExp(`^${pagesRoot}/_document.(${extensions.join("|")})$`),
  new RegExp(`^${pagesRoot}${NEXT_PUBLIC_DOCS_DIR}/.*`),
];

const getNonDocsPaths = () => {
  return glob
    .sync(join(pagesRoot, `**/*.{${extensions.join()}}`))
    .filter((path) => !nextPages.some((regexp) => regexp.test(path)))
    .map((path) => path.replace(pagesRoot, ""))
    .map((path) =>
      path.replace(new RegExp(`(/index)?.(${extensions.join("|")})$`), "/")
    );
};

const getSlugDataListForVersion = (version: string) => {
  const root = join("/ver", version);
  const path = resolve("content", version, "docs/pages");

  return glob.sync(join(path, "**/*.mdx")).map((filename) => {
    return {
      slug: filename.replace(/\/?(index)?.mdx?$/, "/").replace(path, root),
      version,
    };
  });
};

const normalizeDocSlug = (slug: string, version: string) => {
  const isLatest = version === latest;

  return (
    NEXT_PUBLIC_DOCS_DIR +
    (isLatest ? slug.replace(`/ver/${latest}`, "") : slug)
  );
};

export const getLatestVersionRewirites = () =>
  getSlugDataListForVersion(latest).map(({ slug, version }) => ({
    source: normalizeDocSlug(slug, version),
    destination: NEXT_PUBLIC_DOCS_DIR + slug,
  }));

export const generateSitemap = () => {
  const sitePages = getNonDocsPaths().map((loc) => ({ loc }));
  const currentDocPages = getSlugDataListForVersion(
    latest
  ).map(({ slug, version }) => ({ loc: normalizeDocSlug(slug, version) }));

  sitemapGenerator({
    pages: [...sitePages, ...currentDocPages],
    path: resolve("public", "static", "sitemap.xml"),
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
