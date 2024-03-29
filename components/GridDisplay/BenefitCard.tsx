import styled from "styled-components";
import css from "@styled-system/css";
import NextImage from "next/image";
import Box from "components/Box";
import Flex from "components/Flex";
import { blue, purple, orange } from "./assets";

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

export interface BenefitCardProps {
  children: React.ReactNode;
  title?: string;
  src?: string;
  cardBG: string;
}

const cardBackgrounds = {
  blue: `url("${blue}")`,
  orange: `url("${orange}")`,
  purple: `url("${purple}")`,
  gray: `linear-gradient(264.09deg, #F0F2F4 11.49%, #FFFFFF 130.27%)`,
};

export const BenefitCard = ({
  children,
  src,
  title,
  cardBG,
}: BenefitCardProps) => {
  //add additional backgrounds to cardBackgrounds
  const backgroundImage = cardBackgrounds[cardBG];

  return (
    <Flex flexDirection="column">
      <Box
        as="h2"
        fontSize="text-xl"
        lineHeight="lg"
        color="dark-purple"
        fontWeight="black"
        minHeight={["8px", "32px"]}
        mb={[3, 4]}
      >
        {title}
      </Box>

      <StyledWrapper
        backgroundImage={backgroundImage}
        pt={src ? 0 : ["90px", "112px"]}
      >
        {/* top half */}
        {src && (
          <Flex
            flexDirection="row"
            alignItems="center"
            height={[90, 112]}
            px={8}
          >
            <NextImage
              src={src}
              alt={title ? title + " provider" : "colorful background"}
              height={40}
              width={282}
            />
          </Flex>
        )}

        {/* bottom half */}
        <Flex
          flexDirection="column"
          flexGrow={1}
          p={4}
          borderRadius="0 0 8px 8px"
          css={css({ "p, li": { fontSize: "text-md", lineHeight: "md" } })}
        >
          {children}
        </Flex>
      </StyledWrapper>
    </Flex>
  );
};

const StyledWrapper = styled(Flex)(
  css({
    width: ["340px", "auto", "auto"],
    height: "100%",
    flexDirection: "column",
    borderRadius: "md",
    textDecoration: "none",
    backgroundRepeat: "no-repeat",
    backgroundSize: ["100% 90px", "100% 112px"],
    boxShadow: "0 1px 4px rgba(0, 0, 0, 0.24)",
    bg: "white",
  })
);
