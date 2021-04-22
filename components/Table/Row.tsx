import css from "@styled-system/css";
import styled from "styled-components";
import { all, StyledSystemProps } from "components/system";

export const Row = styled("tr")<StyledSystemProps>(
  css({
    boxSizing: "border-box",
    borderTop: "1px solid",
    borderColor: "light-gray",
    "&:first-child": { borderTop: "none" },
  }),
  all
);
