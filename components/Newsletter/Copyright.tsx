import { ComponentProps } from "react";
import styled from "styled-components";
import { all, css, StyledSystemProps } from "components/system";

const Copyright = styled("div")<StyledSystemProps>(
  css({
    width: "459px",
    height: "14px",
    color: "rgba(255, 255, 255, 0.8)",
    fontFamily: "Lato",
    fontSize: "12px",
    fontWeight: "400",
    textAlign: "center",
    textTransform: "uppercase",
  }),
  all
);

export type CopyrightProps = ComponentProps<typeof Copyright>;

export default Copyright;
