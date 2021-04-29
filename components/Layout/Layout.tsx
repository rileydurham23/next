import Header from "components/Header";
import Flex, { FlexProps } from "components/Flex";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children, ...props }: LayoutProps & FlexProps) => {
  return (
    <>
      <Header />
      <Flex as="main" pt={["48px", "80px"]} flexDirection="column" {...props}>
        {children}
      </Flex>
    </>
  );
};

export default Layout;
