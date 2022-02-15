import { styled } from "@stitches/react";

import clouds from "../assets/clouds.svg?react";
import Download from "../assets/download.svg?react";
import { Box } from "./Box";

export interface MenuItemProps {
  title: string;
  description: string;
  src: string;
  icon?: string;
  href?: string;
  name?: "clouds" | "download";
}

export const DropdownMenuItem = ({
  title,
  description,
  href,
  name,
}: MenuItemProps) => {
  const iconToRender =
    name === "clouds" ? <StyledClouds /> : <StyledDownload />;

  return (
    <StyledLink href={href}>
      {iconToRender}
      <TitleContainer>{title}</TitleContainer>
      <DescriptionSpan>{description}</DescriptionSpan>
    </StyledLink>
  );
};

const StyledDownload = styled(Download, {
  color: "#512fc9",
  margin: "4px 8px 0px 0px",
  float: "left",
  width: "24px",
  height: "24px",
});

const StyledClouds = styled(clouds, {
  color: "#512fc9",
  margin: "4px 8px 0px 0px",
  float: "left",
  width: "24px",
  height: "24px",
});

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
