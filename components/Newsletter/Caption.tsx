import { ComponentProps } from "react";
import styled from "styled-components";
import { css, StyledSystemProps } from "components/system";

const Caption = styled("div")<StyledSystemProps>(
  css({
    color: "#000000",
    margin: "0 56px",
    boxSizing: "border-box",
    h1: {
      fontSize: "34px",
    },
    h2: {
      fontFamily: "Lato",
      fontSize: "24px",
      fontWeight: "700",
      lineHeight: "22px",
    },
    p: {
      fontFamily: "Lato",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "24px",
    },
  })
);

export type CaptionProps = ComponentProps<typeof Caption>;

export default Caption;
