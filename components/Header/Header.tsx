import css from "@styled-system/css";
import Button from "components/Button";
import Flex from "components/Flex";
import Link from "components/Link";
import Logo from "components/Logo";
import Menu from "components/Menu";

const Header = () => {
  return (
    <Flex
      position="absolute"
      top={0}
      left={0}
      right={0}
      zIndex={2000}
      alignItems="center"
      height="80px"
      pr={5}
      borderBottom="1px solid"
      borderColor="lightest-gray"
    >
      <Link
        href="/"
        boxSizing="border-box"
        display="flex"
        alignItems="center"
        width="240px"
        height="100%"
        pl={5}
        css={css({
          "&:focus, &:hover": {
            outline: "none",
            background: "rgba(240, 242, 244, 0.56)",
          },
        })}
      >
        <Logo width={121} height={24} color="dark-purple" />
      </Link>
      <Menu />
      <Button
        as="a"
        href="https://dashboard.gravitational.com/web/"
        shape="sm"
        type="secondary"
        ml="auto"
      >
        Sign In
      </Button>
      <Button as="a" href="/get-started/" shape="sm" type="primary" ml={4}>
        Get Started
      </Button>
    </Flex>
  );
};

export default Header;
