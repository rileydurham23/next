import { styled } from "../../stitches.config";

import { Box } from "../Box";

import * as icons from "../icons";

export interface MenuItemProps {
  description: string;
  href?: string;
  icon?: string;
  name?: string;
  src?: string;
  title: string;
}

export const DropdownMenuItem = ({
  description,
  href,
  name,
  title,
}: MenuItemProps) => {
  const IconToRender = icons[name];

  return (
    <StyledLink href={href}>
      <Top>
        {IconToRender && (
          <IconContainer>
            <IconToRender width="100%" height="100%" display="block" />
          </IconContainer>
        )}

        {/* <IconSvg /> */}
        {/* <Icon name={icon} color="dark-purple" mt={1} mr={2} float="left" /> */}
        {/* <StyledIcon name={name} /> */}
        {/* // {IconToRender} */}
        <TitleContainer>{title}</TitleContainer>
      </Top>
      <DescriptionSpan>{description}</DescriptionSpan>
    </StyledLink>
  );
};

const IconContainer = styled("div", {
  width: "24px",
  height: "24px",
  margin: "4px 8px 0px 0px",
});

const Top = styled("div", {
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  color: "$dark-purple",
});

// const StyledIcon = styled(Icon, {
//   color: "$dark-purple",
//   float: "left",
//   height: "24px",
//   margin: "4px 8px 0px 0px",
//   width: "24px",
// });

const StyledLink = styled("a", {
  // border={["1px solid", "none"]}
  display: "block",
  border: "none",
  borderRadius: "2px",
  boxSizing: "border-box",
  lineHeight: "$md",
  // overflow: "hidden",
  paddingBottom: "$3",
  paddingLeft: "$3",
  paddingRight: "$3",
  paddingTop: "$2",
  textAlign: "left",
  textDecoration: "none",
  transition: "background 300ms",

  "&:focus": {
    backgroundColor: "$lightest-gray",
  },

  "&:hover": {
    backgroundColor: "$lightest-gray",
  },
});

// const StyledDownload = styled(Download, {
//   color: "$dark-purple",
//   float: "left",
//   height: "24px",
//   margin: "4px 8px 0px 0px",
//   width: "24px",
// });

// const StyledClouds = styled(clouds, {
//   color: "$dark-purple",
//   float: "left",
//   height: "24px",
//   margin: "4px 8px 0px 0px",
//   width: "24px",
// });

const DescriptionSpan = styled("span", {
  color: "$darkest",
  display: "block",
  fontSize: "$text-md",
  lineHeight: "$lg",
});

const TitleContainer = styled(Box, {
  color: "$dark-purple",
  display: "block",
  fontSize: "$text-lg",
  fontWeight: "$bold",
  lineHeight: "$lg",
});
