import { ReactElement } from "react";
import css from "@styled-system/css";
import styled from "styled-components";
import { all, StyledSystemProps } from "components/system";
import { Row } from "./Row";

export const SeparatorCell = styled("td")<StyledSystemProps>(
  css({
    boxSizing: "border-box",
    textTransform: "uppercase",
    fontWeight: "bold",
    bg: "lightest-gray",
    fontSize: "text-sm",
    lineHeight: "lg",
    px: [2, 3],
  }),
  all
);

type CellElement = ReactElement<typeof SeparatorCell>;

interface SeparatorRowProps {
  children: CellElement | Array<CellElement | Array<CellElement>>;
}

export function SeparatorRow({ children }: SeparatorRowProps) {
  return <Row>{children}</Row>;
}
