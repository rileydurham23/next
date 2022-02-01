import styled, { keyframes, css as styledCss } from "styled-components";
import css from "@styled-system/css";
import Flex from "components/Flex";
import Box from "components/Box";
import lines from "./assets/mfa-background-lines.svg";
import Image from "components/Image";
import fingerprint from "./assets/fingerprint4.svg";
import { fadeOut } from "components/AnimationUtilities/AnimationUtilities";

const bgImg = `url(${lines})`;

export const MFA = () => {
  return (
    <AnimatedContainer
      backgroundPosition="center center"
      backgroundImage={bgImg}
      position="absolute"
    >
      <RippleContainer />
      <ShadowContainer />

      <FingerprintContainer cursor="pointer">
        <Fingerprint alt="fingerprint" src={fingerprint} />
        <SpinCircle />

        <Message>Biometric Authentication</Message>
      </FingerprintContainer>
    </AnimatedContainer>
  );
};

const buttonPress = keyframes`
  0% {
    box-shadow: inset 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    box-shadow: inset 0 2px 8px rgba(0, 0, 0, .24);
}
`;
const buttonRipple = keyframes`
  0% {
    transform: scale(.5);
    opacity: 0.4
  }
  100% {
    transform: scale(1.1);
    opacity: 0;
}
`;
const spin = keyframes` {
  from {
      transform:rotate(0deg);
  }
  to {
      transform:rotate(360deg);
  }
}`;

const Fingerprint = styled(Image)`
  width: 80px;
  zindex: 6;
`;

const SpinCircle = styled(Flex)(
  css({
    border: "1px solid green",
    borderColor: "dark-purple",
    opacity: ".24",
    position: "absolute",
    justifyContent: "center",
    top: ["calc(50% - 33px)", "calc(50% - 55px)"],
    right: ["calc(50% - 33px)", "calc(50% - 55px)"],
    zIndex: 10,
    width: ["66px", "110px"],
    height: ["66px", "110px"],
    borderRadius: "45%",
    backgroundPosition: "center center",
  }),
  styledCss`animation: 5000ms linear infinite ${spin};`
);

const FingerprintContainer = styled(Flex)`
  background: rgba(255, 255, 255, 0.24);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
`;

const ShadowContainer = styled(Flex)(
  css({
    position: "absolute",
    justifyContent: "center",
    top: ["calc(50% - 33px)", "calc(50% - 55px)"],
    right: ["calc(50% - 33px)", "calc(50% - 55px)"],
    zIndex: 10,
    width: ["66px", "110px"],
    height: ["66px", "110px"],
    borderRadius: "50%",
    backgroundPosition: "center center",
  }),
  styledCss`animation: 500ms linear 2000ms 1 normal forwards running ${buttonPress};`
);

const RippleContainer = styled(Flex)(
  css({
    position: "absolute",
    justifyContent: "center",
    top: ["calc(50% - 33px)", "calc(50% - 55px)"],
    right: ["calc(50% - 33px)", "calc(50% - 55px)"],
    zIndex: 11,
    opacity: 0,
    width: ["66px", "110px"],
    height: ["66px", "110px"],
    borderRadius: "50%",
    backgroundColor: "dark-purple",
    backgroundPosition: "center center",
  }),
  styledCss`animation: 500ms linear 2700ms 1 normal forwards running ${buttonRipple};`
);

const AnimatedContainer = styled(Box)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  animation: 500ms linear 2700ms 1 normal forwards running ${fadeOut};
`;

const Message = styled("div")`
  background: #fff;
  color: #607d8b;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
  line-height: 24px;
  font-size: 10px;
  text-transform: uppercase;
  border: 1px solid #651fff;
  opacity: 0.87;
  border-radius: 4px;
  padding: 0 24px;
  position: absolute;
  bottom: 80px;
`;
