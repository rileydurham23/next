import css from "@styled-system/css";
import hydrate from "next-mdx-remote/hydrate";
import Box from "components/Box";
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
    inlineCode: Code,
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

export interface RawMDX {
  compiledSource: string;
  renderedOutput: string;
}
export interface MDXProps {
  raw: RawMDX;
}

const MDX = ({ raw }: MDXProps) => {
  const content = hydrate(raw, mdxHydrateOptions);

  return (
    <Box
      css={css({
        "& *:first-child": {
          marginTop: 0,
        },
      })}
    >
      {content}
    </Box>
  );
};

export default MDX;
