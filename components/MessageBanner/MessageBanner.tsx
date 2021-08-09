import styled from "styled-components";
import css from "@styled-system/css";
import Link from "next/link";
import Box from "components/Box";
import Section from "components/Section";
import { Centrator } from "components/Layout";

export interface MessageBannerProps {
  title: string;
  children: string;
  href: string;
  linkText: string;
}

export const MessageBanner = ({
  title,
  children,
  href,
  linkText,
}: MessageBannerProps) => {
  return (
    <Section bg="double">
      <Centrator
        flexDirection="column"
        justifContent="space-between"
        alignItems="center"
        textAlign="center"
        py={[5, 11]}
      >
        <Box
          as="h3"
          fontSize={["header-2", "header-1"]}
          fontWeight="black"
          color="black"
          lineHeight={["xl", "xxl"]}
          mb={3}
        >
          {title}
        </Box>
        <Box
          fontSize={["text-lg", "header-4"]}
          lineHeight="lg"
          color="darkest"
          mb={3}
          maxWidth={["90%", "70%"]}
        >
          {children}
        </Box>
        <Box height="48px">
          <StyledLink as="a" href={href}>
            {linkText}
          </StyledLink>
        </Box>
      </Centrator>
    </Section>
  );
};

const StyledLink = styled(Link)(
  css({
    fontSize: "text-lg",
    fontWeight: "bold",
    textDecorationColor: "dark-purple",
  })
);
