import { Centrator } from "components/Layout";
import Box from "components/Box";
import Flex from "components/Flex";
import Button from "components/Button";
import Link from "components/Link";
import TerminalAnimation, {
  TerminalAnimationType,
} from "components/TerminalAnimation";

export interface AnimationHeaderProps {
  subtitle: string;
  title: string;
  description: React.ReactNode;
  terminalText: TerminalAnimationType;
}

export const AnimationHeader = ({
  subtitle,
  title,
  description,
  terminalText,
}: AnimationHeaderProps) => {
  return (
    <Centrator
      justifyContent="center"
      alignItems="stretch"
      flexDirection={["column", "row"]}
    >
      <Box maxWidth={["100%", "45%"]} py={[4, 5]}>
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
        <TerminalAnimation text={terminalText} />
      </Flex>
    </Centrator>
  );
};
