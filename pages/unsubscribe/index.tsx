import styled from "styled-components";
import { css } from "components/system";
import NextImage from "next/image";
import Box from "components/Box";
import Flex from "components/Flex";
import { MarketoBrowserForm } from "components/MarketoForm";
import Pattern1 from "components/Pattern1";
import wavelight from "sharedAssets/images/wave-light.png";
import pam from "./assets/get-in-touch@2x.png";

const Unsubscribe = () => {
  return (
    <Pattern1
      headTitle="Unsubscribe"
      headDescription="Unsubscribe from Teleport communications"
      colorStyle="purple"
      cardMaxWidth={["420px", "900px"]}
    >
      <StyledCard width={["100%", "43%"]}>
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
      </StyledCard>
      <StyledForm>
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
            We&apos;re sorry to see you go
          </Box>
          <Box fontSize="text-lg" lineHeight="md" pb={[0, 3]} color="darkest">
            Please enter the email address you would like to unsubscribe.
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
            <MarketoBrowserForm id="1" />
          </Flex>
        </Flex>
      </StyledForm>
    </Pattern1>
  );
};

const StyledCard = styled(Flex)(
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

export default Unsubscribe;
