import styled from "styled-components";
import css from "@styled-system/css";
import { BoxProps } from "components/Box";
import { media, StyledSystemProps } from "components/system";

export interface Intro {
  title: string;
  subject: string;
  description: string;
}

export interface PageIntroProps {
  data: Intro;
}

export function PageIntro({ data, ...props }: PageIntroProps & BoxProps) {
  const { title, subject, description } = data;

  return (
    <StyledWrapper {...props}>
      <StyledLeft>
        <StyledSubject>{subject}</StyledSubject>
        <StyledHeading>{title}</StyledHeading>
      </StyledLeft>
      <StyledDescription>{description}</StyledDescription>
    </StyledWrapper>
  );
}

const StyledSubject = styled("p")<StyledSystemProps>(
  css({
    boxSizing: "border-box",
    fontSize: "text-xl",
    lineHeight: "md",
    fontWeight: "bold",
    color: "dark-purple",
    m: 0,
  }),
  media("mdVertical", {
    fontSize: "text-md",
    lineHeight: "lg",
  })
);

const StyledHeading = styled("h1")<StyledSystemProps>(
  css({
    boxSizing: "border-box",
    fontSize: "hero-header",
    lineHeight: "hero-header",
    fontWeight: "black",
    m: 0,
    pt: 3,
  }),
  media("md", {
    fontSize: "header-1",
    lineHeight: "xl",
    pt: 0,
  }),
  media("mdVertical", {
    fontSize: "header-3",
    lineHeight: "lg",
    fontWeight: "bold",
    pt: 0,
  })
);

const StyledDescription = styled("p")<StyledSystemProps>(
  css({
    boxSizing: "border-box",
    fontSize: "text-xl",
    lineHeight: "lg",
    color: "darkest",
    pt: 5,
    m: 0,
  }),
  media("mdVertical", {
    fontSize: "text-md",
    lineHeight: "md",
    pt: 0,
    ml: 10,
  }),
  media("md", {
    ml: 0,
  })
);

const StyledLeft = styled("div")<StyledSystemProps>(
  css({
    boxSizing: "border-box",
  }),
  media("mdVertical", { flexShrink: 0 })
);

const StyledWrapper = styled("div")<StyledSystemProps>(
  css({
    boxSizing: "border-box",
    pt: 5,
    pb: 7,
  }),
  media("mdVertical", {
    display: "flex",
    alignItems: "center",
  }),
  media("md", {
    py: 4,
    display: "block",
    ml: [0, 3],
  })
);
