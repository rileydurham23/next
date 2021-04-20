import css from "@styled-system/css";
import { MDXProvider } from "@mdx-js/react";
import Admonition from "components/Admonition";
import Box from "components/Box";
import { Tabs, TabItem } from "components/Tabs";
import { Tile, TileSet } from "components/Tile";
import Code from "./Code";
import { Header } from "./Headers";
import Image from "./Image";
import IFrame from "./IFrame";
import Link from "./Link";
import Pre from "./Pre";

export const components = {
  a: Link,
  code: Code,
  inlineCode: Code,
  img: Image,
  iframe: IFrame,
  h1: function H1(props) {
    return <Header as="h1" {...props} />;
  },
  h2: function H2(props) {
    return <Header as="h2" {...props} />;
  },
  h3: function H3(props) {
    return <Header as="h3" {...props} />;
  },
  h4: function H4(props) {
    return <Header as="h4" {...props} />;
  },
  h5: function H5(props) {
    return <Header as="h5" {...props} />;
  },
  pre: Pre,
  Admonition,
  Tabs,
  TabItem,
  Tile,
  TileSet,
};

export interface MDXProps {
  children: React.ReactNode;
}

const MDX = ({ children }: MDXProps) => {
  return (
    <Box
      css={css({
        lineHeight: ["26px"],
        color: "text",
        "& *:first-child": {
          mt: 0,
        },
        "& *:last-child": {
          mb: 0,
        },
        "& p": {
          mt: 0,
          mb: 3,
          fontSize: ["text-lg", "text-lg"],
          lineHeight: ["26px"],
        },
        "& video": {
          mb: 3,
          maxWidth: "100%",
        },
        "& ul, & ol": {
          mt: 0,
          mb: 3,
          pl: "24px",
        },
        "& li": {
          fontSize: ["text-lg", "text-lg"],
          lineHeight: "26px",
          mb: 2,
        },
        "& h1": {
          fontSize: ["header-1", "40px"],
          lineHeight: ["48px", "52px"],
          fontWeight: "black",
          mt: 4,
          mb: 3,
        },
        "& h2": {
          fontSize: ["header-2", "header-1"],
          lineHeight: ["32px", "48px"],
          fontWeight: "bold",
          mt: 3,
          mb: 2,
        },
        "& h3": {
          fontSize: ["header-4", "header-3"],
          lineHeight: ["md", "32px"],
          fontWeight: "bold",
          mt: 3,
          mb: 2,
        },
        "& h4": {
          fontSize: ["text-xl", "text-xl"],
          lineHeight: "32px",
          fontWeight: "bold",
          mt: 3,
          mb: 2,
        },
        "& h5": {
          fontSize: "text-md",
          lineHeight: "lg",
          mt: 3,
          mb: 2,
          textTransform: "uppercase",
        },
        "& table": {
          mb: 4,
          bg: "white",
          boxShadow: "0 1px 4px rgba(0,0,0,.24)",
          borderRadius: "default",
          borderCollapse: "collapse",
          boxSizing: "border-box",
          width: "100%",
        },
        "& thead": {
          borderBottom: "1px solid #D2DBDF",
        },
        "& th": {
          fontSize: ["text-md", "text-lg"],
          lineHeight: "26px",
          fontWeight: "bold",
          textAlign: "left",
          px: 3,
          py: 2,
        },
        "& td": {
          color: "text",
          fontSize: ["text-md", "text-lg"],
          lineHeight: "md",
          p: 3,
        },
        "& tbody tr:nth-child(even)": {
          bg: "lightest-gray",
        },
        "tr:last-child": {
          borderBottomLeftRadius: "default",
          borderBottomRightRadius: "default",
        },
      })}
    >
      <MDXProvider components={components}>{children}</MDXProvider>
    </Box>
  );
};

export default MDX;
