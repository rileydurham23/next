// import { styled } from "@stitches/react";
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
  "@bp1": {
    maxWidth: "100%",
  },
});

const RightSide = styled(Box, {
  marginLeft: "$11",
  marginTop: "$9",
  // fontWeight: "$bold",
  "@bp1": {
    marginLeft: "$1",
    marginTop: "$5",
  },
});

const SubtitleContainer = styled(Box, {
  fontWeight: "$bold",
  lineHeight: "$md",
  fontSize: "$text-xl",
  color: "$dark-purple",
  marginBottom: "$3",
  "@bp1": {
    fontSize: "$text-md",
    marginBottom: "$2",
    lineHeight: "$lg",
  },
});

const DescriptionContainer = styled(Box, {
  lineHeight: "$lg",
  maxWidth: "1000px",
  fontSize: "$text-xl",
  color: "$darkest",
  "@bp1": {
    maxWidth: "100%",
  },
});

const TitleContainer = styled(Box, {
  color: "black",
  fontSize: "50px",
  fontWeight: "$black",
  lineHeight: "72px",
  textAlign: "left",
  marginBotton: "$4",
  "@bp1": {
    fontSize: "$header-3",
    lineHeight: "40px",
    marginBottom: "$2",
  },
});

const OutsideContainer = styled(Flex, {
  backgroundImage: `url(${wave}), linear-gradient(125deg ,#F0F2F4,#fff)`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  // backgroundSize: "100%",
  paddingLeft: "$11",
  paddingRight: "$11",
  paddingTop: "160px",
  paddingBottom: "$11",
  "@bp1": {
    // max 900px
    flexDirection: "column",
    paddingLeft: "$5",
    paddingRight: "$5",
    paddingTop: "110px",
  },
});
