import styled from "styled-components";
import { all, css } from "components/system";
import NextImage from "next/image";
import Link from "components/Link";
import Box, { BoxProps } from "components/Box";
import Flex from "components/Flex";
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
import { variant } from "components/system";
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

export type TileTypeVariant = "default" | "securityVisionary";
export interface GridTileProps {
  children: React.ReactNode;
  title: string;
  href: string;
  cardBG: string;
  speaker?: string;
  speakerDetails?: string;
  src?: string;
  smallIcon?: boolean;
  caption?: string;
  cardBC?: string;
  bhColor?: string;
  needDescriptionMargin?: boolean;
  tileType?: TileTypeVariant;
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

export const TopHalf = ({}) => {
  return <div>Top Half</div>;
};

export const GridTile = ({
  children,
  src,
  title,
  cardBG,
  href,
  smallIcon = false,
  caption,
  cardBC,
  bhColor,
  needDescriptionMargin = Boolean(href) && Boolean(src),
  tileType = "default",
  speakerDetails = "",
  speaker = "",
  ...props
}: GridTileProps & BoxProps) => {
  //add additional backgrounds to cardBackgrounds
  const backgroundImage = cardBackgrounds[cardBG];
  const isArticle = cardBG === "article";
  const isSecVis = tileType === "securityVisionary";

  return (
    <StyledWrapper href={href} {...props}>
      {/* top half */}
      {isSecVis ? (
        <Flex flexDirection="column" position="relative">
          <TopFlex
            backgroundImage={`url("${backgroundImage}")`}
            backgroundSize={isArticle ? "auto 100%" : "cover"}
            backgroundColor={cardBC}
            height="112px"
          />
          <StyledBox
            px={4}
            maxWidth="224px"
            fontStyle={tileType}
            lineHeight="sm"
          >
            <h3>{speaker}</h3>
            <p>{speakerDetails}</p>
          </StyledBox>
          <Box position="absolute" top="52px" right="16px">
            <NextImage src={src} alt={speaker} height={120} width={120} />
          </Box>
        </Flex>
      ) : (
        <TopFlex
          pt={src ? 3 : "120px"}
          backgroundImage={`url("${backgroundImage}")`}
          backgroundSize={isArticle ? "auto 100%" : "cover"}
          backgroundColor={cardBC}
        >
          {src &&
            (!smallIcon ? (
              <NextImage src={src} alt={title} height={193} width={282} />
            ) : (
              <Flex
                flexDirection="row"
                alignItems="center"
                height={140}
                justifyContent="flex-start"
              >
                <NextImage src={src} alt={title} height={32} width={32} />
                {caption && (
                  <Box
                    as="p"
                    color="white"
                    fontWeight="bold"
                    fontSize="header-3"
                    pl={2}
                  >
                    {caption}
                  </Box>
                )}
              </Flex>
            ))}
        </TopFlex>
      )}

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
        <StyledTitleBox fontStyle={tileType} as="p">
          {title}
        </StyledTitleBox>
        <StyledBox
          pb={needDescriptionMargin ? 3 : 0}
          lineHeight="md"
          fontStyle={tileType}
        >
          {children}
        </StyledBox>
      </Flex>
    </StyledWrapper>
  );
};

const StyledWrapper = styled(Link)(
  css({
    width: ["340px", "auto", "auto"],
    flexDirection: "column",
    borderRadius: "md",
    textDecoration: "none",
    boxShadow: "0 1px 4px rgba(0, 0, 0, 0.24)",
    bg: "white",
    transition: ".3s all",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 32px rgba(0, 0, 0, .24)",
    },
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
  }),
  variant({
    prop: "fontStyle",
    variants: {
      default: {
        fontSize: "13px",
        lineHeight: "md",
      },
      securityVisionary: {
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
      },
    },
  })
);

const StyledTitleBox = styled(Box)(
  css({
    lineHeight: "md",
    color: "black",
    fontWeight: "bold",
  }),
  variant({
    prop: "fontStyle",
    variants: {
      default: {
        fontSize: "text-md",
      },
      securityVisionary: {
        fontSize: "text-lg",
      },
    },
  })
);
