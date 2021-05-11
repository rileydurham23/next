import Box from "components/Box";
import Flex from "components/Flex";

type Align = "left" | "center";

export interface Props {
  title: string;
  align?: Align;
  subtitle?: string;
}

function getAlign(align: Align): "center" | "flex-start" {
  const map: Record<Align, "center" | "flex-start"> = {
    left: "flex-start",
    center: "center",
  };

  return map[align];
}

export default function Heading({ title, subtitle, align = "left" }: Props) {
  return (
    <Flex flexDirection="column" alignItems={getAlign(align)}>
      {subtitle && (
        <Box as="p" mb="3" color="dark-purple" fontWeight="bold">
          {subtitle}
        </Box>
      )}
      <Box
        as="h2"
        fontSize="hero-header"
        lineHeight="hero-header"
        fontWeight="bold"
      >
        {title}
      </Box>
    </Flex>
  );
}
