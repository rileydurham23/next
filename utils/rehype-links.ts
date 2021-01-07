import { Transformer } from "unified";
import { Element, Root } from "hast";
import visit from "unist-util-visit";

import { generateSlugFromFilename } from "utils/url";
import { RehypeNode } from "utils/unist-types";

export interface RehypeLinksOptions {
  currentPublicDir: string;
}

const isMdLink = (node: RehypeNode): boolean => {
  return (
    node.type === "element" &&
    node.tagName === "a" &&
    typeof node.properties.href === "string" &&
    node.properties.href.includes(".md")
  );
};

export default function rehypeLinks(options: RehypeLinksOptions): Transformer {
  return (root: Root) => {
    visit<Element>(root, [isMdLink], (node) => {
      node.properties.href = generateSlugFromFilename(
        options.currentPublicDir,
        node.properties.href as string
      );
    });
  };
}
