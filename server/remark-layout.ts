/*
 * This plugin injects page wrapper component based on the value on `layout` field in frontmatter.
 * All fronmatter fields except `layout` and privded to the wrapper component as `meta` prop.
 */

import { Transformer } from "unified";
import yaml from "js-yaml";
import stringifyObject from "stringify-object";
import { createMdxjsEsmNode } from "./acorn";

type Meta = Record<string, unknown>;

interface RemarkLayoutOptions {
  layouts: Record<string, string>;
}

const getLayoutCode = (layout: string, meta: Meta) => `
import Layout from "${layout}";

export const meta = ${stringifyObject(meta)};

const Wrapper = (props) => <Layout {...props} meta={meta} />;

export default Wrapper;
`;

export default function remarkLayout({
  layouts,
}: RemarkLayoutOptions): Transformer {
  return (root: MdxastRootNode) => {
    const children = root.children as MdxastNode[];

    const firstChild = children[0];
    let frontmatter: Meta = {};

    if (firstChild && firstChild.type === "yaml") {
      frontmatter = yaml.load(firstChild.value as string) as Meta;
    }

    const { layout = "default", ...meta } = frontmatter;

    const layoutCode = getLayoutCode(layouts[layout as string], meta);

    root.children.unshift(createMdxjsEsmNode(layoutCode));
  };
}
