import Flex from "components/Flex";
import Grid from "components/Grid";
import Section from "components/Section";
import Box from "components/Box";
import Heading from "components/Heading";
import Icon, { IconProps, IconName } from "components/Icon";
import Centrator from "components/Centrator";
import type { BGColor } from "components/Section/Section";
import { GridTile } from "./GridTile";
import { GridCard } from "./GridCard";
import { NewProductCard } from "./NewProductCard";

/**
 * Card/Tile display component with integral background, icon and title element.
 * If the centralHeading prop is truthy, the Heading component is used,
 * otherwise a left-aligned icon/title format is standard.
 * This component uses Grid-based display logic
 */

export interface GridDisplayProps {
  children: React.ReactNode;
  cardStyle?:
    | "productCard"
    | "benefitCard"
    | "default"
    | "newProductCard"
    | "securityCard";
  productCard?: boolean;
  bg?: BGColor;
  centralHeading?: boolean;
  title?: string;
  subtitle?: string;
  description?: string;
  titleFontSize?: string | string[];
  titleLineHeight?: string | string[];
  titleFontWeight?: string | string[];
  subtitleFontSize?: string | string[];
  iconName?: IconName;
  iconSize?: IconProps["size"];
  bigLeftHeading?: boolean;
}

//grid template columns
const GTC = {
  productCard: [
    "minmax(340px, 560px)",
    "repeat(2, minmax(140px, 400px))",
    "repeat(5, minmax(140px, 294px))",
  ],
  benefitCard: [
    "minmax(340px, 560px)",
    "repeat(2, minmax(140px, 400px))",
    "repeat(3, minmax(140px, 400px))",
  ],
  newProductCard: [
    "minmax(340px, 560px)",
    "repeat(2, minmax(140px, 400px))",
    "repeat(3, minmax(140px, 400px))",
  ],
  default: [
    "minmax(140px, 270px)",
    "repeat(3, minmax(140px, 270px))",
    "repeat(4, minmax(140px, 270px))",
  ],
  securityCard: [
    "minmax(140px, 370px)",
    "repeat(2, minmax(120px, 370px))",
    "repeat(4, minmax(120px, 370px))",
  ],
};

//grid gaps
const GG = {
  productCard: [3, 3],
  benefitCard: [3, 6],
  newProductCard: [3, 7],
  default: [3, 3],
  securityCard: [3, 5],
};

function GridDisplay({
  children,
  cardStyle = "default",
  productCard = false,
  bg,
  centralHeading = false,
  title,
  subtitle,
  titleFontSize = ["header-2", "header-1"],
  titleLineHeight,
  titleFontWeight,
  iconName,
  iconSize,
  description,
  subtitleFontSize = ["text-md", "text-xl"],
  bigLeftHeading = false,
}: GridDisplayProps) {
  return (
    <Section
      bg={bg}
      pt={productCard ? 1 : null}
      borderTop={productCard ? "1px solid #F0F2F4" : null}
    >
      <Centrator
        pb={centralHeading ? [0, 11] : "auto"}
        flexDirection="column"
        alignItems={bigLeftHeading ? "left" : "center"}
      >
        {title && (
          <Flex
            alignSelf={centralHeading ? "auto" : "flex-start"}
            pb={centralHeading ? [0, 6] : "auto"}
          >
            {/** Icon and Title elements */}
            {centralHeading || bigLeftHeading ? (
              <Flex flexDirection="column" pt={[4, 7, 11]}>
                <Heading
                  title={title}
                  subtitle={subtitle}
                  titleFontSize={titleFontSize}
                  titleLineHeight={titleLineHeight}
                  titleFontWeight={titleFontWeight}
                  subtitleFontSize={subtitleFontSize}
                  textAlign={bigLeftHeading ? "left" : "center"}
                  mb={bigLeftHeading ? 3 : 0}
                />
                {description && (
                  <Box
                    as="p"
                    color="darkest"
                    fontSize={
                      bigLeftHeading ? "text-lg" : ["text-lg", "text-xl"]
                    }
                    lineHeight="lg"
                    textAlign={bigLeftHeading ? "left" : "center"}
                  >
                    {description}
                  </Box>
                )}
              </Flex>
            ) : (
              <Flex id="titlediv" flexDirection="row" pt={[5, 7, 9]}>
                {iconName && (
                  <Icon
                    color="dark-purple"
                    name={iconName}
                    size={iconSize}
                  ></Icon>
                )}
                <Box
                  fontSize={titleFontSize}
                  color="darkest"
                  lineHeight="lg"
                  pl={3}
                >
                  {title}
                </Box>
              </Flex>
            )}
          </Flex>
        )}

        {/** Card display logic using Grid*/}
        <Grid
          justifyContent={NewProductCard ? "center" : null}
          justifyItems="center"
          mt={centralHeading ? [3, 2] : productCard ? 3 : 7}
          mb={6}
          //the minimum width of the outer grid container
          minWidth={[null, "800px", "980px"]}
          //the widths of individual columns
          gridTemplateColumns={GTC[cardStyle]}
          gridGap={GG[cardStyle]}
        >
          {children}
        </Grid>
      </Centrator>
    </Section>
  );
}

GridDisplay.Tile = GridTile;
GridDisplay.Card = GridCard;
GridDisplay.NewProductCard = NewProductCard;

export default GridDisplay;
