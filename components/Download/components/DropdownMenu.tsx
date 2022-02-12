import { styled } from "@stitches/react";

import { Box } from "./Box";

export interface DropdownMenuProps {
  title: string;
  children: React.ReactNode;
}

export const DropdownMenu = ({ title, children }: DropdownMenuProps) => {
  return (
    <OutsideContainer>
      <TitleContainer>{title}</TitleContainer>
      <ChildrenContainer>{children}</ChildrenContainer>
    </OutsideContainer>
  );
};

const ChildrenContainer = styled(Box, {
  paddingLeft: "24px",
  paddingRight: "24px",
  paddingTop: "8px",
  paddingBottom: "8px",
});

const OutsideContainer = styled(Box, {
  background: "white",
  borderRadius: "default",
  // boxShadow: {["none", "0 4px 40px rgba(0, 0, 0, 0.24)"]},
  boxShadow: "0 4px 40px rgba(0, 0, 0, 0.24)",
  color: "black",
  overflow: "hidden",
  // width: {["100%", "auto"]},
  width: "auto",
});

const TitleContainer = styled("h3", {
  display: "block",
  padding: 0,
  alignItems: "center",
  margin: "0px 32px",
  borderBottom: "1px solid rgb(240, 242, 244)",
  fontSize: "18px",
  lineHeight: "64px",
});
