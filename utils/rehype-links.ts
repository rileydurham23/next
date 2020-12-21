import { Transformer } from "unified";
import visit from "unist-util-visit";

import { generateSlugFromFilename } from "utils/url";
import { RehypeNode } from "utils/unist-types";

interface RehypeLinksOptions {
  currentPublicDir: string;
}

const isMdLink = (node: RehypeNode): boolean => {
  const { type, tagName, properties } = node;

  return (
    type === "element" &&
    tagName === "a" &&
    !!properties.href &&
    properties.href.includes(".md")
  );
};

export default (options: RehypeLinksOptions): Transformer => {
  return (root: RehypeNode) => {
    visit<RehypeNode>(root, [isMdLink], (node) => {
      node.properties.href = generateSlugFromFilename(
        options.currentPublicDir,
        node.properties.href
      );
    });
  };
};
