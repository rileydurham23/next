import glob from "glob";
import { writeFileSync } from "fs";
import { join, resolve } from "path";
import { format } from "date-fns";
import { loadSiteConfig, loadDocsConfig } from "./config";

const { latest, versions, redirects } = loadSiteConfig();

const NEXT_PUBLIC_ROOT_DIR = process.env.NEXT_PUBLIC_ROOT_DIR as string;
const NEXT_PUBLIC_HOST = process.env.NEXT_PUBLIC_HOST as string;

const extensions = ["md", "mdx", "ts", "tsx", "js", "jsx"];
const pagesRoot = resolve("pages");
const nextPages = [
  new RegExp(`^${pagesRoot}/_app.(${extensions.join("|")})$`),
  new RegExp(`^${pagesRoot}/_document.(${extensions.join("|")})$`),
  new RegExp(`^${pagesRoot}${NEXT_PUBLIC_ROOT_DIR}/.*`),
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

  return isLatest ? slug.replace(`/ver/${latest}`, "") : slug;
};

export const getLatestVersionRewirites = () =>
  getSlugDataListForVersion(latest).map(({ slug, version }) => ({
    source: NEXT_PUBLIC_ROOT_DIR + normalizeDocSlug(slug, version),
    destination: NEXT_PUBLIC_ROOT_DIR + slug,
  }));

interface SitemapLine {
  loc: string;
  lastmod: string;
  changefreq: string;
}

const generateSitemapLine = ({ loc, lastmod, changefreq }: SitemapLine) => {
  const prefix = NEXT_PUBLIC_HOST + NEXT_PUBLIC_ROOT_DIR;

  return (
    "  <url>\n" +
    `    <loc>${prefix}${loc}</loc>\n` +
    `    <lastmod>${lastmod}</lastmod>\n` +
    `    <changefreq>${changefreq}</changefreq>\n` +
    "  </url>\n"
  );
};

export const generateSitemap = () => {
  const lastmod = format(new Date(), "yyyy-MM-dd");
  const sitePages = getNonDocsPaths();
  const currentDocPages = getSlugDataListForVersion(latest);

  const sourcemap =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    sitePages.map((loc) =>
      generateSitemapLine({
        loc,
        lastmod,
        changefreq: "daily",
      })
    ) +
    currentDocPages
      .map(({ slug, version }) =>
        generateSitemapLine({
          loc: normalizeDocSlug(slug, version),
          lastmod,
          changefreq: "daily",
        })
      )
      .join("") +
    "</urlset>";

  writeFileSync(resolve("public", "static", "sitemap.xml"), sourcemap);
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
