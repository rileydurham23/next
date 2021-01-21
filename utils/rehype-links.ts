import { Transformer } from "unified";
import { Element, Root } from "hast";
import visit from "unist-util-visit";

import { generateSlugFromFilename } from "utils/url";
import { RehypeNode } from "utils/unist-types";

export interface RehypeLinksOptions {
  currentPublicDir: string;
}

const isLocalHref = (href: string) =>
  href.includes(".md") || !href.includes(".");

const isLocalLink = (node: RehypeNode): boolean => {
  return (
    node.type === "element" &&
    node.tagName === "a" &&
    typeof node.properties.href === "string" &&
    isLocalHref(node.properties.href)
  );
};

export default function rehypeLinks(options: RehypeLinksOptions): Transformer {
  return (root: Root) => {
    visit<Element>(root, [isLocalLink], (node) => {
      node.properties.href = generateSlugFromFilename(
        options.currentPublicDir,
        node.properties.href as string
      );
    });
  };
}
