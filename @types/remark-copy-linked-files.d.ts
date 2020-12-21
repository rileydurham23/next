declare module "remark-copy-linked-files" {
  import { Plugin } from "unified";

  let copyLinkedFiler: Plugin<[]>;

  export = copyLinkedFiler;
}
