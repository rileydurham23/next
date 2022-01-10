import styled from "styled-components";
import { css } from "components/system";

import EnterpriseSignup from "components/EnterpriseSignup";
import Pattern1 from "components/Pattern1";
import Box from "components/Box";
import Flex from "components/Flex";
import NextImage from "next/image";
import hosted from "./assets/hosted.png";

const Enterprise = () => {
  return (
    <Pattern1
      headTitle="Signup for Teleport Enterprise"
      headDescription="Designed for engineering teams that demand the flexibility to run software anywhere, on any infrastructure."
      colorStyle="purple"
      cardMaxWidth="800px"
    >
      <LeftSide>
        <Flex flexDirection="column" width="100%">
          <Box
            as="h4"
            fontSize={["text-md", "text-md", "text-xl"]}
            fontWeight="bold"
            lineHeight={["lg", "lg", "xxl"]}
            color="dark-purple"
            mt={[null, 3]}
            mb={[2, 2, 3]}
          >
            Access Plane
          </Box>
          <Box
            as="h3"
            fontSize={["header-3", "header-1"]}
            fontWeight="black"
            lineHeight={["xl", "xxl"]}
            mb={[2, 3]}
          >
            Enterprise
          </Box>
          <Box
            fontSize="text-md"
            lineHeight="md"
            mb={[3, 4]}
            color="darkest"
            fontWeight="regular"
          >
            Designed for engineering teams that demand the flexibility to run
            software anywhere, on any infrastructure.
          </Box>
          <Flex display="block">
            <NextImage
              src={hosted}
              alt="cloud"
              layout="responsive"
              width="824px"
              height="664px"
            />
          </Flex>
        </Flex>
      </LeftSide>
      <RightSide>
        {/* Marketo form */}
        <EnterpriseSignup
          maxWidth="100%"
          width={["100%", "640px"]}
          boxShadow="none"
          mt="auto"
        />
      </RightSide>
    </Pattern1>
  );
};

const LeftSide = styled(Flex)(
  css({
    flexWrap: "wrap",
    borderRadius: ["8px 8px 0 0", "8px 0 0 8px"],
    alignSelf: "stretch",
    backgroundColor: "#F6F7F8",
    flexBasis: ["100%", "35%"],
    padding: [2, 4],
  })
);

const RightSide = styled(Flex)(
  css({
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "md",
    boxSizing: "border-box",
    flexBasis: ["100%", "65%"],
  })
);

export default Enterprise;
