import { ComponentProps } from "react";
import styled from "styled-components";
import { css, StyledSystemProps } from "components/system";

const TermsContainer = styled("div")<StyledSystemProps>(
  css({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  })
);

export type TermsContainerProps = ComponentProps<typeof TermsContainer>;

export default TermsContainer;
