import Box from "components/Box";
import waveGrayBG from "./assets/waveGray.svg";
import waveWhiteBG from "./assets/waveWhite.svg";
import wavePurpleBG from "./assets/wavePurple.svg";

type BGColor = "white" | "gray" | "purple";

const getBG = (color: BGColor) => {
  switch (color) {
    case "gray":
      return {
        backgroundColor: "lightest-gray",
        backgroundImage: `url(${waveGrayBG})`,
      };
    case "purple":
      return {
        backgroundColor: "dark-purple",
        backgroundImage: `url(${wavePurpleBG})`,
      };
    default:
      return {
        backgroundColor: "white",
        backgroundImage: `url(${waveWhiteBG})`,
      };
  }
};

export interface SectionProps {
  bg: BGColor;
  children: React.ReactNode;
}

export const Section = ({ bg, children }: SectionProps) => {
  return (
    <Box
      as="section"
      backgroundRepeat="no-repeat"
      backgroundPosition="center center"
      backgroundSize="cover"
      {...getBG(bg)}
    >
      {children}
    </Box>
  );
};
