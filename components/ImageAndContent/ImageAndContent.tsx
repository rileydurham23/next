import Box from "components/Box";
import type { BGColor } from "components/Section/Section";
import { Centrator } from "components/Layout";
import Flex from "components/Flex";
import Section from "components/Section";

export interface ImageAndContentProps {
  bg?: BGColor;
  children: React.ReactNode;
  content: React.ReactNode;
  imagePosition?: string;
  imageToRightAndNotCentered?: boolean;
  subheader?: string | React.ReactNode;
  subtitle: string;
  title: string;
}

const ImageAndContent = ({
  bg = "grayGradient",
  children,
  content,
  imagePosition = "right",
  imageToRightAndNotCentered = false,
  subheader,
  subtitle,
  title,
}: ImageAndContentProps) => {
  return (
    <Section
      bg={bg}
      px={imageToRightAndNotCentered === true ? 0 : [2, 2, 6]}
      py={[2, 2, 6]}
    >
      <Centrator flexDirection="column">
        {/* Outer container */}
        <Flex
          justifyContent={
            !imageToRightAndNotCentered ? "space-between" : "start"
          }
          flexDirection={
            imagePosition === "right"
              ? ["column", "row"]
              : ["column-reverse", "row-reverse"]
          }
          pb="40px"
        >
          {/* Upper Content */}
          <Flex
            flexDirection="column"
            justifyContent="center"
            width={imagePosition === "left" ? ["auto", "65%"] : "auto"}
          >
            <Flex flexDirection="column">
              <Box
                as="h2"
                fontSize={["header-3", "header-1"]}
                fontWeight="black"
                color="black"
                lineHeight="xxl"
                mb={[1, 3]}
              >
                {title}
              </Box>
              <Box
                as="h2"
                fontSize="text-xl"
                fontWeight="regular"
                color="darkest"
                lineHeight="lg"
                mb={[4, 5]}
              >
                {subtitle}
              </Box>
              <Flex color="darkest" mb={2}>
                {subheader}
              </Flex>

              {/* Lower Content */}
              <Flex
                flexDirection="row"
                mr={imageToRightAndNotCentered ? 90 : 3}
                mb={[3, 0]}
                justifyContent="flex-start"
              >
                {content}
              </Flex>
            </Flex>
          </Flex>
          {/* Image Side: image is sourced locally from /pages/../assets
           *  Image is not visible on mobile.
           */}
          <Flex
            display={["none", "inherit"]}
            justifyContent="center"
            alignItems="center"
            maxWidth="25%"
          >
            {children}
          </Flex>
        </Flex>
      </Centrator>
    </Section>
  );
};

export default ImageAndContent;
