import Box from "components/Box";
import Flex, { FlexProps } from "components/Flex";
import { toFlexAlign } from "utils/align";

type Align = "left" | "center";

export type Props = {
  dark?: boolean;
  title?: string;
  align?: Align;
  subtitle?: string;
  titleFontSize?: string | string[];
  titleLineHeight?: string | string[];
  titleFontWeight?: string | string[];
  titleAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  subtitleFontSize?: string | string[];
} & FlexProps;

export default function Heading({
  title,
  subtitle,
  align = "left",
  dark = false,
  titleFontSize = ["header-1", "section-header"],
  titleLineHeight = ["xl", "xxl"],
  titleFontWeight = "bold",
  titleAs = "h2",
  subtitleFontSize = ["text-md", "text-lg"],
  ...props
}: Props) {
  return (
    <Flex flexDirection="column" alignItems={toFlexAlign(align)} {...props}>
      {subtitle && (
        <Box
          as="h3"
          mb={title ? "3" : 0}
          color={dark ? "white" : "dark-purple"}
          fontWeight="bold"
          fontSize={subtitleFontSize}
          lineHeight="sm"
        >
          {subtitle}
        </Box>
      )}
      {title && (
        <Box
          as={titleAs}
          color={dark ? "white" : "black"}
          fontSize={titleFontSize}
          lineHeight={titleLineHeight}
          fontWeight={titleFontWeight}
          textAlign={align}
        >
          {title}
        </Box>
      )}
    </Flex>
  );
}
