import Flex, { FlexProps } from "components/Flex";

export function Centrator({ children, as = "div", ...props }: FlexProps) {
  return (
    <Flex px="11" justifyContent="center" width="100%">
      <Flex as={as} maxWidth={1240} {...props}>
        {children}
      </Flex>
    </Flex>
  );
}
