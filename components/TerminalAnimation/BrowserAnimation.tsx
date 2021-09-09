import { useEffect, useState } from "react";
import styled, { css as styledCss } from "styled-components";
import css from "@styled-system/css";
import NextImage from "next/image";
import Box from "components/Box";
import Flex from "components/Flex";
import {
  browserRise,
  browserFall,
  fadeOut,
  fadeIn,
  buttonRipple,
} from "./AnimationUtilities";
import closeX from "./assets/close.png";
import add from "./assets/add.png";
import password from "./assets/password.png";
import biometric from "./assets/biometric.png";
import check from "./assets/check.png";

export const Browser = () => {
  //sets the value of the password input field
  const [inputState, setInputState] = useState("");

  //sets the timing for the simulated password entry animation
  const enterPassword = () => {
    setTimeout(() => {
      let password = "";
      const kennyLogin = setInterval(() => {
        if (password.length < 8) {
          password += "•";
          setInputState(password);
        } else {
          clearInterval(kennyLogin);
        }
      }, 60);
    }, 4200);
  };

  useEffect(() => {
    enterPassword();
  }, []);

  return (
    <AnimatedWrapper
      id="container"
      flexDirection="column"
      width="90%"
      backgroundColor="#F8F9F8"
      boxShadow="0 4px 16px rgba(0, 0, 0, .24)"
      borderRadius="8px 8px 0 0"
    >
      <Flex
        flexDirection="row"
        background="#D2DBDF"
        borderRadius="8px 8px 0 0"
        width="100%"
        justifyContent="flex-start"
        height="32px"
        position="relative"
      >
        <Flex
          id="button-container"
          flexDirection="row"
          alignItems="center"
          ml={2}
        >
          <BrowserClose />
          <BrowserMin />
          <BrowserMax />
          <Flex
            id="tab"
            background="#F8F9F8"
            borderRadius="4px 4px 0 0"
            height="80%"
            alignSelf="flex-end"
            fontSize="text-sm"
            fontWeight="bold"
            px={2}
            ml={2}
          >
            Single Sign On
            <CloseTabButton ml={2} alignSelf="center" />
          </Flex>
          <AddTabButton />
        </Flex>
      </Flex>
      <Flex
        id="main-body"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        pt={5}
        pb={3}
        mb={3}
        height="260px"
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
      </Flex>
    </AnimatedWrapper>
  );
};

//Browser window elements
const StyledBrowserButton = styled(Box)({
  borderRadius: "300px",
  height: "12px",
  width: "12px",
  marginRight: 7,
});

export const BrowserClose = () => (
  <StyledBrowserButton background="#F95E57" border="1px solid #E03D37" />
);
export const BrowserMin = () => (
  <StyledBrowserButton background="#FBBE2E" border="1px solid #DF9C12" />
);
export const BrowserMax = () => (
  <StyledBrowserButton background="#30C841" border="1px solid #2AA925" />
);

export const CloseTabButton = styled(Flex)({
  height: "12px",
  width: "16px",
  backgroundImage: `url(${closeX})`,
  backgroundReapeat: "no-repeat",
  backgroundPosition: "top right",
});

export const AddTabButton = styled(Flex)({
  height: "100%",
  width: "24px",
  backgroundColor: "#D2DBDF",
  backgroundImage: `url(${add})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "70% 60%",
});

//input field and verify button for simulated sign-in
export const StyledInput = styled("input")(
  css({
    border: "1px solid #c5c5c5",
    borderRadius: "4px",
    boxSizing: "border-box",
    color: "gray",
    fontSize: "18px !important",
    height: "32px",
    mb: 2,
    mt: 3,
    px: 2,
    width: "100%",
  })
);

export const StyledVerifyButton = styled(Flex)(
  css({
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(90deg, #227DC0, #1F74B3)",
    border: "1px solid #114b74",
    borderRadius: "2px",
    color: "white",
    fontSize: "text-md",
    fontWeight: "bold",
    position: "relative",
    overflow: "hidden",
    height: "32px",
    width: "100%",
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
  styledCss`animation: 300ms linear 5s 1 normal forwards running ${buttonRipple};`
);

//browser window rise, fall, & fade-out effect container
const AnimatedWrapper = styled(Flex)(
  css({
    zIndex: 2,
    position: "absolute",
    top: "384px",
  }),
  styledCss`animation: 700ms ease-out 3s 1 normal forwards running ${browserRise}, 700ms linear 10s 1 normal forwards running ${browserFall}, 1s linear 10s 1 normal forwards running ${fadeOut};`
);

const StyledCenterBox = styled(Flex)(
  css({
    position: "absolute",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: ["180px", "272px"],
    color: "gray",
    backgroundColor: "white",
    fontWeight: "bold",
    fontSize: "text-xl",
    border: "1px solid #D2DBDF",
    borderRadius: "default",
    p: [3, 5],
    boxSizing: "content-box",
  })
);

const AnimatedSSOBanner = styled(StyledCenterBox)(
  css({
    animationDelay: "6s",
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
  styledCss`animation: 400ms linear 6.3s 1 normal forwards running ${fadeIn}, 50ms linear 8s 1 normal forwards running ${fadeOut};`
);

const AnimatedAuthSuccessBanner = styled(StyledCenterBox)(
  css({
    opacity: 0,
    animationDelay: "8.3s",
    animationTimingFunction: "linear",
    animationDuration: "400ms",
    animationFillMode: "forwards",
  }),
  styledCss`animation-name: ${fadeIn};`
);

const StyledImageContainer = styled(Flex)(
  css({
    backgroundColor: "white",
    position: "relative",
    borderRadius: "50%",
    overflow: "hidden",
    mt: 3,
  })
);
