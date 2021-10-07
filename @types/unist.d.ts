type RehypeRoot = import("hast").Root;
type RehypeElement = import("hast").Element;
type RehypeDocType = import("hast").DocType;
type RehypeComment = import("hast").Comment;
type RehypeText = import("hast").Text;
type UnistParent = import("unist").Parent;
type UnistNode = import("unist").Node;
type UnistLiteral = import("unist").Literal;
type MdastContent = import("mdast").Content;
type EstreeJstProgram = import("estree-jsx");

declare interface MdxJsxAttribute {
  type: "mdxJsxAttribute";
  name: string;
  value:
    | boolean
    | number
    | string
    | null
    | undefined
    | Array<string | number>
    | ProgramEsmNode;
}

declare interface MdxElement extends UnistParent {
  attributes: MdxJsxAttribute[];
}
declare interface MdxBlockElement extends MdxElement {
  type: "mdxBlockElement";
}

declare interface MdxSpanElement extends MdxElement {
  type: "mdxSpanElement";
}

declare interface MdxJsxFlowElement extends MdxElement {
  type: "mdxJsxFlowElement";
}

declare interface MdxJsxTextElement extends MdxElement {
  type: "mdxJsxTextElement";
}

declare interface ProgramEsmNode extends UnistNode {
  type: "mdxjsEsm" | "mdxJsxAttributeValueExpression";
  value?: string;
  data: {
    estree?: Program;
  } & Literal["data"];
}

declare interface PlainEsmNode extends UnistNode {
  type: "mdxjsEsm";
  value: string;
}
declare type EsmNode = PlainEsmNode | ProgramEsmNode;

declare type MdxAnyElement =
  | MdxBlockElement
  | MdxSpanElement
  | MdxJsxFlowElement
  | MdxJsxTextElement;

declare type RehypeNode =
  | RehypeRoot
  | RehypeElement
  | RehypeDocType
  | RehypeComment
  | RehypeText;

declare type MdxhastNode = RehypeNode | EsmNode | MdxAnyElement;

declare interface MdxhastRootNode extends UnistNode {
  type: "root";
  children: MdxhastNode[];
}

declare type MdxastNode = MdastContent | MdxAnyElement | EsmNode;

declare interface MdxastRootNode extends UnistNode {
  type: "root";
  children?: MdxastNode[];
}
