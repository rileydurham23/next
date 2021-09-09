import styled, { keyframes, css as styledCss } from "styled-components";
import css from "@styled-system/css";
import Box from "components/Box";
import Button from "components/Button";
import Terminal from "components/Terminal";

// KEYFRAMES
export const blinky = keyframes`
  0% {
    opacity: 1;
  }
  49% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const browserRise = keyframes`
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-380px);
  }
`;

export const browserFall = keyframes`
  0% {
    transform: translateY(-380px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export const terminalRise = keyframes`
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-73%);
  }
`;
//DO NOT REMOVE
//at container height of 406:
//210 for homepage
//290 for database
//235 for kubernetes
//265 for server
//tbd for application

export const buttonRipple = keyframes`
  0% {
    transform: scale(.5);
    opacity: 0.4
  }
  100% {
    transform: scale(6);
    opacity: 0;
}
`;

//Styled & Animated Components

export const StyledCertBox = styled(Box)(
  css({
    ml: 5,
    color: "#FEAA00",
    fontWeight: "bold",
  })
);

export const StyledSpan = styled("span")({
  color: "#FEAA00",
  fontWeight: "bold",
});

export const AnimatedFadeIn = styled(Box)(
  css({
    animationDuration: "2s",
  }),
  styledCss`animation-name: ${fadeIn};`
);

export const HiddenDiv = styled(Box)(
  css({
    visibility: "hidden",
  })
);

export const AnimatedCursor = styled(Box)(
  css({
    alignSelf: "center",
    height: "16px",
    width: "8px",
    backgroundColor: "#28fe14",
    animationDuration: "1s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
  }),
  styledCss`animation-name: ${blinky};`
);

export const StyledPrompt = () => (
  <Box ml={3} mr={2} color="#28fe14">
    $
  </Box>
);

export const AnimatedResetButton = styled(Button)(
  css({
    opacity: 0,
    zIndex: 1,
    height: "32px",
    width: "160px",
    color: "gray",
    borderColor: "light-gray",
    fontWeight: "regular",
    fontSize: "14px",
  }),
  styledCss`animation: 1s linear 12s 1 normal forwards running ${fadeIn};'`
);

export const AnimatedTerminal = styled(Terminal)(
  css({
    position: "absolute",
    top: "314px",
    zIndex: 5,
  }),
  styledCss`animation: 500ms linear 11s normal forwards running ${terminalRise};`
);
