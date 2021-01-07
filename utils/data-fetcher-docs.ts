import { existsSync, readFileSync } from "fs";
import { join } from "path";
import glob from "glob";

import matter from "gray-matter";

import { joinExisting } from "utils/join-existing";
import { HeaderMeta } from "utils/rehype-headers";

import { NavigationCategory } from "components/Navigation";

import { versions, latest } from "content/meta/docs/config";

const DOCS_DIRECTIORY = join(process.cwd(), "content", "teleport", "docs");
const DOCS_PUBLIC_URI = "/teleport/docs";
const DOCS_META_DIRECTORY = join(process.cwd(), "content", "meta", "docs"); // tmp solution, until migration

export interface PageMeta {
  title?: string;
  description?: string;
  h1?: string;
  headers: HeaderMeta[];
}

interface PageContent {
  content: string;
  meta: PageMeta;
  publicDir: string;
  filepath: string;
}

export const getPageContent = (slug: string, version?: string): PageContent => {
  const filepath = getMdFileNameBySlug(version, slug);

  if (!filepath) return;

  const base = !version ? join(DOCS_DIRECTIORY, latest) : DOCS_DIRECTIORY;

  const publicDir = filepath
    .replace(base, DOCS_PUBLIC_URI)
    .replace(/\/[^/]+.md$/, "");

  const fileContents = readFileSync(filepath, "utf8");

  const { data: meta, content } = matter(fileContents);

  meta.headers = [];
  meta.h1 = meta.title || "";

  return { meta, content, publicDir, filepath } as PageContent;
};

export const getMdFileNameBySlug = (
  version?: string,
  slug?: string
): string => {
  const pathAsFile = join(
    DOCS_DIRECTIORY,
    version || latest,
    `${slug || "index"}.md`
  );

  const pathAsDir = join(
    DOCS_DIRECTIORY,
    version || latest,
    `${slug ? `${slug}/` : ""}index.md`
  );

  if (existsSync(pathAsFile)) {
    return pathAsFile;
  } else if (existsSync(pathAsDir)) {
    return pathAsDir;
  }

  return "";
};

export const getNavigation = (version?: string) => {
  const path = join(DOCS_META_DIRECTORY, version || latest, "navigation.json");

  if (existsSync(path)) {
    try {
      const content = readFileSync(path, "utf-8");
      const { navigation } = JSON.parse(content);

      (navigation as NavigationCategory[]).forEach((c) => {
        c.entries.forEach((i) => {
          i.slug = joinExisting(DOCS_PUBLIC_URI, version, i.slug);
        });
      });

      return navigation;
    } catch {
      throw Error(`File ${path} didn't include 'navigation' field.`);
    }
  }
};

export const getSlugListForVersion = (version: string) => {
  const path = join(DOCS_DIRECTIORY, version);
  const root =
    version === latest ? DOCS_PUBLIC_URI : join(DOCS_PUBLIC_URI, version);

  return glob
    .sync(join(path, "**/*.md"))
    .filter((filename) => !/README.md$/.exec(filename))
    .map((filename) => filename.replace(/(\/index)?.md$/, "/"))
    .map((filename) => filename.replace(path, root));
};

export { versions, latest };
