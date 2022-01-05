import { ComponentProps } from "react";
import styled from "styled-components";

import { all, StyledSystemProps } from "components/system";

export const Label = styled("label")<StyledSystemProps>(
  {
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  all
);

export type LabelProps = ComponentProps<typeof Label>;

export default Label;
