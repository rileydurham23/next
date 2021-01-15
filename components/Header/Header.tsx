import { useEffect } from "react";
import css from "@styled-system/css";
import styled from "styled-components";
import Box from "components/Box";
import Button from "components/Button";
import Flex from "components/Flex";
import Icon from "components/Icon";
import Link from "components/Link";
import Logo from "components/Logo";
import Menu from "components/Menu";
import "docsearch.js/dist/cdn/docsearch.min.css";

const Header = () => {
  // docsearch.js is using "window" inside, so it will break ssr if we import it directly
  useEffect(() => {
    import("docsearch.js").then(({ default: docsearch }) => {
      docsearch({
        apiKey: process.env.NEXT_PUBLIC_DOCSEARCH_API_KEY,
        indexName: "goteleport",
        inputSelector: "[data-docsearch-input]",
        debug: false,
      });
    });
  }, []);

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
      <Box
        display="flex"
        alignItems="center"
        width="380px"
        height="32px"
        ml="auto"
        border="1px solid"
        borderColor="light-gray"
        borderRadius="default"
        css={css({
          "&:focus-within": {
            borderColor: "dark-purple",
          },
        })}
      >
        <Icon name="magnify" color="gray" mx="6px" />
        <StyledInput
          type="text"
          placeholder="Search documentation..."
          data-docsearch-input
        />
      </Box>
      <Button
        as="a"
        href="https://dashboard.gravitational.com/web/"
        shape="sm"
        type="secondary"
        ml={4}
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

const StyledInput = styled("input")(
  css({
    display: "block",
    flexGrow: 1,
    width: "342px",
    fontSize: "text-md",
    lineHeight: "30px",
    color: "black",
    bg: "transparent",
    p: 0,
    border: "none",
    "&:placeholder": {
      color: "gray",
    },
    "&:focus": {
      outline: "none",
    },
  })
);
