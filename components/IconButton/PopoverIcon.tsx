import React from "react";

import css from "@styled-system/css";
import styled from "styled-components";

interface PopoverIconProps {
  color: string;
  name: string;
  pinned: boolean;
  size: string;
  space: string;
}

interface StyledIconProps {
  pinned: boolean;
  size: string;
  space: string;
  color: string;
  className: string;
}

export const PopoverIcon = ({
  color,
  name,
  pinned,
  size,
  space,
}: PopoverIconProps) => {
  return (
    <StyledIcon
      pinned={pinned}
      size={size}
      space={space}
      color={color}
      className={`icon-${name}`}
    />
  );
};

const iconColor = (color) => {
  switch (color) {
    case "blue":
      return {
        color: "#354AA4",
      };
    case "blueDark":
      return {
        color: "#0C143D",
      };
    case "blueLight":
      return {
        color: "light-blue",
      };
    case "green":
      return {
        color: "green",
      };
    case "grey":
      return {
        color: "gray",
      };
    case "greyLight":
      return {
        color: "light-gray",
      };
    case "purple":
      return {
        color: "purple",
      };
    case "purpleDark":
      return {
        color: "dark-purple",
      };
    case "red":
      return {
        color: "red",
      };
    case "white":
      return {
        color: "white",
      };
    default:
      return {
        color: "blue",
      };
  }
};

const iconPinned = (pinned) => {
  const size = "16px";

  switch (pinned) {
    case "topRight":
      return {
        position: "absolute",
        right: size,
        top: size,
      };

    case "topLeft":
      return {
        position: "absolute",
        left: size,
        top: size,
      };
  }
};

const iconSize = (size) => {
  switch (size) {
    case "large":
      return {
        fontSize: "32px",
        height: "32px",
        width: "32px",
      };
    case "jumbo":
      return {
        fontSize: "64px",
        height: "64px",
        width: "64px",
      };
    case "small":
      return {
        fontSize: "16px",
        height: "16px",
        width: "16px",
      };
    default:
      return {
        fontSize: "24px",
        height: "24px",
        width: "24px",
      };
  }
};

const iconSpace = (space) => {
  const size = "16px";

  switch (space) {
    case "both":
      return {
        marginLeft: size,
        marginRight: size,
      };

    case "left":
      return {
        marginLeft: size,
      };

    case "right":
      return {
        marginRight: size,
      };
  }
};

const StyledIcon = styled("div")<StyledIconProps>(
  css({
    fontSize: "24px",
    display: "inline-block",
    height: "24px",
    textAlign: "center",
    width: "24px",
    zIndex: "1",
  })
);
