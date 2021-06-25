import Box from "components/Box";
import Flex, { FlexProps } from "components/Flex";
import { toFlexAlign } from "utils/align";

type Align = "left" | "center";

export type Props = {
  dark?: boolean;
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
  dark = false,
  titleFontSize = "section-header",
  titleLineHeight = "xxl",
  titleFontWeight = "bold",
  titleAs = "h2",
  ...props
}: Props) {
  return (
    <Flex flexDirection="column" alignItems={toFlexAlign(align)} {...props}>
      {subtitle && (
        <Box
          mb={title ? "3" : 0}
          color={dark ? "white" : "dark-purple"}
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
          color={dark ? "white" : "black"}
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
