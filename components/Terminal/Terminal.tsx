import Box, { BoxProps } from "components/Box";
import Flex, { FlexProps } from "components/Flex";

type TerminalProps = {
  children: React.ReactNode;
} & BoxProps;

const Dots = (props: FlexProps) => {
  return (
    <Flex {...props} py={2} px="7px">
      <Box
        width="12px"
        height="12px"
        borderRadius="circle"
        border="1px solid #e03d37"
        backgroundColor="#f95e57"
      />
      <Box
        width="12px"
        height="12px"
        ml="7px"
        borderRadius="circle"
        border="1px solid #df9c12"
        backgroundColor="#fbbe2e"
      />
      <Box
        width="12px"
        height="12px"
        ml="7px"
        borderRadius="circle"
        border="1px solid #2aa925"
        backgroundColor="#30c841"
      />
    </Flex>
  );
};

export const Terminal = ({ children, ...props }: TerminalProps) => {
  return (
    <Box
      {...props}
      bg="code"
      borderRadius="md"
      boxShadow="0 4px 32px rgba(0, 0, 0, 0.24)"
      overflow="hidden"
      width="100%"
    >
      <Box
        position="relative"
        fontSize="text-md"
        fontWeight="bold"
        lineHeight="lg"
        textAlign="center"
        color="rgba(255, 255, 255, 0.56)"
        bg="#010b1c"
      >
        <Dots position="absolute" top="0" left="0" />
        Terminal
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};
