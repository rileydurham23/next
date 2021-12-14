import styled from "styled-components";
import css from "@styled-system/css";
import Link from "components/Link";
import { Centrator } from "components/Layout";
import Section from "components/Section";
import Flex from "components/Flex";
import Box from "components/Box";
import Button from "components/Button";
import { BGColor } from "components/Section";

/**
 * The bigImage option places a full-height image in the right half
 * of the screen on desktop and at the top on mobile, as featured on
 * the /destkop-access/ page.
 *
 * The terminal option is the standard option used most other places.
 */

export interface EasyStartProps {
  bg: BGColor;
  mode: "terminal" | "bigImage";
  description: string;
  listDescription: string;
  listItems: string[] | React.ReactNode[];
  children: React.ReactNode;
}

export const EasyStart = ({
  bg = "wavelight",
  mode = "terminal",
  description,
  listDescription,
  listItems,
  children,
}: EasyStartProps) => {
  return (
    <Section bg={bg}>
      <Centrator flexDirection={["column", "row"]}>
        <Flex
          flexDirection="column"
          width={mode === "bigImage" ? ["auto", "50%"] : "100%"}
          order={[2, 1]}
        >
          <Flex
            flexDirection="column"
            justifyContent="center"
            py={[3, 5, 11]}
            width="100%"
          >
            {/* Upper Section */}
            <Flex
              maxWidth={
                mode === "bigImage" ? ["auto", "100%"] : ["auto", "75%"]
              }
              flexDirection="column"
            >
              <Box
                as="h2"
                fontSize={["header-2", "header-1"]}
                fontWeight="black"
                color="black"
                lineHeight="xxl"
                mb={[1, 3]}
              >
                Easy to get started
              </Box>
              <Box
                as="h3"
                fontSize="text-xl"
                fontWeight="regular"
                color="darkest"
                lineHeight="lg"
                mb={[0, 3]}
              >
                {description}
              </Box>
            </Flex>
            <Flex flexDirection={["column", "row"]}>
              {/* Binaries List */}
              <Flex
                flexDirection="column"
                width={mode === "bigImage" ? ["auto", "100%"] : ["auto", "50%"]}
                mr={[0, 3]}
                mb={[3, 0]}
              >
                <Box
                  color="dark-purple"
                  fontSize={["text-md", "text-md", "text-xl"]}
                  lineHeight={["lg", "xxl"]}
                  fontWeight="bold"
                  mt={[3, 0]}
                >
                  {listDescription}
                </Box>
                <StyledOL>
                  {listItems.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </StyledOL>
                <Button
                  as={Link}
                  href="/teleport/download"
                  shape="lg"
                  width={["auto", "230px", "230px"]}
                >
                  Download Teleport
                </Button>
              </Flex>
              {/* Terminal */}
              {mode === "terminal" && (
                <Flex width={["auto", "50%"]}>{children}</Flex>
              )}
            </Flex>
          </Flex>
        </Flex>
        {mode === "bigImage" && (
          <Flex
            id="bigImage"
            width={["100%", "50%"]}
            mt={[5, null]}
            height={[230, "auto"]}
            position="relative"
            order={[1, 2]}
          >
            <Flex position="relative" width="100%">
              {children}
            </Flex>
          </Flex>
        )}
      </Centrator>
    </Section>
  );
};

const StyledOL = styled("ol")(
  css({
    m: "0 0 3 0",
    pl: 4,
    li: {
      mb: 2,
    },
    code: {
      color: "dark-purple",
      fontFamily: "monospace",
    },
  })
);
