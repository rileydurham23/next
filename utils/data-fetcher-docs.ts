import { existsSync, readFileSync } from "fs";
import { join } from "path";
import glob from "glob";
import matter from "gray-matter";
import unified from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import html from "rehype-stringify";
import template from "utils/template";
import rehypeHeaders, { HeaderMeta } from "utils/rehype-headers";

import { joinExisting } from "utils/join-existing";

import { NavigationCategory } from "components/DocsPage/types";

import { versions, latest, filesDir } from "config";

const DOCS_REPO_ROOT = join(process.cwd(), filesDir);
const DOCS_DIRECTIORY = join(DOCS_REPO_ROOT, "docs");
const DOCS_META_DIRECTORY = join(process.cwd(), "content", "meta", "docs"); // tmp solution, until migration
const { NEXT_PUBLIC_GITHUB_DOCS } = process.env;
interface getPageContentOptions {
  content: string;
  filepath: string;
}

export const getPageContent = ({
  content: fileContents,
  filepath,
}: getPageContentOptions): string => {
  const version: string = filepath.replace(DOCS_DIRECTIORY, "").split("/")[1];

  return template(fileContents, getVars(version));
};

export interface PageMeta {
  title?: string;
  description?: string;
  h1?: string;
  headers: HeaderMeta[];
  githubUrl: string;
}

export const getPageMeta = (filepath: string) => {
  const { data: meta, content } = matter(readFileSync(filepath, "utf8"));

  if (meta.title) {
    meta.h1 = meta.title;
  }

  meta.headers = [];
  meta.githubUrl = filepath.replace(
    DOCS_REPO_ROOT,
    `${NEXT_PUBLIC_GITHUB_DOCS}/edit/master`
  );

  const vfile = unified()
    .use(markdown)
    .use(remark2rehype)
    .use(rehypeSlug)
    .use(rehypeHeaders, { maxLevel: 2 })
    .use(html)
    .processSync(content);

  const data = vfile.data as { h1?: string; headers: HeaderMeta[] };

  if (data?.h1) {
    meta.h1 = data?.h1;

    if (!meta.title) meta.title = data?.h1;
  }

  meta.headers = data.headers;

  return meta as PageMeta;
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

const getVars = (version?: string) => {
  const path = join(DOCS_META_DIRECTORY, version || latest, "vars.json");

  if (existsSync(path)) {
    try {
      const content = readFileSync(path, "utf-8");

      return JSON.parse(content);
    } catch {
      throw Error(`File ${path} is not a valid json.`);
    }
  }

  return {};
};

export const getNavigation = (version?: string) => {
  const path = join(DOCS_META_DIRECTORY, version || latest, "navigation.json");

  if (existsSync(path)) {
    try {
      const content = readFileSync(path, "utf-8");
      const { navigation } = JSON.parse(content);

      navigation.forEach((c) => {
        c.entries.forEach((i) => {
          i.slug = joinExisting(
            "/",
            version ? `ver/${version}` : version,
            i.slug
          );
        });
      });

      return navigation as NavigationCategory[];
    } catch {
      throw Error(`File ${path} didn't include 'navigation' field.`);
    }
  }
};

export const getSlugListForVersion = (version: string) => {
  const path = join(DOCS_DIRECTIORY, version);
  const root = version === latest ? "" : join("/ver", version);

  return glob
    .sync(join(path, "**/*.md"))
    .filter((filename) => !/README.md$/.exec(filename))
    .map((filename) => filename.replace(/\/?(index)?.md$/, "/"))
    .map((filename) => filename.replace(path, root));
};

export { versions, latest };
