import { useEffect, useState } from "react";
import styled, { css as styledCss } from "styled-components";
import css from "@styled-system/css";
import NextImage from "next/image";
import Box from "components/Box";
import Flex from "components/Flex";
import {
  fadeOut,
  fadeIn,
  buttonRipple,
  StyledInput,
  StyledVerifyButton,
  StyledCenterBox,
  StyledImageContainer,
  BrowserTop,
} from "./AnimationUtilities";
import { check, biometric, password } from "./assets";
import { ApplicationLogosScreen } from "./ApplicationLogosScreen";
import { JenkinsScreen } from "./JenkinsScreen";
import { DesktopAccessScreen } from "./DesktopAccessScreen";
import { WindowsScreen } from "./WindowsScreen";

export interface AnimationProps {
  animationType: string;
}

export const ApplicationBrowser = ({ animationType }: AnimationProps) => {
  //sets the value of the password input field
  const [inputState, setInputState] = useState("");
  const penultimateBanner = {
    application: <ApplicationLogosScreen />,
    desktop: <DesktopAccessScreen />,
  };
  const finalBanner = {
    application: <JenkinsScreen />,
    desktop: <WindowsScreen />,
  };

  //sets the timing for the simulated password entry animation
  useEffect(() => {
    let kennyLogin;
    const timeout = setTimeout(() => {
      let password = "";
      kennyLogin = setInterval(() => {
        if (password.length < 8) {
          password += "•";
          setInputState(password);
        } else {
          clearInterval(kennyLogin);
        }
      }, 60);
    }, 1500);
    return () => {
      clearInterval(kennyLogin);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <ApplicationAnimationWrapper
      id="container"
      flexDirection="column"
      width="90%"
      backgroundColor="#F8F9F8"
      boxShadow="0 4px 16px rgba(0, 0, 0, .24)"
      borderRadius="8px 8px 0 0"
    >
      <BrowserTop />
      {/* Main container of browser "screen" */}
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        pb={3}
        height="276px"
        boxSizing="border-box"
        position="relative"
      >
        {/* AnimatedSSOBanner, AnimatedMultiFactorAuthBanner, and Animated-
        AuthSuccessBanner are positioned absolutely and animated to display sequentially */}

        <AnimatedSSOBanner>
          Single Sign On
          <StyledImageContainer
            height="32px"
            width="32px"
            border="1px solid #979797"
          >
            <NextImage
              src={password}
              alt="an enter password screen"
              layout="fill"
              objectFit="contain"
            />
          </StyledImageContainer>
          <StyledInput type="text" value={inputState} readOnly={true} />
          <Flex
            width="100%"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <StyledVerifyButton>Verify</StyledVerifyButton>
            <AnimatedRippleContainer />
          </Flex>
        </AnimatedSSOBanner>
        <AnimatedMultiFactorAuthBanner>
          Multi Factor Authentication
          <StyledImageContainer
            height="48px"
            width="48px"
            border="1px solid #979797"
          >
            <NextImage
              src={biometric}
              alt="a biometric verification screen"
              layout="fill"
              objectFit="contain"
            />
          </StyledImageContainer>
          <Box
            color="dark-gray"
            mt={2}
            fontSize="text-xl"
            textAlign="center"
            fontWeight="normal"
          >
            Security Key or Biometric Authenticator
          </Box>
        </AnimatedMultiFactorAuthBanner>
        <AnimatedAuthSuccessBanner>
          Multi Factor Authentication
          <StyledImageContainer height="48px" width="48px" border="none">
            <NextImage
              src={check}
              alt="a multi-factor authentication screen"
              layout="fill"
              objectFit="contain"
            />
          </StyledImageContainer>
          <Box
            color="#05C0AA"
            mt={2}
            fontSize="text-xl"
            textAlign="center"
            fontWeight="normal"
          >
            Authentication Successful
          </Box>
        </AnimatedAuthSuccessBanner>
        <AnimatedPenultimateBanner>
          {penultimateBanner[animationType]}
        </AnimatedPenultimateBanner>
        <AnimatedFinalBanner>{finalBanner[animationType]}</AnimatedFinalBanner>
      </Flex>
    </ApplicationAnimationWrapper>
  );
};

//positional wrapper for ApplicationAnimation
const ApplicationAnimationWrapper = styled(Flex)(
  css({
    zIndex: 2,
    position: "absolute",
    top: "84px",
  })
);

//button-push ripple effect container
const AnimatedRippleContainer = styled(Box)(
  css({
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50px",
    width: "50px",
    maxWidth: 300,
    borderRadius: "50%",
    background: "white",
    overflow: "hidden",
    opacity: 0,
    zIndex: 2,
  }),
  styledCss`animation: 300ms linear 2.5s 1 normal forwards running ${buttonRipple};`
);

const AnimatedSSOBanner = styled(StyledCenterBox)(
  css({
    animationDelay: "3.7s",
    animationTimingFunction: "linear",
    animationDuration: "50ms",
    animationFillMode: "forwards",
  }),
  styledCss`animation-name: ${fadeOut};`
);

const AnimatedMultiFactorAuthBanner = styled(StyledCenterBox)(
  css({
    opacity: 0,
  }),
  styledCss`animation: 400ms linear 4s 1 normal forwards running ${fadeIn}, 50ms linear 6.5s 1 normal forwards running ${fadeOut};`
);

const AnimatedAuthSuccessBanner = styled(StyledCenterBox)(
  css({
    opacity: 0,
  }),
  styledCss`animation: 400ms linear 6.8s 1 normal forwards running ${fadeIn}, 50ms linear 8.8s 1 normal forwards running ${fadeOut};`
);

const StyledFullWidthBanner = styled(Flex)(
  css({
    position: "absolute",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    boxSizing: "content-box",
  })
);

const AnimatedPenultimateBanner = styled(StyledFullWidthBanner)(
  css({
    opacity: 0,
  }),
  styledCss`animation: 400ms linear 9.1s 1 normal forwards running ${fadeIn}, 50ms linear 11.1s 1 normal forwards running ${fadeOut};`
);

const AnimatedFinalBanner = styled(StyledFullWidthBanner)(
  css({
    opacity: 0,
  }),
  styledCss`animation: 400ms linear 11.4s 1 normal forwards running ${fadeIn};`
);
