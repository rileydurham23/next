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
} & FlexProps;

export default function Heading({
  title,
  subtitle,
  align = "left",
  titleFontSize = "section-header",
  titleLineHeight = "section-header",
  ...props
}: Props) {
  return (
    <Flex flexDirection="column" alignItems={toFlexAlign(align)} {...props}>
      {subtitle && (
        <Box as="p" mb={title ? "3" : 0} color="dark-purple" fontWeight="bold">
          {subtitle}
        </Box>
      )}
      {title && (
        <Box
          as="h2"
          fontSize={["header-1", titleFontSize]}
          lineHeight={["xl", titleLineHeight]}
          fontWeight="bold"
          textAlign={align}
        >
          {title}
        </Box>
      )}
    </Flex>
  );
}
