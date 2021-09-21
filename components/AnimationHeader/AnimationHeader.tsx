import { Centrator } from "components/Layout";
import Box from "components/Box";
import Flex from "components/Flex";
import Button from "components/Button";
import Link from "components/Link";

export interface AnimationHeaderProps {
  subtitle: string;
  title: string;
  description: React.ReactNode;
  children?: React.ReactNode;
}

export const AnimationHeader = ({
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
              color="dark-purple"
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
              color="black"
              fontSize={["header-1", "hero-header"]}
              lineHeight={["xl", "hero-header"]}
              fontWeight="black"
              textAlign="left"
            >
              {title}
            </Box>
          )}
        </Flex>
        <Box my={[3, 5]} fontSize="header-4" lineHeight="lg" color="darkest">
          {description}
        </Box>
        <Button
          as={Link}
          variant="primary"
          mt={[3, 0]}
          shape="lg"
          width={["100%", "auto"]}
          href="https://goteleport.com/pricing"
        >
          Get Started
        </Button>
      </Box>
      {/* Terminal Side */}
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
