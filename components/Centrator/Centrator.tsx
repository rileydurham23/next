import Flex, { FlexProps } from "components/Flex";

export const Centrator = ({
  children,
  wrapperAs = "div",
  as = "div",
  px = [3, 3, 11],
  ...props
}: FlexProps) => {
  return (
    <Flex as={wrapperAs} justifyContent="center" width="100%" px={px}>
      <Flex as={as} maxWidth={1240} width="100%" {...props}>
        {children}
      </Flex>
    </Flex>
  );
};
