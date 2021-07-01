import { ComponentProps } from "react";
import styled from "styled-components";
import { all, css, StyledSystemProps } from "components/system";
import Box from "../Box";

const Background = styled(Box)<StyledSystemProps>(
  css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundPositionY: "center",
  }),
  all
);

export type BackgroundProps = ComponentProps<typeof Background>;

export default Background;
