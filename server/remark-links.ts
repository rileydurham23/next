/*
 * This plugin resolves relative links to absolute values and removes [index].mdx part.
 *
 * Docs use relative links to other pages iwth file extendions an the end.
 * E. g. "../getting-started/index.mdx". Its convenient because we don't need
 * to update links between versions and we can validate them with remark-lint.
 * But such links will not work on the site, because Next needs absolute paths.
 *
 * We do this transformation on server, because we can't distinguish between
 * "page/idex.mdx" and "page.mdx" on the client and cant update paths accordingly.
 */

import { Transformer } from "unified";
import { Link } from "mdast";
import visit from "unist-util-visit";
import { VFile } from "vfile";
import { isExternalLink, isHash, isPage } from "../utils/url";

interface ObjectHref {
  src: string;
}

type Href = string | ObjectHref;

const mdxNodeTypes = new Set([
  "mdxBlockElement",
  "mdxSpanElement",
  "mdxJsxFlowElement",
  "mdxJsxTextElement",
]);

function isPlainString(href): href is string {
  return typeof href === "string";
}

const updateHref = (basename: string, href: Href) => {
  if (!isPlainString(href)) {
    return href;
  }
  const isIndex = basename.match(/^index.mdx?$/);
  const prefix = isIndex ? "./" : "../";
  const newHref = href.replace(/(\/)?(index)?\.mdx?/, "/");
  const startsWithDot = /^\./.test(newHref);
  const startsWithSlash = /^\//.test(newHref);

  return (startsWithDot && isIndex) || startsWithSlash
    ? newHref
    : prefix + newHref;
};

const isLocalHref = (href?: string | EsmNode) => {
  if (!href) {
    return false;
  }

  if (typeof href !== "string") {
    const url = href.value;
    return !isExternalLink(url) && !isHash(url) && isPage(url);
  }

  return !isExternalLink(href) && !isHash(href) && isPage(href);
};

const isMdxComponentWithLocalHref = (node: MdxastNode): boolean => {
  return (
    mdxNodeTypes.has(node.type) &&
    !!(node as MdxAnyElement).attributes.find(
      ({ name, value }) =>
        name === "href" && isLocalHref(value as string | EsmNode)
    )
  );
};

const isRemarkLinkWilthLocalHref = (node: MdxastNode): boolean => {
  return node.type === "link" && isLocalHref(node.url);
};

const isLocalLink = (node: MdxastNode): boolean => {
  return isMdxComponentWithLocalHref(node) || isRemarkLinkWilthLocalHref(node);
};

export default function remarkLinks(): Transformer {
  return (root: MdxastRootNode, vfile: VFile) => {
    const basename = vfile?.basename || "";

    visit<Link | MdxAnyElement>(root, [isLocalLink], (node) => {
      if (node.type === "link") {
        node.url = updateHref(basename, node.url) as string;
      } else if (mdxNodeTypes.has(node.type)) {
        const hrefAttribute = node.attributes.find(
          ({ name }) => name === "href"
        );

        hrefAttribute.value = updateHref(
          basename,
          hrefAttribute.value as Href
        ) as string;
      }
    });
  };
}
