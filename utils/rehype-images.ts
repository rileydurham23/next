import { Transformer } from "unified";
import { Element, Root } from "hast";
import visit from "unist-util-visit-parents";
import { RehypeNode, MdxJsxTextElement, MdxJsxAttribute } from "./unist-types";
import { isExternalLink, isHash } from "./url";

interface MdxImageElement extends MdxJsxTextElement {
  name: "img";
  attributes: MdxJsxAttribute[];
}

const isImgObj = (node): node is MdxImageElement =>
  ((node.type === "mdxJsxTextElement" || node.type === "mdxJsxFlowElement") &&
    node.name === "img") ||
  node.$assetMeta;

const isLocalImg = (node): boolean => {
  if (isImgObj(node)) {
    return true;
  }
  return (
    node.type === "element" &&
    node.tagName === "img" &&
    typeof node.properties.src === "string" &&
    !isExternalLink(node.properties.src) &&
    !isHash(node.properties.src)
  );
};

const isParagraphWithImageInside = (node: RehypeNode) => {
  return (
    node.type === "element" &&
    node.tagName === "p" &&
    node.children.some(isLocalImg)
  );
};

export default function rehypeImages(): Transformer {
  return (root: Root) => {
    /*
      We will use next/image on the client that will wrap image inside <div>,
      and placing <div> inside <p> will cause css bugs, so we remove this <p> here
    */

    visit<Element>(
      root,
      [isParagraphWithImageInside],
      (paragraphNode, ancestors) => {
        const parent = ancestors[ancestors.length - 1] as Element;
        const paragraphIndex = parent.children.indexOf(paragraphNode);

        if (paragraphNode.children.length === 1) {
          parent.children[paragraphIndex] = paragraphNode.children[0];
        } else {
          const newNodes = [];
          let currentParagraph: Element | undefined;

          paragraphNode.children.forEach((node, index) => {
            if (isLocalImg(node)) {
              if (currentParagraph) {
                newNodes.push(currentParagraph);
                currentParagraph = undefined;
              }

              newNodes.push(node);
            } else {
              if (!currentParagraph) {
                currentParagraph = {
                  type: "element",
                  tagName: "p",
                  children: [node],
                };
              } else {
                currentParagraph.children.push(node);
              }

              if (index === paragraphNode.children.length - 1) {
                newNodes.push(currentParagraph);
              }
            }
          });

          parent.children.splice(paragraphIndex, 1, ...newNodes);

          return [visit.SKIP, paragraphIndex + newNodes.length];
        }
      }
    );
  };
}
