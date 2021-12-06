import styled from "styled-components";
import css from "@styled-system/css";
import Pattern1 from "components/Pattern1";
import NextImage from "next/image";
import Box from "components/Box";
import Flex from "components/Flex";
import { MarketoBrowserForm } from "components/MarketoForm";
import pam from "./assets/get-in-touch@2x.png";
import wavelight from "sharedAssets/images/wave-light.png";

const Contact = () => {
  return (
    <Pattern1
      headTitle="Contact Us | Contact Sales"
      headDescription="Contact Teleport, get pricing and sales questions answered, or schedule a demo"
      colorStyle="purple"
      cardMaxWidth={["420px", "900px"]}
    >
      <StyledPamCard width={["100%", "43%"]}>
        <Flex
          flexDirection="column"
          justifyContent="center"
          width="100%"
          maxWidth={["420px", "initial"]}
        >
          <Flex
            position="relative"
            width="auto"
            height={[200, 348]}
            mb={5}
            p={5}
            mt={[6, null]}
          >
            <NextImage
              src={pam}
              alt="Pam the wonder robot"
              layout="fill"
              objectFit="contain"
            />
          </Flex>
        </Flex>
      </StyledPamCard>

      {/* Side with email form */}
      <StyledForm width={["100%", "57%"]}>
        <Flex
          justifyContent="center"
          flexDirection="column"
          alignItems="flex-start"
          px={[3, 5]}
          pt={[4, 6]}
        >
          <Box
            as="h1"
            fontSize="header-2"
            lineHeight="lg"
            pb={[2, 3]}
            fontWeight={["bold", "black"]}
          >
            Get in Touch
          </Box>
          <Box fontSize="text-lg" lineHeight="md" pb={[0, 3]} color="darkest">
            Please provide us with your information and how we can help you. Our
            team will get back to you with information you need.
          </Box>
        </Flex>

        <Flex
          flexDirection="column"
          justifyContent="center"
          px={[3, 5]}
          pt={[6, 0]}
          pb={[0, 4]}
        >
          <Flex
            backgroundColor="white"
            alignItems="stretch"
            flexDirection="column"
            mb={[5, 0]}
            width="100%"
            minHeight="44px"
            minWidth={["auto", "400px"]}
          >
            <MarketoBrowserForm id="1126" />
          </Flex>
        </Flex>
      </StyledForm>
    </Pattern1>
  );
};

const StyledPamCard = styled(Flex)(
  css({
    display: ["none", "flex"],
    borderTopLeftRadius: [0, "md"],
    borderBottomLeftRadius: "md",
    borderBottomRightRadius: ["md", 0],
    justifyContent: "center",
    backgroundImage: `url(${wavelight})`,
    backgroundPosition: "30% 150%",
    backgroundSize: "300%",
    backgroundRepeat: "no-repeat",
    backgroundColor: "lightest-gray",
  })
);

const StyledForm = styled(Flex)(
  css({
    flexDirection: "column",
    justifyContent: "center",
    background: "white",
    borderRadius: "md",
    boxSizing: "border-box",
  })
);

export default Contact;
