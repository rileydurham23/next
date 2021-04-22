import css from "@styled-system/css";
import styled from "styled-components";
import { all, StyledSystemProps } from "components/system";

export const HorizontalHeader = styled("th")<StyledSystemProps>(
  css({
    boxSizing: "content-box",
    width: [180, 200],
    py: 3,
    px: [2, 3],
    textAlign: "start",
    bg: "lightest-gray",
    borderRight: "1px solid",
    borderColor: "light-gray",
  }),
  all
);
