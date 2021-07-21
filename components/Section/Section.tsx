import Box from "components/Box";
import squaresBG from "./assets/squares.svg";
import waveGrayBG from "./assets/waveGray.svg";
import waveWhiteBG from "./assets/waveWhite.svg";
import wavePurpleBG from "./assets/wavePurple.svg";

export type BGColor =
  | "squares"
  | "white"
  | "gray"
  | "purple"
  | "flatGray"
  | "flatWhite";

const getBG = (color: BGColor) => {
  switch (color) {
    case "gray":
      return {
        backgroundColor: "#f7f8f9",
        backgroundImage: `url(${waveGrayBG})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      };
    case "purple":
      return {
        backgroundImage: `url(${wavePurpleBG}), linear-gradient(125deg,#512fc9,#651fff)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      };
    case "squares":
      return {
        backgroundColor: "white",
        backgroundImage: `url(${squaresBG})`,
      };
    case "flatGray":
      return {
        backgroundColor: "page-bg",
      };
    case "flatWhite":
      return {
        backgroundColor: "white",
      };
    default:
      return {
        backgroundColor: "white",
        backgroundImage: `url(${waveWhiteBG})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      };
  }
};

export interface SectionProps {
  bg: BGColor;
  children: React.ReactNode;
}

export const Section = ({ bg, children }: SectionProps) => {
  return (
    <Box as="section" {...getBG(bg)}>
      {children}
    </Box>
  );
};
