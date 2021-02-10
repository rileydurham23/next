import { existsSync, readFileSync } from "fs";
import { join, resolve } from "path";
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

import { versions, latest, contentRoot, docsSourcesRoot } from "config";

const DOCS_REPO_ROOT = resolve(contentRoot);
const DOCS_DIRECTIORY = resolve(docsSourcesRoot);
const { NEXT_PUBLIC_GITHUB_DOCS } = process.env;

const versionRegExp = /\/teleport\/docs\/([^/]+)\//;

export const getVersion = (filepath: string) => {
  return versionRegExp.exec(filepath)[1];
};

const getVars = (filepath: string) => {
  const version = getVersion(filepath);

  const path = join(DOCS_DIRECTIORY, version, "config.json");

  if (existsSync(path)) {
    try {
      const content = readFileSync(path, "utf-8");

      return JSON.parse(content).variables || {};
    } catch {
      throw Error(`File ${path} is not a valid json.`);
    }
  }

  return {};
};

interface getPageContentOptions {
  content: string;
  filepath: string;
  rootDir: string;
}

export const getPageContent = ({
  content: fileContents,
  filepath,
  rootDir,
}: getPageContentOptions): string => {
  return template(fileContents, rootDir, getVars(filepath));
};

export interface PageMeta {
  title?: string;
  description?: string;
  h1?: string;
  headers: HeaderMeta[];
  githubUrl: string;
}

export const getPageMeta = ({
  content: originalContent,
  filepath,
}: {
  content: string;
  filepath: string;
}) => {
  const { data: meta, content } = matter(originalContent);

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

export const getNavigation = (version: string) => {
  const path = join(DOCS_DIRECTIORY, version, "config.json");

  if (existsSync(path)) {
    try {
      const content = readFileSync(path, "utf-8");
      const { navigation } = JSON.parse(content);

      navigation.forEach((c) => {
        c.entries.forEach((i) => {
          i.slug = joinExisting(
            "/",
            version !== latest ? `ver/${version}` : "",
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
interface ParseMdxContentProps {
  content: string;
  filepath: string;
}

export const parseMdxContent = ({
  content: originalContent,
  filepath,
}: ParseMdxContentProps) => {
  const current = getVersion(filepath);

  const content = getPageContent({
    content: matter(originalContent).content,
    filepath,
    rootDir: contentRoot,
  });

  const meta = getPageMeta({ content, filepath });

  const navigation = getNavigation(current);

  return {
    content,
    meta,
    navigation,
    versions: {
      current,
      latest,
      available: versions,
    },
  };
};

export const getSlugListForVersion = (version: string) => {
  const path = join(DOCS_DIRECTIORY, version, "pages");
  const root = join("/ver", version);

  return glob
    .sync(join(path, "**/*.md"))
    .map((filename) => filename.replace(/\/?(index)?.md$/, "/"))
    .map((filename) => filename.replace(path, root));
};

export const getLatestVersionRewirites = () => {
  return getSlugListForVersion(latest).map((destination) => ({
    source: destination.replace(`/ver/${latest}`, ""),
    destination,
  }));
};
