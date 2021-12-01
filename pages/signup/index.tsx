import Pattern1 from "components/Pattern1";
import styled from "styled-components";
import css from "@styled-system/css";
import NextImage from "next/image";
import cloudSVG from "./assets/cloud.svg";
import Box from "components/Box";
import Flex from "components/Flex";
import CloudSignup from "components/CloudSignup";

const Signup = () => {
  return (
    <Pattern1
      headTitle="Signup for Teleport Pro"
      headDescription="Try it free. Unify access for SSH servers, Kubernetes clusters, web applications, and databases across all environments."
      colorStyle="purple"
      cardMaxWidth={["460px", "700px"]}
    >
      <LeftSide>
        <Flex flexDirection="column" width="100%">
          <Box
            as="h1"
            fontSize="header-1"
            fontWeight="bold"
            lineHeight="lg"
            pb={[3, 3]}
            pt={[2, 3]}
            mt={1}
          >
            Try it free
          </Box>
          <Box
            fontSize="text-md"
            lineHeight="md"
            pb={[0, 3]}
            color="darkest"
            fontWeight="regular"
          >
            Unify access for SSH servers, Kubernetes clusters, web applications,
            and databases across all environments.
          </Box>
          <Flex
            display={["none", "block"]}
            width="auto"
            height="155px"
            position="relative"
          >
            <NextImage
              src={cloudSVG}
              alt="cloud"
              layout="fill"
              objectFit="contain"
            />
          </Flex>
        </Flex>
      </LeftSide>

      {/* Side with form */}
      <RightSide width={["100%", "65%"]}>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          px={[3, 5]}
          pt={[0, 4]}
          pb={[0, 4]}
        >
          <CloudSignup />
        </Flex>
      </RightSide>
    </Pattern1>
  );
};

const LeftSide = styled(Flex)(
  css({
    display: "flex",
    flexWrap: "wrap",
    borderRadius: ["8px 8px 0 0", "8px 0 0 8px"],
    alignItems: ["flex-start", "center"],
    backgroundColor: "#F6F7F8",
    width: ["100%", "40%"],
    padding: 4,
  })
);

const RightSide = styled(Flex)(
  css({
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    borderRadius: "md",
    boxSizing: "border-box",
  })
);

export default Signup;
