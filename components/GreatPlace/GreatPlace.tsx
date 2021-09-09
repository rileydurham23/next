import { Section, Flex, Box } from "components";
import { Centrator } from "components/Layout";
import NextImage from "next/image";
import pam from "./assets/pam2x.png";
import cert from "./assets/cert.png";

const GreatPlace = () => {
  return (
    <Section bg="flatWhite">
      <Centrator>
        <Flex
          flexDirection={["column", "row"]}
          justifyContent="space-evenly"
          pb={10}
          pt={[1, 10]}
        >
          <Flex
            flexDirection="column"
            maxWidth={["auto", "700px"]}
            pr={[0, 5]}
            my={5}
          >
            <Box
              color="text"
              fontSize={["header-3", "header-1"]}
              lineHeight={["lg", "xxl"]}
              fontWeight="black"
            >
              Great Place to Work
            </Box>
            <Box fontSize="text-lg" lineHeight="28px" mt={3}>
              Our employees make our culture and we strive to make Teleport a
              desirable place to work by hiring and supporting incredible
              people. We are extremely proud to have 100% of our employees agree
              that Teleport is a Great Place to Work.
            </Box>
          </Flex>
          <Flex
            flexDirection="row"
            justifyContent="center"
            pr={[0, 4]}
            pl={[0, 4]}
            minWidth={["auto", "380px"]}
            width={["90%", "initial"]}
          >
            <Flex zIndex={2} mr="-50px">
              <NextImage
                src={cert}
                alt="certification for great place to work"
                width={200}
                height={283}
              />
            </Flex>
            <NextImage
              src={pam}
              alt="Teleport's robot mascot Pam"
              width={277}
              height={283}
            />
          </Flex>
        </Flex>
      </Centrator>
    </Section>
  );
};

export default GreatPlace;
