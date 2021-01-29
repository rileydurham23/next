import { Transformer } from "unified";
import { Element, Root } from "hast";
import visit from "unist-util-visit";
import { RehypeNode } from "utils/unist-types";
import { VFile } from "vfile";
import { isExternalLink, isHash } from "utils/url";

const isLocalHref = (href: string) => !isExternalLink(href) && !isHash(href);

const isLocalLink = (node: RehypeNode): boolean => {
  return (
    node.type === "element" &&
    node.tagName === "a" &&
    typeof node.properties.href === "string" &&
    isLocalHref(node.properties.href)
  );
};

export default function rehypeLinks(): Transformer {
  return (root: Root, vfile: VFile) => {
    const { basename } = vfile;

    const prefix = basename === "index.md" ? "./" : "../";

    visit<Element>(root, [isLocalLink], (node) => {
      const { href } = node.properties;
      const newHref = (href as string).replace(/(\/)?(index)?\.md/, "/");

      node.properties.href = /^\//.test(newHref) ? newHref : prefix + newHref;
    });
  };
}
