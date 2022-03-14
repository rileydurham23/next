import squaresBG from "./assets/squares.svg";
import waveGrayBG from "./assets/waveGray.png";
import wavePurpleBG from "./assets/wavePurple.png";
import doubleWave from "./assets/wave-double.png";
import wavelight from "./assets/wave-light.png";
import stars from "./assets/stars.png";
import lines from "./assets/lines.png";
import edge from "./assets/edge-color.svg";
import styled from "styled-components";

export type BGColor =
  | "code"
  | "squares"
  | "wavelight"
  | "grayGradient"
  | "grayWave"
  | "purple"
  | "purpleGradient"
  | "purpleStars"
  | "flatGray"
  | "flatWhite"
  | "double"
  | "lines"
  | "midnight";

const getBG = (color: BGColor) => {
  switch (color) {
    case "code":
      return {
        // background: `linear-gradient(125deg ,#222E41,#192638)`,
        // backgroundColor: "#222E41",
        // backgroundImage: `url(${edge})`,
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: "bottom left",
        // backgroundSize: "cover",
      };
    case "double":
      return {
        backgroundImage: `url(${doubleWave})`,
        backgroundPosition: "50%",
        backgroundRepeat: "no-repeat",
      };
    case "flatGray":
      return {
        backgroundColor: "page-bg",
      };
    case "flatWhite":
      return {
        backgroundColor: "white",
      };
    case "grayGradient":
      return {
        backgroundImage: `linear-gradient(125deg ,rgba(240,242,244,.56),#fff)`,
      };
    case "grayWave":
      return {
        backgroundColor: "#f7f8f9",
        backgroundImage: `url(${waveGrayBG})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      };
    case "midnight":
      return { backgroundColor: "#01172C" };
    case "purple":
      return {
        backgroundImage: `url(${wavePurpleBG}), linear-gradient(125deg,#512fc9,#651fff)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      };
    case "purpleGradient":
      return {
        backgroundImage: `linear-gradient(225deg, #391c70 0%, #0c143d 100%)`,
      };
    case "purpleStars":
      return {
        backgroundImage: `url(${stars}), linear-gradient(180deg, #4827A2 0%, #2E1A64 100%)`,
        backgroundSize: "contain",
      };
    case "squares":
      return {
        backgroundColor: "white",
        backgroundImage: `url(${squaresBG})`,
      };
    case "wavelight":
      return {
        backgroundImage: `url(${wavelight})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      };
    case "lines":
      return {
        backgroundColor: "#FBFBFC",
        backgroundImage: `url(${lines})`,
      };
    default:
      return {
        backgroundColor: "white",
      };
  }
};

export interface SectionProps {
  bg?: BGColor;
  children: React.ReactNode;
}

const SectionSimple = ({ bg, children, ...props }) => {
  return (
    <StyledWrapper {...props} {...getBG(bg)}>
      <StyledSection {...props}>
        <StyledInner>{children}</StyledInner>
      </StyledSection>
    </StyledWrapper>
  );
};

const changeBackground = (props) => {
  switch (props.background) {
    case "code":
      return {
        // background: `linear-gradient(125deg ,#222E41,#192638)`,
        // backgroundColor: "#222E41",
        // backgroundImage: `url(${edge})`,
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: "bottom right",
        // backgroundSize: "cover",
      };
    case "double":
      return {
        backgroundImage: `url(${doubleWave})`,
        backgroundPosition: "50%",
        backgroundRepeat: "no-repeat",
      };
    case "flatGray":
      return {
        backgroundColor: "page-bg",
      };

    default:
      return {
        background: "#FFF",
      };
  }
};

const changeInnerBackground = (props) => {
  switch (props.background) {
    case "code":
      return {
        // backgroundImage: `url(${stars})`,
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: "bottom left",
        // backgroundSize: "cover",
      };
    case "double":
      return {
        backgroundImage: `url(${doubleWave})`,
        backgroundPosition: "50%",
        backgroundRepeat: "no-repeat",
      };
    case "flatGray":
      return {
        backgroundColor: "page-bg",
      };

    default:
      return {
        background: "#FFF",
      };
  }
};

const StyledWrapper = styled.section`
  // background images styles
  ${changeBackground};
`;

const StyledSection = styled.div`
  padding: 80px;
  text-align: center;
  ${changeInnerBackground}
`;

const StyledInner = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  text-align: left;
`;

export { SectionSimple };
