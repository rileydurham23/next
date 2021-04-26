import { Parent, Node } from "unist";
import { Root, Element, DocType, Comment, Text } from "hast";
import { Content } from "mdast";

export interface MdxJsxAttribute {
  type: "mdxJsxAttribute";
  name: string;
  value: boolean | number | string | null | undefined | Array<string | number>;
}

export interface MdxElement extends Parent {
  attributes: MdxJsxAttribute[];
}
export interface MdxBlockElement extends MdxElement {
  type: "mdxBlockElement";
}

export interface MdxSpanElement extends MdxElement {
  type: "mdxSpanElement";
}

export interface MdxJsxFlowElement extends MdxElement {
  type: "mdxJsxFlowElement";
}

export interface MdxJsxTextElement extends MdxElement {
  type: "mdxJsxTextElement";
}

export interface EsmNode extends Node {
  type: "mdxjsEsm";
  value: string;
}

export type MdxAnyElement =
  | MdxBlockElement
  | MdxSpanElement
  | MdxJsxFlowElement
  | MdxJsxTextElement;

export type RehypeNode = Root | Element | DocType | Comment | Text;

export type MdxhastNode = RehypeNode | EsmNode | MdxAnyElement;

export interface MdxhastRootNode extends Node {
  type: "root";
  children: MdxhastNode[];
}

export type MdxastNode = Content | MdxAnyElement | EsmNode;

export interface MdxastRootNode extends Node {
  type: "root";
  children?: MdxastNode[];
}
