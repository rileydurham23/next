import { ComponentProps } from "react";
import styled from "styled-components";
import { all, css, StyledSystemProps } from "components/system";
import Flex from "../Flex";

const Card = styled(Flex)<StyledSystemProps>(
  css({
    background: "white",
    flexDirection: ["column", "row-reverse"],
    borderRadius: "8px",
    marginBottom: ["56px", "32px"],
    boxShadow: "0 0 64px rgba(0, 0, 0, 0.32)",
    height: [624, 544],
    width: [343, 944],
  }),
  all
);

export type CardProps = ComponentProps<typeof Card>;

export default Card;
