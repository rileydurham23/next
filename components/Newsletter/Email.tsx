import { ComponentProps } from "react";
import styled from "styled-components";
import { css, StyledSystemProps } from "components/system";

const Email = styled("div")<StyledSystemProps>(
  css({
    color: "#324148",
    fontSize: "12px",
    fontWeight: "700",
    lineHeight: "16px",
    margin: "0 18px 8px 18px",
  })
);

export type EmailProps = ComponentProps<typeof Email>;

export default Email;
