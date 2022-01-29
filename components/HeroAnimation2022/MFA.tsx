import styled, { keyframes, css as styledCss } from "styled-components";
import css from "@styled-system/css";
import Flex from "components/Flex";
import Box from "components/Box";
import lines from "./assets/mfa-background-lines.svg";
import Image from "components/Image";
import fingerprint from "./assets/fingerprint4.svg";
import { fadeOut } from "components/AnimationUtilities/AnimationUtilities";

const buttonRipple = keyframes`
  0% {
    transform: scale(.5);
    opacity: 0.6
  }
  100% {
    transform: scale(1.1);
    opacity: 0;
}
`;
const bgImg = `url(${lines})`;

export const MFA = () => {
  return (
    <AnimatedContainer
      backgroundPosition="center center"
      backgroundImage={bgImg}
      position="absolute"
    >
      <RippleContainer />
      <FingerprintContainer cursor="pointer">
        <Fingerprint alt="fingerprint" src={fingerprint} />
      </FingerprintContainer>
    </AnimatedContainer>
  );
};

const Fingerprint = styled(Image)`
  width: 19%;
  zindex: 6;
`;

const FingerprintContainer = styled(Flex)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
`;

const RippleContainer = styled(Flex)(
  css({
    position: "absolute",
    justifyContent: "center",
    top: ["calc(50% - 33px)", "calc(50% - 55px)"],
    right: ["calc(50% - 33px)", "calc(50% - 55px)"],
    zIndex: 5,
    opacity: 0,
    width: ["66px", "110px"],
    height: ["66px", "110px"],
    borderRadius: "50%",
    backgroundColor: "dark-purple",
    backgroundPosition: "center center",
  }),
  styledCss`animation: 300ms linear 2000ms 1 normal forwards running ${buttonRipple};`
);

const AnimatedContainer = styled(Box)`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  animation: 500ms linear 2700ms 1 normal forwards running ${fadeOut};
`;
