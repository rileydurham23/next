import styled, { keyframes, css as styledCss } from "styled-components";
import css from "@styled-system/css";
import Flex from "components/Flex";
import Box from "components/Box";
import * as logos from "./logos";

export type LogoName = keyof typeof logos;

export interface AnnouncementBarImageProps {
  logo: LogoName;
  trim?: string | string[];
}

const AnnouncementBarImage = ({ logo, trim }: AnnouncementBarImageProps) => {
  const LogoSVG = logos[logo];
  return (
    <Box
      maxWidth={["120px", "160px"]}
      height="32px"
      my={2}
      mx={4}
      color="gray"
      opacity=".56"
      display={trim}
    >
      <LogoSVG width="100%" height="100%" display="block"></LogoSVG>
    </Box>
  );
};

export const AnnouncementBar = () => {
  return (
    <Flex
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      height="60px"
    >
      <StyledRow opacity="1" animationDelay="0">
        <AnnouncementBarImage logo="google" />
        <AnnouncementBarImage logo="nasdaq" />
        <AnnouncementBarImage logo="crypto" />
        <AnnouncementBarImage logo="samsung" trim={["none", "block"]} />
        <AnnouncementBarImage logo="hp" trim={["none", "block"]} />
        <AnnouncementBarImage logo="ibm" trim={["none", "block"]} />
      </StyledRow>
      <StyledRow opacity="0" animationDelay="5s">
        <AnnouncementBarImage logo="carta" />
        <AnnouncementBarImage logo="square" />
        <AnnouncementBarImage logo="snowflake" />
        <AnnouncementBarImage logo="sumologic" trim={["none", "block"]} />
        <AnnouncementBarImage logo="doordash" trim={["none", "block"]} />
      </StyledRow>
      <StyledRow opacity="0" animationDelay="10s">
        <AnnouncementBarImage logo="dk" />
        <AnnouncementBarImage logo="accenture" />
        <AnnouncementBarImage logo="gitlab" />
        <AnnouncementBarImage logo="freshworks" trim={["none", "block"]} />
        <AnnouncementBarImage logo="zynga" trim={["none", "block"]} />
      </StyledRow>
    </Flex>
  );
};

const logoAnimation = keyframes`
        0% {
          opacity: 0;
        }
        33% {
          opacity: 1;
        }
        34% {
          opacity: 0;
        }
        100% {
          opacity: 0;
        }
      `;

const StyledRow = styled(Flex)(
  css({
    minHeight: ["48px", "60px"],
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    animationIterationCount: "infinite",
    animationDuration: "15s",
  }),
  styledCss`animation-name: ${logoAnimation};`
);
