// Copied from https://github.com/Howard86/howardism/blob/master/src/types/next-mdx-remote.d.ts
// Mentioned in https://github.com/hashicorp/next-mdx-remote/issues/18

interface Scope {
  [key: string]: unknown;
}

declare module "next-mdx-remote/hydrate" {
  type HydrateOptions = { components: Record<string, React.ReactNode> };

  export interface Source {
    compiledSource: string;
    renderedOutput: string;
    scope?: Scope;
  }

  let hydrate: (source: Source, options?: HydrateOptions) => React.ReactNode;
  export default hydrate;
}

declare module "next-mdx-remote/render-to-string" {
  type RenderToStringOptions = {
    components?: Record<string, React.ReactNode>;
    mdxOptions?: unknown;
    scope?: Scope;
  };

  let renderToString: (
    source: string,
    options?: RenderToStringOptions
  ) => Promise<Source>;
  export default renderToString;
}
