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
  }),
  all
);

export type CardProps = ComponentProps<typeof Card>;

export default Card;
