import { ComponentProps } from "react";
import styled from "styled-components";
import { all, css, StyledSystemProps } from "components/system";
import Flex from "../Flex/";

const ImageContainer = styled(Flex)<StyledSystemProps>(
  css({
    justifyContent: "center",
    alignItems: "top",
    width: "504px",
    margin: "65px 0 0 0",
  }),
  all
);

export type ImageContainerProps = ComponentProps<typeof ImageContainer>;

export default ImageContainer;
