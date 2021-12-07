import styled from "styled-components";
import css from "@styled-system/css";
import { PressListItem, PressListItemProps } from "./PressListItem";

export interface PressListProps {
  items: PressListItemProps[];
}

export const PressList = ({ items }: PressListProps) => {
  return (
    <StyledList>
      {items.map((item) => (
        <StyledItem key={item.link}>
          <PressListItem {...item} />
        </StyledItem>
      ))}
    </StyledList>
  );
};

const StyledList = styled("ul")(
  css({
    m: 0,
    p: 0,
    display: "grid",
    gridTemplateColumns: ["repeat(1, 1fr)", "repeat(3, 1fr)"],
    gap: ["16px", "24px"],
  })
);

const StyledItem = styled("li")(
  css({
    display: "flex",
    justifyContent: "stretch",
    listStyle: "none",
    m: 0,
    p: 0,
  })
);
