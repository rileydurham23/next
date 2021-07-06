import { ComponentProps } from "react";
import styled from "styled-components";
import { all, css, StyledSystemProps } from "components/system";

const EmailCTA = styled("div")<StyledSystemProps>(
  css({
    background: "#ffffff",
    borderRadius: "8px",
    boxSizing: "border-box",
    height: [298, 392],
  }),
  all
);

export type EmailCTAProps = ComponentProps<typeof EmailCTA>;

export default EmailCTA;
