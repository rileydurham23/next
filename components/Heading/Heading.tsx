import Box from "components/Box";
import Flex, { FlexProps } from "components/Flex";
import { toFlexAlign } from "utils/align";

type Align = "left" | "center";

export type Props = {
  title?: string;
  align?: Align;
  subtitle?: string;
  titleFontSize?: string;
  titleLineHeight?: string;
  titleFontWeight?: string;
  titleAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & FlexProps;

export default function Heading({
  title,
  subtitle,
  align = "left",
  titleFontSize = "section-header",
  titleLineHeight = "section-header",
  titleFontWeight = "bold",
  titleAs = "h2",
  ...props
}: Props) {
  return (
    <Flex flexDirection="column" alignItems={toFlexAlign(align)} {...props}>
      {subtitle && (
        <Box
          mb={title ? "3" : 0}
          color="dark-purple"
          fontWeight="bold"
          fontSize="text-lg"
          lineHeight="sm"
        >
          {subtitle}
        </Box>
      )}
      {title && (
        <Box
          as={titleAs}
          color="black"
          fontSize={["header-1", titleFontSize]}
          lineHeight={["xl", titleLineHeight]}
          fontWeight={titleFontWeight}
          textAlign={align}
        >
          {title}
        </Box>
      )}
    </Flex>
  );
}
