import Header from "components/Header";
import Flex, { FlexProps } from "components/Flex";

interface LayoutProps {
  children: React.ReactNode;
  shortHeader?: boolean;
}

const Layout = ({
  children,
  shortHeader,
  ...props
}: LayoutProps & FlexProps) => {
  const isShortHeader = Boolean(shortHeader);
  return (
    <>
      <Header short={isShortHeader} />
      <Flex
        as="main"
        pt={isShortHeader ? undefined : ["48px", "80px"]}
        flexDirection="column"
        {...props}
      >
        {children}
      </Flex>
    </>
  );
};

export default Layout;
