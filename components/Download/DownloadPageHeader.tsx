import { styled } from "@stitches/react";

import wave from "./assets/wave.svg";

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

const LeftSide = styled("div", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "66.6%",
});

const RightSide = styled("div", {
  flex: "0 0 auto",
  alignItems: "center",
  paddingTop: "60px",
  paddingLeft: "50px",
});

const SubtitleContainer = styled("div", {
  fontWeight: "700",
  lineHeight: "24px",
  fontSize: "18px",
  color: "#512fc9",
  marginBottom: "16px",
});

const DescriptionContainer = styled("div", {
  lineHeight: "32px",
  maxWidth: "1000px",
  marginTop: "24px",
  fontSize: "18px",
  color: "#37474F",
});

const TitleContainer = styled("div", {
  color: "black",
  fontSize: "54px",
  lineHeight: "72px",
  textAlign: "left",
  fontWeight: "900",
});

const OutsideContainer = styled("div", {
  padding: "80px",
  display: "flex",
  backgroundColor: "#F9F8F6",
  backgroundImage: `url(${wave}), linear-gradient(125deg ,#F0F2F4,#fff)`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "100%",
});
