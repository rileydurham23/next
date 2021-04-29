import { ReactNode } from "react";
import styled from "styled-components";
import css from "@styled-system/css";
import Icon, { IconName, IconProps } from "components/Icon";
import { all, StyledSystemProps, transition } from "components/system";
import Box, { BoxProps } from "components/Box";

export interface HintIconProps {
  icon: IconName;
  children: ReactNode;
  size?: IconProps["size"];
}

export function HintIcon({
  children,
  size = "sm",
  icon,
  ...props
}: HintIconProps & BoxProps) {
  return (
    <StyledWrapper {...props}>
      <StyledButton color={props.color}>
        <Icon name={icon} size={size} />
      </StyledButton>
      <StyledPopup>{children}</StyledPopup>
    </StyledWrapper>
  );
}

const StyledPopup = styled(Box)<StyledSystemProps>(
  css({
    top: ["initial", 0],
    bottom: [0, "initial"],
    opacity: 0,
    position: ["fixed", "absolute"],
    left: ["2vw", "50%"],
    bg: "darkest",
    borderRadius: "default",
    p: [3, 2],
    width: ["96vw", 400],
    zIndex: 5,
    color: "white",
    fontSize: ["text-xl", "text-md"],
    lineHeight: ["xl", "md"],
    fontWeight: "regular",
    transform: ["translateY(-5vw)", "translateY(-105%) translateX(-50%)"],
    visibility: "hidden",
    transition: transition([
      ["opacity", "interaction"],
      ["transform", "interaction"],
    ]),
  })
);

const StyledButton = styled("button")<StyledSystemProps>(
  css({
    border: "none",
    cursor: "pointer",
    p: 1,
    m: 0,
    bg: "transparent",
    transition: transition([["color", "interaction"]]),
    "&:hover, &:focus": {
      color: "dark-purple",
      outline: "none",
      [`& + ${StyledPopup}`]: {
        opacity: 1,
        visibility: "visible",
        transitionDelay: transition([["visibility", "interaction"]]),
        transform: ["translateY(-10vw)", "translateY(-115%) translateX(-50%)"],
      },
    },
  }),
  all
);

const StyledWrapper = styled(Box)<StyledSystemProps>(
  css({
    position: ["static", "relative"],
  }),
  all
);
