import { Node } from "unist";

export interface MdxastNode extends Node {
  value?: string;
  children?: MdxastNode[];
}

export interface RehypeNode extends Node {
  properties: Record<string, string>;
}

export interface JsxNode extends MdxastNode {
  type: "jsx";
  value: string;
}

export interface AdmonitionNode extends MdxastNode {
  type: "admonition";
  data: {
    type: string;
    title?: string;
    content: string;
  };
}
