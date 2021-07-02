import { ComponentProps } from "react";
import styled from "styled-components";
import { all, css, StyledSystemProps } from "components/system";

const NewsHeader = styled("header")<StyledSystemProps>(
  css({
    padding: "48px 0px 16px",
    position: "relative",
    left: "65px",
  }),
  all
);

export type NewsHeaderProps = ComponentProps<typeof NewsHeader>;

export default NewsHeader;
