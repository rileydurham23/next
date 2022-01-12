import React from "react";
import css from "@styled-system/css";

import styled from "styled-components";

import { PopoverIcon } from "./PopoverIcon";

interface IconButtonProps {
  children: React.ReactNode;
  color: string;
  location?: string;
  name: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  size: string;
}

interface StyledIconButtonProps {
  color?: string;
  location?: string;
  name?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  size?: string;
}

const IconButton = ({
  children,
  color,
  location,
  name,
  onClick,
  size,
}: IconButtonProps) => {
  return (
    <StyledIconButton location={location} onClick={onClick}>
      <StyledIconButtonContent>
        <PopoverIcon
          color={color}
          name={name}
          size={size}
          pinned={false}
          space={""}
        />
        {children}
      </StyledIconButtonContent>
    </StyledIconButton>
  );
};

export default IconButton;

const IconButtonLocation = (location) => {
  const size = "8px";

  switch (location) {
    case "bottomLeft":
      return {
        bottom: size,
        left: size,
        position: "absolute",
      };

    case "bottomRight":
      return {
        bottom: size,
        right: size,
        position: "absolute",
      };

    case "topLeft":
      return {
        top: size,
        left: size,
        position: "absolute",
      };

    case "topRight":
      return {
        top: size,
        right: size,
        position: "absolute",
      };
  }
};

const StyledIconButton = styled("span")<StyledIconButtonProps>(
  css({
    alignItems: "center",
    background: "none",
    border: "none",
    borderRadius: "800px",
    boxSizing: "border-box",
    color: "lightest-gray",
    cursor: "pointer",
    display: "inline-block",
    minHeight: 4,
    justifyContent: "center",
    outline: "none",
    padding: 2,
    position: "relative",
    transition: "all .3s",
    minWidth: 4,

    "&:hover": {
      background: "lightest-gray",
      boxShadow: "none",
    },
  })
);

const StyledIconButtonContent = styled("span")(
  css({
    alignItems: "center",
    display: "flex",
    minHeight: 4,
    justifyContent: "center",
    minWidth: 4,
  })
);
