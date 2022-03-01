import { styled } from "../../stitches.config";

import { Box } from "../Box";

export interface DropdownMenuProps {
  title: string;
  children: React.ReactNode;
}

export const DropdownMenu = ({ title, children }: DropdownMenuProps) => {
  return (
    <OutsideContainer>
      <StyledTitle>{title}</StyledTitle>
      <ChildrenContainer>{children}</ChildrenContainer>
    </OutsideContainer>
  );
};

const ChildrenContainer = styled(Box, {
  paddingLeft: "$4",
  paddingRight: "$4",
  paddingTop: "$2",
  paddingBottom: "$2",
});

const OutsideContainer = styled(Box, {
  backgroundColor: "white",
  borderRadius: "4px",
  boxShadow: "0 4px 40px rgba(0, 0, 0, 0.24)",
  color: "black",
  overflow: "hidden",
  width: "auto",

  "@bp1": {
    width: "100%",
  },
});

const StyledTitle = styled("h3", {
  display: "block",
  padding: 0,
  alignItems: "center",
  margin: "0px 32px",
  borderBottom: "1px solid rgb(240, 242, 244)",
  fontSize: "18px",
  lineHeight: "64px",
});
