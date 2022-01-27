import Box, { BoxProps } from "components/Box";
import squaresBG from "./assets/squares.svg";
import waveGrayBG from "./assets/waveGray.png";
import wavePurpleBG from "./assets/wavePurple.png";
import doubleWave from "./assets/wave-double.png";
import wavelight from "./assets/wave-light.png";
import stars from "./assets/stars.png";
import lines from "./assets/lines.png";
import edge from "./assets/edge-color.svg";

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
        background: `linear-gradient(125deg ,#222E41,#192638)`,
        backgroundColor: "#222E41",
        backgroundImage: `url(${edge})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom left",
        backgroundSize: "cover",
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

export const Section = ({
  bg,
  children,
  ...props
}: SectionProps & BoxProps) => {
  return (
    <Box as="section" {...getBG(bg)} {...props}>
      {children}
    </Box>
  );
};
