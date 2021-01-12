import styled from "styled-components";

import { all, StyledSystemProps } from "components/system";

export const Box = styled("div")<StyledSystemProps>(
  {
    boxSizing: "border-box",
    minWidth: 0,
    margin: 0,
    padding: 0,
  },
  all
);

export default Box;
