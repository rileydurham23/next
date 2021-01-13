import hydrate from "next-mdx-remote/hydrate";
import Admonition from "./Admonition";
import Code from "./Code";
import { H1, H2, H3, H4, H5 } from "./Headers";
import Image from "./Image";
import Link from "./Link";
import { UL, OL, LI } from "./Lists";
import Paragraph from "./Paragraph";
import Pre from "./Pre";
import { Tabs, TabItem } from "./Tabs";
import Table from "./Table";
import Video from "./Video";

export const mdxHydrateOptions = {
  components: {
    a: Link,
    code: Code,
    img: Image,
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    ul: UL,
    ol: OL,
    li: LI,
    p: Paragraph,
    pre: Pre,
    video: Video,
    Admonition,
    Tabs,
    TabItem,
    table: Table,
  },
};

export interface MDXProps {
  raw: {
    compiledSource: string;
    renderedOutput: string;
    scope?: Scope;
  };
}

const MDX = ({ raw }: MDXProps) => {
  const content = hydrate(raw, mdxHydrateOptions);

  return <>{content}</>;
};

export default MDX;
