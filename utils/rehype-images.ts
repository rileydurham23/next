import { existsSync, readFileSync } from "fs";
import probe from "probe-image-size";
import { Transformer } from "unified";
import { Element, Root } from "hast";
import visit from "unist-util-visit-parents";
import { RehypeNode } from "./unist-types";
import { isExternalLink, isHash } from "./url";

const isLocalImg = (node: RehypeNode): boolean =>
  node.type === "element" &&
  node.tagName === "img" &&
  typeof node.properties.src === "string" &&
  !isExternalLink(node.properties.src) &&
  !isHash(node.properties.src);

const isParagraph = (node: RehypeNode) =>
  node.type === "element" && node.tagName === "p";

const imgSizeRegExp = /@([0-9.]+)x/; // E.g. image@2x.png

const getScaleRatio = (src: string) => {
  if (imgSizeRegExp.test(src)) {
    const match = src.match(imgSizeRegExp);

    return parseFloat(match[1]);
  } else {
    return 1;
  }
};

interface RehypeImagesProps {
  destinationDir: string;
  staticPath: string;
}

interface ImageElement extends Element {
  properties: {
    src: string;
    width?: number;
    height?: number;
  };
}

export default function rehypeImages({
  destinationDir,
  staticPath,
}: RehypeImagesProps): Transformer {
  return (root: Root) => {
    visit<ImageElement>(root, [isLocalImg], (node, ancestors) => {
      const src = node.properties.src.replace(staticPath, `${destinationDir}/`);

      if (existsSync(src)) {
        const file = readFileSync(src);

        try {
          const { width, height } = probe.sync(file);
          const scaleRatio = getScaleRatio(src);

          node.properties.width = width / scaleRatio;
          node.properties.height = height / scaleRatio;
        } catch {}
      }

      /*
        We will use next/image on the client that will wrap image inside <div>,
        and placing <div> inside <p> will cause css bugs, so we remove this <p> here
      */

      const parent = ancestors[ancestors.length - 1] as Element;

      if (isParagraph(parent)) {
        const grandparent = ancestors[ancestors.length - 2] as Element;
        const parentIndex = grandparent.children.indexOf(parent);

        if (parent.children.length === 1) {
          grandparent.children[parentIndex] = node;
        } else {
          const newNodes = [];
          let currentParagraph: Element | undefined;

          parent.children.forEach((node, index) => {
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

              if (index === parent.children.length - 1) {
                newNodes.push(currentParagraph);
              }
            }
          });

          grandparent.children.splice(parentIndex, 1, ...newNodes);
        }

        return visit.SKIP;
      }
    });
  };
}
