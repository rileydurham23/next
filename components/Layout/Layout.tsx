import Header, { HeaderMode } from "components/Header";
import Flex, { FlexProps } from "components/Flex";

interface LayoutProps {
  children: React.ReactNode;
  mode?: HeaderMode;
}

const Layout = ({
  children,
  mode = "full",
  ...props
}: LayoutProps & FlexProps) => {
  return (
    <>
      <Header mode={mode} />
      <Flex
        as="main"
        pt={mode === "full" ? ["48px", "80px"] : undefined}
        flexDirection="column"
        {...props}
      >
        {children}
      </Flex>
    </>
  );
};

export default Layout;
