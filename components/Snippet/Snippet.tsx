import styled from "styled-components";
import css from "@styled-system/css";
import Pre from "components/MDX/Pre";

export interface SnippetProps {
  children: React.ReactNode;
}

export default function Snippet({ children }: SnippetProps) {
  return <StyledPre>{children}</StyledPre>;
}

const StyledPre = styled(Pre)(
  css({
    "& pre": {
      display: "flex",
      flexDirection: "column",
      color: "#75715e",
      overflow: "initial",
    },

    "& p": {
      margin: 0,
      fontSize: "text-md",
      lineHeight: "md",
    },
  })
);
