declare module "hast-util-to-string" {
  import { Node } from "unist";

  let toString: (node: Node) => string;

  export = toString;
}
