import { styled } from "@stitches/react";

import wave from "./assets/wave.svg";
import { Flex } from "./components/Flex";
import { Box } from "./components/Box";

export const DownloadPageHeader = ({
  title,
  subtitle,
  description,
  children,
}) => {
  return (
    <OutsideContainer>
      <LeftSide>
        <SubtitleContainer>{subtitle}</SubtitleContainer>
        <TitleContainer>{title}</TitleContainer>
        <DescriptionContainer>{description}</DescriptionContainer>
      </LeftSide>

      <RightSide>{children}</RightSide>
    </OutsideContainer>
  );
};

const LeftSide = styled(Flex, {
  flexDirection: "column",
  maxWidth: "66.6%",
});

const RightSide = styled(Box, {
  paddingTop: "60px",
  paddingLeft: "50px",
});

const SubtitleContainer = styled(Box, {
  fontWeight: "700",
  lineHeight: "24px",
  fontSize: "18px",
  color: "#512fc9",
  marginBottom: "16px",
});

const DescriptionContainer = styled(Box, {
  lineHeight: "32px",
  maxWidth: "1000px",
  marginTop: "24px",
  fontSize: "18px",
  color: "#37474F",
});

const TitleContainer = styled(Box, {
  color: "black",
  fontSize: "54px",
  fontWeight: "900",
  lineHeight: "72px",
  textAlign: "left",
});

const OutsideContainer = styled(Box, {
  backgroundColor: "#F9F8F6",
  backgroundImage: `url(${wave}), linear-gradient(125deg ,#F0F2F4,#fff)`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "100%",
  display: "flex",
  padding: "80px",
});
