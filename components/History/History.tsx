import styled from "styled-components";
import css from "@styled-system/css";
import { all, StyledSystemProps } from "components/system";
import { Centrator } from "components/Layout";
import Box from "components/Box";
import { ReactNode } from "react";
import * as icons from "./icons";
import pathUrl from "./assets/path.png";
import waveLeftUrl from "./assets/wave_left.png";
import waveRightUrl from "./assets/wave_right.png";

type Props = { children: ReactNode };

const pathBg = `url(${pathUrl}) center 200px no-repeat`;
const waveLeftBg = `url(${waveLeftUrl}) -438px -660px no-repeat`;
const waveRightBg = `url(${waveRightUrl}) right -438px top -660px no-repeat`;

const complexBg = [pathBg, waveLeftBg, waveRightBg].join(",");

export default function History({ children }: Props) {
  return (
    <Box
      as="section"
      width="100%"
      text="text-xl"
      py="10"
      background={["none", "none", complexBg]}
    >
      <Centrator flexDirection="column" alignItems="center">
        <Box as="p" color="dark-purple" fontWeight="bold">
          History
        </Box>
        <Box
          as="h1"
          mt="3"
          fontSize="hero-header"
          lineHeight="hero-header"
          fontWeight="bold"
        >
          Our Story
        </Box>
        <Box as="ul" listStyle="none">
          {children}
        </Box>
      </Centrator>
    </Box>
  );
}

interface Milestone {
  icon: keyof typeof icons;
  children: ReactNode;
}

export function Milestone({ icon, children }: Milestone) {
  return (
    <StyledItem backgroundImage={`url(${icons[icon]})`}>
      <StyledTextWrapper>{children}</StyledTextWrapper>
    </StyledItem>
  );
}

const StyledTextWrapper = styled("div")<StyledSystemProps>(
  css({
    width: ["100%", "51%"],
    fontSize: "text-xl",
    lineHeight: "lg",
    "> p": {
      m: 0,
    },
  })
);

const StyledItem = styled("li")<StyledSystemProps>(
  css({
    display: "flex",
    alignItems: "center",
    minHeight: ["auto", "260px"],
    pt: ["300px", 0],
    backgroundSize: "313px 313px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: ["center top", "right 20% center"],
    ":nth-child(even)": {
      backgroundPosition: ["center top", "left 20% center"],

      [StyledTextWrapper]: {
        ml: "auto",
      },
    },
    "& + &": {
      mt: 2,
    },
    ":last-child": {
      mt: "-10px",
    },
  }),
  all
);
