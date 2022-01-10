/*
 * Simple sitemap generator.
 */

import { writeFileSync } from "fs";
import { format } from "date-fns";

const host = process.env.NEXT_PUBLIC_HOST as string;
const defaultLastmod = format(new Date(), "yyyy-MM-dd");

interface SitemapPage {
  loc: string;
  lastmod?: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
}

const generateSitemapPage = ({
  loc,
  lastmod = defaultLastmod,
  changefreq = "daily",
  priority,
}: SitemapPage) => {
  return (
    "  <url>\n" +
    `    <loc>${host}${loc}</loc>\n` +
    `    <lastmod>${lastmod}</lastmod>\n` +
    `    <changefreq>${changefreq}</changefreq>\n` +
    (priority ? `    <priority>${priority}</priority>\n` : "") +
    "  </url>\n"
  );
};

interface Sitemap {
  pages: SitemapPage[];
  path: string;
}

export const generateSitemap = ({ pages, path }: Sitemap) => {
  const sourcemap =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    pages.map(generateSitemapPage).join("") +
    "</urlset>";

  writeFileSync(path, sourcemap);
};
