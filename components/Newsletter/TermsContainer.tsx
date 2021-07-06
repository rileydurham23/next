import { ComponentProps } from "react";
import styled from "styled-components";
import { all, css, StyledSystemProps } from "components/system";

const TermsContainer = styled("div")<StyledSystemProps>(
  css({
    flexDirection: "row",
    justifyContent: "center",
  }),
  all
);

export type TermsContainerProps = ComponentProps<typeof TermsContainer>;

export default TermsContainer;
