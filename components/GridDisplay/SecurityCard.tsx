import styled from "styled-components";
import { all, css } from "components/system";
import NextImage from "next/image";
import Box, { BoxProps } from "components/Box";
import Flex from "components/Flex";
import Button from "components/Button";
import {
  core,
  enterprise,
  whitepaper,
  tutorial,
  webinar,
  podcast,
  audit,
  article,
} from "./assets";

/**
 * Component for use in a GridDisplay.
 *
 * GridTiles are clickable, have hover functionality, and no "Learn More" button.
 * The href prop will be passed to the Link wrapper.
 *
 * GridCards are not clickable or hoverable. The optional href prop
 * will be passed to a "Learn More" button.
 *
 * ProductCards exist just below the Hero on the homepage. They have no border,
 * no hover, just an icon, title/text and Learn More button.
 *
 * BenefitCards are similar to GridCards but with a different display logic,
 * contents, and an optional title above the card (outside its borders)
 */

export interface SecurityCardProps {
  children: React.ReactNode;
  title: string;
  href: string;
  cardBG: string;
  speaker?: string;
  speakerDetails?: string;
  src?: string;
  cardBC?: string;
  bhColor?: string;
}

const cardBackgrounds = {
  enterprise,
  core,
  whitepaper,
  tutorial,
  webinar,
  podcast,
  audit,
  article,
};

export const SecurityCard = ({
  children,
  src,
  title,
  cardBG,
  href,
  cardBC,
  bhColor,
  speakerDetails,
  speaker,
  ...props
}: SecurityCardProps & BoxProps) => {
  //add additional backgrounds to cardBackgrounds
  const backgroundImage = cardBackgrounds[cardBG];

  return (
    <StyledWrapper href={href} {...props}>
      {/* top half */}

      <Flex flexDirection="column" position="relative">
        <TopFlex
          backgroundImage={`url("${backgroundImage}")`}
          backgroundSize="cover"
          backgroundColor={cardBC}
          height="112px"
        />
        <StyledBox
          px={4}
          mt={1}
          maxWidth="190px"
          lineHeight="sm"
          height="100px"
        >
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
        alignItems="stretch"
        pb={4}
        pt={3}
        px={4}
        borderRadius="0 0 8px 8px"
        backgroundColor={bhColor}
      >
        <StyledTitleBox as="p">{title}</StyledTitleBox>
        <StyledBox lineHeight="md" pb={3} height="150px">
          {children}
        </StyledBox>
        <Button
          shape="lg"
          mx="auto"
          as="a"
          width={["100%", "70%"]}
          mt={3}
          href={href}
        >
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

const TopFlex = styled(Flex)(
  css({
    flexDirection: "row",
    pb: 3,
    px: 4,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "8px 8px 0 0",
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
