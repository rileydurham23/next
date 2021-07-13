import Header, { HeaderBehaviour, HeaderMode } from "components/Header";
import Flex, { FlexProps } from "components/Flex";

interface LayoutProps {
  children: React.ReactNode;
  mode?: HeaderMode;
  behaviour?: HeaderBehaviour;
}

const Layout = ({
  children,
  mode,
  behaviour = "static",
  ...props
}: LayoutProps & FlexProps) => {
  return (
    <>
      <Header mode={mode} />
      <Flex
        as="main"
        pt={behaviour === "static" ? ["48px", "80px"] : undefined}
        flexDirection="column"
        {...props}
      >
        {children}
      </Flex>
    </>
  );
};

export default Layout;
