import Header from "components/Header";
import Flex from "components/Flex";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex pt={["48px", "80px"]} flexDirection="column">
      <Header />
      {children}
    </Flex>
  );
};

export default Layout;
