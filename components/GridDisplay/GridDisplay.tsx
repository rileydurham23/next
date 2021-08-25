import { Flex, Grid, Section, Icon, Box, Heading } from "components";
import { IconProps, IconName } from "components/Icon";
import { Centrator } from "components/Layout";
import type { BGColor } from "components/Section/Section";

/**
 * Card/Tile display component with integral background, icon and title element.
 * If the centralHeading prop is truthy, the Heading component is used,
 * otherwise a left-aligned icon/title format is standard.
 * This component uses Grid-based display logic
 */

export interface GridDisplayProps {
  children: React.ReactNode;
  bg?: BGColor;
  centralHeading?: boolean;
  title: string;
  subtitle?: string;
  titleFontSize?: string[];
  titleLineHeight?: string[];
  titleFontWeight?: string[];
  subtitleFontSize?: string[];
  iconName?: IconName;
  iconSize?: IconProps["size"];
}

export default function GridDisplay({
  children,
  bg,
  centralHeading = false,
  title,
  subtitle,
  titleFontSize = ["header-2", "header-1"],
  titleLineHeight,
  titleFontWeight,
  iconName,
  iconSize,
  subtitleFontSize = ["text-md", "text-xl"],
}: GridDisplayProps) {
  return (
    <Section bg={bg}>
      <Centrator flexDirection="column" alignItems="center">
        <Flex
          alignSelf={centralHeading ? "auto" : "flex-start"}
          pb={centralHeading ? [0, 6] : "auto"}
        >
          {/** Icon and Title elements */}
          {centralHeading ? (
            <Flex flexDirection="column" pt={[4, 7, 11]}>
              <Heading
                title={title}
                subtitle={subtitle}
                titleFontSize={titleFontSize}
                titleLineHeight={titleLineHeight}
                titleFontWeight={titleFontWeight}
                subtitleFontSize={subtitleFontSize}
                align="center"
              />
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
              <Box fontSize="header-3" color="darkest" lineHeight="lg" pl={3}>
                {title}
              </Box>
            </Flex>
          )}
        </Flex>

        {/** Card display logic using Grid*/}
        <Grid
          mt={centralHeading ? [3, 2] : 7}
          mb={6}
          minWidth={["340px", "800px", "980px"]}
          gridTemplateColumns={[
            "minmax(140px, 270px)",
            "repeat(3, minmax(140px, 270px))",
            "repeat(4, minmax(140px, 270px))",
          ]}
          gridGap={[3, 3]}
        >
          {children}
        </Grid>
      </Centrator>
    </Section>
  );
}
