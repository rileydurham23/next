import styled from "styled-components";
import { css } from "components/system";
import Box from "components/Box";
import Button from "components/Button";
import Centrator from "components/Centrator";
import Flex from "components/Flex";
import Image from "components/Image";
import Link from "components/Link";
import Section from "components/Section";
import shadowBg from "./assets/shadow.png";

/*
  This is the PDF download component found at the bottom of `/use-cases/privileged-access-management`
*/

export interface PDFTeaserProps {
  children: React.ReactNode;
  pdfSource: string;
  src: string;
  title: string;
  alt: string;
}

const PDFTeaser = ({
  children,
  pdfSource,
  title,
  src,
  alt,
}: PDFTeaserProps) => {
  return (
    <Section
      bg="grayWave"
      borderBottom="1px solid"
      borderColor="lightest-gray"
      overflow="hidden"
    >
      <Centrator justifyContent="space-between">
        <Box maxWidth={["100%", "66%", "70%"]} pt={[4, 5]} pb={4} mr={[0, 8]}>
          <Box
            as="h2"
            pt={[0, 2, 6]}
            fontSize={["header-1", "hero-header"]}
            lineHeight={["xl", "hero-header"]}
            fontWeight="black"
          >
            {title}
          </Box>
          <ChildrenContainer>{children}</ChildrenContainer>
          <Box pt={[4, 4, 6]}>
            <Button
              as={Link}
              fontSize="text-xl"
              height="50px"
              href={pdfSource}
              width={["100%", "300px"]}
            >
              Download
            </Button>
          </Box>
        </Box>

        <Flex
          py={6}
          display={["none", "flex"]}
          flexDirection="column"
          position="relative"
          flexShrink={0}
        >
          <Image
            src={src}
            width="344px"
            height="auto"
            boxShadow="0 4px 16px rgba(0, 0, 0, 0.24)"
            zIndex={2}
            alt={alt}
          />
          <Box
            backgroundImage={`url(${shadowBg})`}
            width="496px"
            height="113px"
            backgroundSize="cover"
            position="absolute"
            zIndex={1}
            bottom="-14px"
            left="-75px"
          />
        </Flex>
      </Centrator>
    </Section>
  );
};

const ChildrenContainer = styled(Box)(
  css({
    pt: [2, 4, 6],
    pb: 2,
    "& p": {
      fontSize: ["text-lg", "text-xl"],
      lineHeight: ["md", "lg"],
      color: "dark-gray",
    },
  })
);

export default PDFTeaser;
