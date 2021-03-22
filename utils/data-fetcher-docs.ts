import { resolve } from "path";
import template from "./template";
import { loadDocsConfig, loadSiteConfig } from "./config";

const { versions, latest, branches } = loadSiteConfig();

const { NEXT_PUBLIC_GITHUB_DOCS } = process.env;

export const getVersion = (filepath: string) => {
  const result = /\/content\/([^/]+)\/docs\//.exec(filepath);
  return (result && result[1]) as string;
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
  const { navigation, variables } = loadDocsConfig(current);
  const root = resolve(`content/${current}`);
  const content = template(originalContent, root, variables);

  const githubUrl = branches[current]
    ? filepath.replace(
        root,
        `${NEXT_PUBLIC_GITHUB_DOCS}/edit/${branches[current]}`
      )
    : "";

  return {
    content,
    navigation,
    githubUrl,
    versions: {
      current,
      latest,
      available: versions,
    },
  };
};
