import NextImage from "next/image";
import Box from "components/Box";
import { Waypoint } from "react-waypoint";
import { useState } from "react";

import styled, { css as styledCss, keyframes } from "styled-components";
import { css } from "components/system";
import { fadeIn } from "../AnimationUtilities/AnimationUtilities";

import whiteButton from "./assets/button-big.svg";
import hand from "./assets/hand.svg";
import shieldScreen from "./assets/shield-screen.svg";
import codeScreen from "./assets/code-screen.svg";
import passwordScreen from "./assets/password-screen.svg";
import statisticsScreen from "./assets/statistics-screen.svg";
import graphScreen from "./assets/graph-screen.svg";
import commentLine from "./assets/commentline-screen.svg";
import screenWhole from "./assets/screen-whole.svg";
import PamNoHand from "./assets/pam-no-hand.svg";

//data for six small screen animations
const screens = [
  {
    animationDelay: 2300,
    top: 34,
    left: 35,
    height: 65,
    width: 100,
    zIndex: "2",
    src: shieldScreen,
    alt: "shield screen",
  },
  {
    animationDelay: 2800,
    top: 95,
    left: 15,
    height: 98,
    width: 100,
    zIndex: "2",
    src: codeScreen,
    alt: "code screen",
  },
  {
    animationDelay: 1200,
    top: 50,
    left: 482,
    height: 128,
    width: 135,
    zIndex: "2",
    src: statisticsScreen,
    alt: "statistics screen",
  },
  {
    animationDelay: 400,
    top: 46,
    left: 539,
    height: 98,
    width: 100,
    zIndex: "3",
    src: passwordScreen,
    alt: "password screen",
  },
  {
    animationDelay: 1700,
    top: 129,
    left: 480,
    height: 115,
    width: 155,
    zIndex: "3",
    src: graphScreen,
    alt: "graph screen",
  },
  {
    animationDelay: 2100,
    top: 121,
    left: 477,
    height: 63,
    width: 27,
    zIndex: "3",
    src: commentLine,
    alt: "comment line screen",
  },
];

interface AnimatedImageContainerProps {
  animationDelay: string;
  top: number;
  left: number;
  height: number;
  width: number;
  src: string;
  alt: string;
  zIndex: string;
}

const AnimatedImageContainer = ({
  animationDelay,
  top,
  left,
  height,
  width,
  src,
  alt,
  zIndex,
}: AnimatedImageContainerProps) => {
  return (
    <AnimatedImageWrapper
      animationDelay={animationDelay}
      top={[`${top * 0.5}px`, `${top * 0.8}px`, `${top}px`]}
      left={[`${left * 0.5}px`, `${left * 0.8}px`, `${left}px`]}
      width={[`${width * 0.5}px`, `${width * 0.8}px`, `${width}px`]}
      height={[`${height * 0.5}px`, `${height * 0.8}px`, `${height}px`]}
    >
      <Box position="relative">
        <NextImage
          src={src}
          alt={alt}
          layout="intrinsic"
          height={height}
          width={width}
          z-index={zIndex}
        />
      </Box>
    </AnimatedImageWrapper>
  );
};

export type AnimationSequenceProps = {
  delay?: number;
};

const AnimationSequence = ({ delay = 0 }: AnimationSequenceProps) => {
  return (
    <>
      {/*White Button */}
      <FadeInWrapper
        animationDelay={`${delay + 500}`}
        top={["45px", "72px", "90px"]}
        left={["119px", "190px", "238px"]}
        height={["38px", "61px", "76px"]}
        width={["150px", "240px", "300px"]}
      >
        <Box position="relative">
          <NextImage
            src={whiteButton}
            alt="white button"
            layout="intrinsic"
            z-index="2"
            height={76}
            width={300}
          />
        </Box>
      </FadeInWrapper>

      {/*hand - final position*/}
      <ArmWrapper
        animationDelay={`${delay - 25}`}
        top={["62px", "99px", "124px"]}
        left={["99px", "159px", "199px"]}
        height={["49px", "78px", "98px"]}
        width={["150px", "240px", "300px"]}
      >
        <NextImage
          src={hand}
          alt="Pam hand pointing"
          layout="intrinsic"
          z-index="3"
          height={98}
          width={300}
        />
      </ArmWrapper>

      {/* six small screens */}
      {screens.map((screen, idx) => (
        <AnimatedImageContainer
          animationDelay={`${screen.animationDelay + delay}`}
          top={screen.top}
          left={screen.left}
          height={screen.height}
          width={screen.width}
          zIndex={screen.zIndex}
          src={screen.src}
          alt={screen.alt}
          key={idx}
        />
      ))}
    </>
  );
};

export type PamAnimationProps = {
  millesecondDelay?: number;
};

const PamAnimation = ({ millesecondDelay = 0 }: PamAnimationProps) => {
  const [startAnimation, setStartAnimation] = useState(false);

  return (
    <StyledImageBox mr={[0, 6, 4]} ml={[0, 0]} boxSizing="border-box">
      {/* Pam no hand  */}
      <Box
        position="absolute"
        top={["35px", "55px", "69px"]}
        left={["55px", "87px", "109px"]}
        height={["126px", "201px", "251px"]}
        width={["150px", "240px", "300px"]}
      >
        <Box position="relative">
          <NextImage
            src={PamNoHand}
            alt="Pam using single access log-in"
            layout="intrinsic"
            z-index="2"
            height={251}
            width={300}
          />
        </Box>
      </Box>
      {startAnimation && <AnimationSequence delay={millesecondDelay} />}
      <Waypoint onEnter={() => setStartAnimation(true)} />
    </StyledImageBox>
  );
};

const imageRise = keyframes`
  0% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const imageScale = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
`;

const armRaise = keyframes`
  0% {
    transform: rotate(65deg)
  }
  100% {
    transform: rotate(0deg)
  }
`;

const ArmWrapper = styled(Box)((props) => [
  css({
    position: "absolute",
    transform: "rotate(65deg)",
    transformOrigin: ["50px 38px", "70px 53px", "100px 75px"],
  }),
  styledCss`animation: 400ms linear ${props["animationDelay"]}ms 1 normal forwards running ${armRaise};`,
]);

const FadeInWrapper = styled(Box)((props) => [
  css({
    opacity: 0,
    position: "absolute",
  }),
  styledCss`animation: 700ms linear ${props["animationDelay"]}ms 1 normal forwards running ${fadeIn};`,
]);

const AnimatedImageWrapper = styled(Box)((props) => [
  css({
    opacity: 0,
    position: "absolute",
    overflow: "hidden unscrollable",
  }),
  styledCss`animation: 800ms linear ${props["animationDelay"]}ms 1 normal forwards ${fadeIn}, 600ms linear ${props["animationDelay"]}ms ${imageRise}, 600ms linear ${props["animationDelay"]}ms ${imageScale};`,
]);

const StyledImageBox = styled(Box)(
  css({
    height: ["166px", "258px", "322px"],
    width: ["332px", "531px", "664px"],
    background: `url(${screenWhole})`,
    backgroundSize: "cover",
    position: "relative",
    zIndex: "1",
  })
);

export default PamAnimation;
