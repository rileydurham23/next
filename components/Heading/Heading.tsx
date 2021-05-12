import Box from "components/Box";
import Flex, { FlexProps } from "components/Flex";

type Align = "left" | "center";

export type Props = {
  title: string;
  align?: Align;
  subtitle?: string;
} & FlexProps;

function getAlign(align: Align): "center" | "flex-start" {
  const map: Record<Align, "center" | "flex-start"> = {
    left: "flex-start",
    center: "center",
  };

  return map[align];
}

export default function Heading({
  title,
  subtitle,
  align = "left",
  ...props
}: Props) {
  return (
    <Flex flexDirection="column" alignItems={getAlign(align)} {...props}>
      {subtitle && (
        <Box as="p" mb="3" color="dark-purple" fontWeight="bold">
          {subtitle}
        </Box>
      )}
      <Box
        as="h2"
        fontSize={["header-1", "hero-header"]}
        lineHeight={["xxl", "hero-header"]}
        fontWeight="bold"
        textAlign={align}
      >
        {title}
      </Box>
    </Flex>
  );
}
