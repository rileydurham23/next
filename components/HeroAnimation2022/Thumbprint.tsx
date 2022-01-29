import styled from "styled-components";

import Flex from "components/Flex";
import Box from "components/Box";
import lines from "./assets/mfa-background-lines.svg";
import Image from "components/Image";
import fingerprint from "./assets/fingerprint4.svg";
import {
  fadeOut,
  buttonRipple,
} from "components/AnimationUtilities/AnimationUtilities";

const bgImg = `url(${lines})`;

export const Thumbprint = () => {
  return (
    <AnimatedContainer
      backgroundPosition="center center"
      backgroundImage={bgImg}
      position="absolute"
    >
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

// const RippleContainer = styled(Flex)`
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   justify-content: center;
//   z-index: 5;
//   opacity: 0;
//   max-width: 19%;
//   animation: 1s linear 1s 1 normal forwards running ${buttonRipple};
// `;

const AnimatedContainer = styled(Box)`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  animation: 500ms linear 2500ms 1 normal forwards running ${fadeOut};
`;

// box-shadow: inset 0 1px 4px rgba(0, 0, 0, .24);
