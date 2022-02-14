import { styled } from "@stitches/react";

// import Icon, { IconName } from "components/Icon";

import { Icon } from "./Icon";

import { Box } from "./Box";

export interface MenuItemProps {
  title: string;
  description: string;
  src: string;
  icon?: string;
  href?: string;
}

export const DropdownMenuItem = ({
  icon,
  title,
  description,
  src,
  href,
}: MenuItemProps) => {
  return (
    <StyledLink href={href}>
      {/* <Icon src={icon} color="dark-purple" mt={1} mr={2} float="left" /> */}
      <TitleContainer>{title}</TitleContainer>
      <DescriptionSpan>{description}</DescriptionSpan>
    </StyledLink>
  );
};

const StyledLink = styled("a", {
  display: "block",
  // border={["1px solid", "none"]}
  border: "none",
  boxSizing: "border-box",
  overflow: "hidden",
  paddingLeft: "16px",
  paddingRight: "16px",
  paddingTop: "8px",
  paddingBottom: "16px",
  borderRadius: "2px",
  transition: "background 300ms",
  lineHeight: "24px",
  textAlign: "left",
  textDecoration: "none",

  "&:focus": {
    backgroundColor: "#F0F2F4",
  },

  "&:hover": {
    backgroundColor: "#F0F2F4",
  },
});

const DescriptionSpan = styled("span", {
  display: "block",
  fontSize: "14px",
  lineHeight: "24px",
  color: "#37474F",
});

const TitleContainer = styled(Box, {
  display: "block",
  fontSize: "16px",
  lineHeight: "32px",
  fontWeight: "bold",
  color: "#512FC9",
});
