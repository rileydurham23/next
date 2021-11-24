import { ReactElement } from "react";
import css from "@styled-system/css";
import styled from "styled-components";
import Box, { BoxProps } from "components/Box";
import { all, StyledSystemProps } from "components/system";
import { Row } from "./Row";

type RowElement = ReactElement<typeof Row>;

export interface TableProps {
  children: RowElement | Array<RowElement | Array<RowElement>>;
}

export function Table({ children, ...props }: TableProps & BoxProps) {
  return (
    <StyledTable as="table" {...props}>
      <tbody>{children}</tbody>
    </StyledTable>
  );
}

const StyledTable = styled(Box)<StyledSystemProps>(
  css({
    border: "1px solid",
    borderColor: "light-gray",
    borderCollapse: "collapse",
  }),
  all
);
