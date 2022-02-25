import { styled } from "@stitches/react";

import { Box } from "../Box";
// import Icon from "../Icon";

import Clouds from "../../assets/clouds.svg?react";

import Application from "../../assets/application.svg?react";
import Building from "../../assets/building.svg?react";
import Calendar from "../../assets/calendar.svg?react";
import Code from "../../assets/code.svg?react";
import Database from "../../assets/database.svg?react";
import Desktop from "../../assets/desktop.svg?react";
import Earth from "../../assets/earth.svg?react";
import Features from "../../assets/features.svg?react";
import Flag from "../../assets/flag.svg?react";
import Gamepad from "../../assets/gamepad.svg?react";
import Kubernetes from "../../assets/kubernetes.svg?react";
import Note from "../../assets/note.svg?react";
import Presentation from "../../assets/presentation.svg?react";
import Question from "../../assets/question.svg?react";
import Server from "../../assets/server.svg?react";
import Stack from "../../assets/stack.svg?react";
import Window from "../../assets/window.svg?react";

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
  // const iconToRender =
  //   name === "clouds" ? <StyledClouds /> : <StyledDownload />;

  // const IconSVG = name;
  console.log(name);

  return (
    <StyledLink href={href}>
      <Top>
        {/* <IconSvg /> */}
        {/* <Icon name={icon} color="dark-purple" mt={1} mr={2} float="left" /> */}
        {/* <StyledIcon name={name} /> */}
        {/* // {iconToRender} */}
        <TitleContainer>{title}</TitleContainer>
      </Top>
      <DescriptionSpan>{description}</DescriptionSpan>
    </StyledLink>
  );
};

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
