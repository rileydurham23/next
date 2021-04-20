import { useState, useCallback } from "react";
import styled from "styled-components";
import { css, media, transition } from "components/system";
import Button from "components/Button";
import Flex from "components/Flex";
import Icon from "components/Icon";
import Link from "components/Link";
import Logo from "components/Logo";
import Menu from "components/Menu";
import HeadlessButton from "components/HeadlessButton";

const Header = () => {
  const [isNavigationVisible, setIsNavigationVisible] = useState<boolean>(
    false
  );
  const toggleNavigaton = useCallback(
    () => setIsNavigationVisible((isNavigationVisible) => !isNavigationVisible),
    []
  );

  return (
    <StyledHeader>
      <StyledLogoLink href="/">
        <Logo width={121} height={24} color="dark-purple" />
      </StyledLogoLink>
      <StyledHamburger onClick={toggleNavigaton}>
        <Icon name={isNavigationVisible ? "close" : "hamburger"} size="md" />
      </StyledHamburger>
      <StyledContentWrapper isNavigationVisible={isNavigationVisible}>
        <Menu />
        <StyledCTAs>
          <StyledCTA
            as="a"
            href="https://dashboard.gravitational.com/web/"
            variant="secondary"
          >
            Sign In
          </StyledCTA>
          <StyledCTA as="a" href="/pricing/">
            Get Started
          </StyledCTA>
        </StyledCTAs>
      </StyledContentWrapper>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled(Flex)(
  css({
    alignItems: "center",
    borderBottom: "1px solid",
    borderColor: "lightest-gray",
    height: "80px",
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 2000,
  }),
  media("sm", {
    background: "white",
    boxShadow: "0 1px 4px rgba(0, 0, 0, 0.24)",
    height: "48px",
    position: "fixed",
  })
);

const StyledLogoLink = styled(Link)(
  css({
    color: "dark-purple",
    fontSize: "text-xl",
    fontWeight: "700",
    lineHeight: "80px",
    margin: "0 40px 0 0",
    px: "32px",
    textDecoration: "none",
    transition: transition([["background", "interaction"]]),
    display: "flex",
    alignItems: "center",
    height: "80px",
    width: "200px",
    minWidth: "200px",
    "&:focus, &:hover": {
      background: "rgba(240, 242, 244, 0.56)",
    },
  }),
  media("sm", {
    height: "48px",
    lineHeight: "48px",
    px: "16px",
  })
);

const StyledContentWrapper = styled(Flex)(
  ({ isNavigationVisible }: { isNavigationVisible: boolean }) => [
    css({
      width: "100%",
      alignItems: "center",
    }),
    media("sm", {
      flexDirection: "column",
      position: "fixed",
      zIndex: 2000,
      top: "48px",
      right: 0,
      bottom: 0,
      left: 0,
      display: isNavigationVisible ? "flex" : "none",
      overflow: "auto",
      width: "auto",
      p: 2,
      bg: "white",
    }),
  ]
);

const StyledCTAs = styled(Flex)(
  css({
    flexGrow: 0,
    alignItems: "center",
    justifyContent: "flex-end",
    pr: [0, 3],
    ml: [0, "auto"],
  }),
  media("sm", {
    mt: 5,
    width: "100%",
    flexDirection: "column",
  })
);

const StyledCTA = styled(Button)(
  css({
    mr: 3,
    flexShrink: 0,
  }),
  media("sm", {
    fontSize: "text-lg",
    height: "56px",
    mt: 2,
    mr: 0,
    width: "100%",
  })
);

const StyledHamburger = styled(HeadlessButton)(
  css({
    color: "dark-purple",
    display: ["block", "none"],
    height: "48px",
    outline: "none",
    padding: "12px 16px",
    position: "absolute",
    right: 0,
    top: 0,
  })
);
