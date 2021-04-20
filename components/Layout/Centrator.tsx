import Flex, { FlexProps } from "components/Flex";

export function Centrator({ children, as = "div", ...props }: FlexProps) {
  return (
    <Flex justifyContent="center" width="100%" px={[3, 3, 11]}>
      <Flex as={as} maxWidth={1240} width="100%" {...props}>
        {children}
      </Flex>
    </Flex>
  );
}
