import { ComponentProps } from "react";
import styled from "styled-components";
import { css, StyledSystemProps } from "components/system";

const CardDivRightTop = styled("div")<StyledSystemProps>(
  css({
    background: "#ffffff",
    width: "440px",
    borderRadius: "0 8px 8px 0",
  })
);

export type CardDivRightTopProps = ComponentProps<typeof CardDivRightTop>;

export default CardDivRightTop;
