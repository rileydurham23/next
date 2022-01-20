declare type VFile = import("vfile").VFile;
declare module "@mdx-js/react" {
  import * as React from "react";

  type ComponentType =
    | "a"
    | "blockquote"
    | "code"
    | "del"
    | "em"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "hr"
    | "img"
    | "inlineCode"
    | "li"
    | "ol"
    | "p"
    | "pre"
    | "strong"
    | "sup"
    | "table"
    | "td"
    | "thematicBreak"
    | "tr"
    | "ul"
    | "Quote";

  export type Components = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key in ComponentType]?: React.ComponentType<any>;
  };

  export interface MDXProviderProps {
    children: React.ReactNode;
    components: Components;
  }

  export class MDXProvider extends React.Component<MDXProviderProps> {}
}

declare module "*.mdx" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;

  export const meta: Record<string, unknown> | undefined;
}

declare type MDXPageFrontmatter = Record<string, unknown>;

declare interface MDXPageData<T = MDXPageFrontmatter> {
  uri: string;
  frontmatter: T;
}

declare interface MDXPage<T = MDXPageFrontmatter> extends VFile {
  data: MDXPageData<T>;
}
