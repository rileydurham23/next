import { ComponentProps } from "react";
import styled from "styled-components";
import { all, StyledSystemProps } from "components/system";

const Text = styled("div")<StyledSystemProps>(
  {
    null: null,
  },
  all
);

export type TextProps = ComponentProps<typeof Text>;

export default Text;
