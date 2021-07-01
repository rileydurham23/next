import { ComponentProps } from "react";
import styled from "styled-components";
import { all, css, StyledSystemProps } from "components/system";
import Flex from "../Flex";

const Card = styled(Flex)<StyledSystemProps>(
  css({
    flexDirection: "row",
    background: "white",
    height: "544px",
    width: "944px",
    borderRadius: "8px",
    margin: "0 0 80px 0",
    boxShadow: "0 0 64px rgba(0, 0, 0, 0.32)",
  }),
  all
);

export type CardProps = ComponentProps<typeof Card>;

export default Card;
