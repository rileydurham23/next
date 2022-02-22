import { styled } from "./stitches.config";

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
  marginLeft: "$11",
  marginTop: "$9",
});

const SubtitleContainer = styled(Box, {
  fontWeight: "$bold",
  lineHeight: "$md",
  fontSize: "$text-xl",
  color: "$dark-purple",
  marginBottom: "$3",
});

const DescriptionContainer = styled(Box, {
  lineHeight: "$lg",
  maxWidth: "1000px",
  marginTop: "$4",
  fontSize: "$text-xl",
  color: "$darkest",
});

const TitleContainer = styled(Box, {
  color: "black",
  fontSize: "54px",
  fontWeight: "$black",
  lineHeight: "72px",
  textAlign: "left",
});

const OutsideContainer = styled(Flex, {
  backgroundImage: `url(${wave}), linear-gradient(125deg ,#F0F2F4,#fff)`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "100%",
  paddingLeft: "$11",
  paddingRight: "$11",
  paddingTop: "160px",
  paddingBottom: "$11",
});
