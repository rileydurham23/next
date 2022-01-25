import Centrator from "components/Centrator";
import Box from "components/Box";
import Flex from "components/Flex";
import Button from "components/Button";
import Link from "components/Link";
import { DATA } from "./data";

export interface AnimationHeaderProps {
  variant?: "default" | "builtForEngineers";
  subtitle: string;
  title: string;
  description: React.ReactNode;
  children?: React.ReactNode;
}

export const AnimationHeader = ({
  variant = "default",
  subtitle,
  title,
  description,
  children,
}: AnimationHeaderProps) => {
  return (
    <Centrator
      justifyContent="center"
      alignItems="stretch"
      flexDirection={["column", "row"]}
    >
      <Box maxWidth={["100%", "45%"]} pt={[4, 5]} pb={[0, 5]}>
        <Flex flexDirection="column" alignItems="flexStart">
          {subtitle && (
            <Box
              mb={title ? "3" : 0}
              color={DATA[variant].subtitleColor}
              fontWeight="bold"
              fontSize="text-xl"
              lineHeight="md"
            >
              {subtitle}
            </Box>
          )}
          {title && (
            <Box
              as="h1"
              color={DATA[variant].titleColor}
              fontSize={["header-1", "hero-header"]}
              lineHeight={["xl", "hero-header"]}
              fontWeight="black"
              textAlign="left"
            >
              {title}
            </Box>
          )}
        </Flex>
        <Box
          my={[3, 5]}
          fontSize="header-4"
          lineHeight="lg"
          color={DATA[variant].descriptionColor}
        >
          {description}
        </Box>
        <Flex flexDirection={["column", "row"]}>
          <Button
            as={Link}
            variant="primary"
            mt={[3, 0]}
            mr={[0, 3]}
            shape="lg"
            fontWeight={400}
            width={["100%", "auto"]}
            href="https://goteleport.com/pricing"
          >
            {DATA[variant].buttonText}
          </Button>
          {variant === "builtForEngineers" && (
            <Button
              as={Link}
              shape="outline"
              variant="secondary-gray"
              fontWeight={400}
              mt={[3, 0]}
              width={["100%", "auto"]}
              href="NEED AN HREF HERE" //need the href ******************************
            >
              INTERACTIVE TUTORIAL
            </Button>
          )}
        </Flex>
      </Box>
      {/* Animation Side */}
      <Flex
        flex="1 1 auto"
        justifyContent="flex-start"
        alignItems="center"
        maxWidth="100%"
      >
        {children}
      </Flex>
    </Centrator>
  );
};
