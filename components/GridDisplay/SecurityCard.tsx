import styled from "styled-components";
import { all, css } from "components/system";
import NextImage from "next/image";
import Box, { BoxProps } from "components/Box";
import Flex from "components/Flex";
import Button from "components/Button";
import { podcast } from "./assets";

/**
 * Component for use in a GridDisplay.
 *
 * SecurityCards are not clickable or hoverable. The href prop will be passed
 * to the "Watch Recording" button.
 *
 */

export interface SecurityCardProps {
  children: React.ReactNode;
  title: string;
  href: string;
  speaker: string;
  speakerDetails: string;
  src: string;
}

export const SecurityCard = ({
  children,
  src,
  title,
  href,
  speakerDetails,
  speaker,
  ...props
}: SecurityCardProps & BoxProps) => {
  return (
    <StyledWrapper href={href} {...props}>
      {/* top half */}
      <Flex flexDirection="column" position="relative">
        <BackgroundImageBox />
        <StyledBox px={4} mt={1} maxWidth="190px" lineHeight="sm">
          <h3>{speaker}</h3>
          <p>{speakerDetails}</p>
        </StyledBox>
        <Box position="absolute" top="52px" right="16px">
          <NextImage src={src} alt={speaker} height={120} width={120} />
        </Box>
      </Flex>

      {/* bottom half */}
      <Flex
        flexDirection="column"
        flexGrow={1}
        justifyContent="space-between"
        pb={4}
        pt={3}
        px={4}
        borderRadius="0 0 8px 8px"
        // backgroundColor={bhColor}
      >
        <StyledTitleBox as="p">{title}</StyledTitleBox>
        <StyledBox lineHeight="md" pb={3}>
          {children}
        </StyledBox>
        <Button shape="lg" mx="auto" as="a" width="100%" mt={3} href={href}>
          Watch Recording
        </Button>
      </Flex>
    </StyledWrapper>
  );
};

const StyledWrapper = styled(Flex)(
  css({
    width: ["340px", "auto", "auto"],
    flexDirection: "column",
    borderRadius: "md",
    textDecoration: "none",
    boxShadow: "0 1px 4px rgba(0, 0, 0, 0.24)",
    bg: "white",
  }),
  all
);

const BackgroundImageBox = styled(Box)(
  css({
    flexDirection: "row",
    pb: 3,
    px: 4,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "8px 8px 0 0",
    backgroundImage: `url("${podcast}")`,
    backgroundSize: "cover",
    height: "112px",
  })
);

const StyledBox = styled(Box)(
  css({
    fontFamily: "body",
    fontStyle: "normal",
    letterSpacing: "0em",
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    p: {
      fontSize: "text-sm",
      mt: 1,
      color: "gray",
      fontWeight: "normal",
    },
    h3: {
      mb: 1,
      color: "dark-purple",
      fontWeight: "bold",
      fontSize: "text-sm",
      lineHeight: "sm",
    },
  })
);

const StyledTitleBox = styled(Box)(
  css({
    lineHeight: "md",
    color: "black",
    fontWeight: "bold",
    my: 1,
    fontSize: "text-lg",
  })
);
