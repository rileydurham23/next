import { ComponentProps } from "react";
import styled from "styled-components";
import { all, StyledSystemProps } from "components/system";

const Caption = styled("div")<StyledSystemProps>(
  {
    color: "#000000",
    boxSizing: "border-box",
  },
  all
);

export type CaptionProps = ComponentProps<typeof Caption>;

export default Caption;
