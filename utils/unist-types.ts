import { Node } from "unist";
import { Root, Element, DocType, Comment, Text } from "hast";

export interface MdxastNode extends Node {
  value?: string;
  children?: MdxastNode[];
}

export type RehypeNode = Root | Element | DocType | Comment | Text;

export interface JsxNode extends MdxastNode {
  type: "jsx";
  value: string;
}

export interface ImportNode extends Node {
  type: "import";
  value: string;
}

export interface ExportNode extends Node {
  type: "export";
  value: string;
  default: boolean;
}

export type MdxhastNode = RehypeNode | JsxNode | ImportNode | ExportNode;

export type MdxhastRootNode = {
  type: "root";
  children: MdxhastNode[];
};

export interface AdmonitionNode extends MdxastNode {
  type: "admonition";
  data: {
    type: string;
    title?: string;
    content: string;
  };
}
