import { Section, Flex, Box } from "components";
import { Centrator } from "components/Layout";
import { BGColor } from "components/Section";
import { GreatPlaceImage } from "./GreatPlaceImage";

type Node = React.ReactNode | JSX.Element;
type Selector = [Node, number, number, number, number];

export interface SectionBannerProps {
  bg: BGColor;
  textColor: string;
  style: "greatPlace" | "healthCare";
  title: string;
  text: React.ReactNode;
  children?: Node;
}

export const SectionBanner = ({
  bg,
  textColor,
  style,
  title,
  text,
  children,
}: SectionBannerProps) => {
  const layoutSelector: Record<string, Selector> = {
    greatPlace: [GreatPlaceImage, 10, 40, 700, 4],
    healthCare: [children, 6, 30, 1100, 0],
  };

  return (
    <Section bg={bg}>
      <Centrator>
        <Flex
          flexDirection={["column", "row"]}
          justifyContent="center"
          pb={layoutSelector[style][1]}
          pt={[1, layoutSelector[style][1]]}
        >
          <Flex
            flexDirection="column"
            my={5}
            mr={[0, layoutSelector[style][2]]}
            maxWidth={["auto", layoutSelector[style][3]]}
            pr={[0, layoutSelector[style][4]]}
          >
            <Box
              color={textColor}
              fontSize={["header-3", "header-1"]}
              lineHeight={["lg", "xxl"]}
              fontWeight="black"
            >
              {title}
            </Box>
            <Box color={textColor} fontSize="text-lg" lineHeight="28px" mt={3}>
              {text}
            </Box>
          </Flex>
          <Flex
            flexDirection="row"
            justifyContent="center"
            px={[0, 4]}
            minWidth={["auto", "380px"]}
            width={["90%", "initial"]}
          >
            {layoutSelector[style][0]}
          </Flex>
        </Flex>
      </Centrator>
    </Section>
  );
};
