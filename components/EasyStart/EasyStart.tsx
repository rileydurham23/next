import styled from "styled-components";
import css from "@styled-system/css";
import Link from "components/Link";
import { Centrator } from "components/Layout";
import Section from "components/Section";
import Flex from "components/Flex";
import Box from "components/Box";
import Button from "components/Button";

export interface EasyStartProps {
  description: string;
  listDescription: string;
  listItems: string[] | React.ReactNode[];
  children: React.ReactNode;
}

export const EasyStart = ({
  description,
  listDescription,
  listItems,
  children,
}: EasyStartProps) => {
  return (
    <Section bg="wavelight">
      <Centrator>
        <Flex
          flexDirection="column"
          justifyContent="center"
          py={[3, 5, 11]}
          width="100%"
        >
          {/* Upper Section */}
          <Flex maxWidth={["auto", "75%"]} flexDirection="column">
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
              as="h2"
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
              width={["auto", "50%"]}
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
            <Flex width={["auto", "50%"]}>{children}</Flex>
          </Flex>
        </Flex>
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
