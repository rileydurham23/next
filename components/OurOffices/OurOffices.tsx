import NextImage from "next/image";
import Box from "components/Box";
import Flex from "components/Flex";
import Section from "components/Section";
import { Centrator } from "components/Layout";
import sanfrancisco from "./assets/sanfrancisco.jpg";
import seattle from "./assets/seattle.jpg";
import toronto from "./assets/toronto.jpg";

export const OurOffices = () => {
  return (
    <Section bg="flatWhite">
      <Centrator flexDirection="column" py={5}>
        <Box
          as="h2"
          fontSize="header-1"
          fontWeight="black"
          lineHeight="xxl"
          textAlign="center"
        >
          Our offices
        </Box>
        <Flex
          flexDirection={["column", "row"]}
          justifyContent="center"
          alignItems="center"
        >
          <OfficeBox location="Oakland, CA" image={sanfrancisco} />
          <OfficeBox location="Seattle, WA" image={seattle} />
          <OfficeBox location="Toronto, Canada" image={toronto} />
        </Flex>
      </Centrator>
    </Section>
  );
};

interface officeBoxProps {
  location: string;
  image: string;
}
const OfficeBox = ({ location, image }: officeBoxProps) => {
  return (
    <Flex flexDirection="column" mx={3} borderRadius="default">
      <Box fontSize="text-xl" textAlign="center" py={3}>
        {location}
      </Box>
      <Box position="relative" borderRadius="md">
        <NextImage src={image} alt={location} height={314} width={482} />
      </Box>
    </Flex>
  );
};
