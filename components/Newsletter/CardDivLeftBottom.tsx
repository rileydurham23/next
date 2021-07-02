import { ComponentProps } from "react";
import styled from "styled-components";
import { all, css, StyledSystemProps } from "components/system";

const CardDivLeftBottom = styled("div")<StyledSystemProps>(
  css({
    backgroundImage:
      "linear-gradient(-68deg, #eff1fe 0%, #ffffff 100%, #ffffff 100%)",
    width: "504px",
    borderRadius: "8px 0 0 8px",
  }),
  all
);

export type CardDivLeftBottomProps = ComponentProps<typeof CardDivLeftBottom>;

export default CardDivLeftBottom;
