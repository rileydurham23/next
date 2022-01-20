declare module "hast-util-heading-rank" {
  import { Node } from "unist";

  let rank: (node: Node) => number;

  export = rank;
}
