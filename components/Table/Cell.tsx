import css from "@styled-system/css";
import styled from "styled-components";
import { all, StyledSystemProps } from "components/system";

export const Cell = styled("td")<StyledSystemProps>(
  css({
    bg: "white",
    px: [2, 3],
    py: [2, 0],
    "& + &": {
      borderLeft: "1px solid",
      borderColor: "light-gray",
    },
  }),
  all
);
