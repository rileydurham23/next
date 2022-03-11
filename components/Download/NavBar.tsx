import { useState, useCallback } from "react";
import styled from "styled-components";

import { css, media, transition } from "components/system";
import { Flex } from "./components/Flex";
import Icon from "components/Icon";
import Link from "components/Link";
import Logo from "components/Logo";
import Menu from "components/Menu";
import HeadlessButton from "components/HeadlessButton";
import blockBodyScroll from "utils/block-body-scroll";
import { NavBarCTA } from "./components/NavBarCTA";

export const NavBar = () => {
  const [isNavigationVisible, setIsNavigationVisible] =
    useState<boolean>(false);
  const toggleNavigaton = useCallback(() => {
    setIsNavigationVisible((value) => !value);
    blockBodyScroll(isNavigationVisible);
  }, [isNavigationVisible]);

  return (
    <StyledNavBar>
      <StyledLogoLink href="/">
        <Logo width="121px" height="24px" color="dark-purple" />
      </StyledLogoLink>
      <StyledHamburger onClick={toggleNavigaton}>
        <Icon name={isNavigationVisible ? "close" : "hamburger"} size="md" />
      </StyledHamburger>
      <StyledContentWrapper isNavigationVisible={isNavigationVisible}>
        <Menu />
        <NavBarCTA />
      </StyledContentWrapper>
    </StyledNavBar>
  );
};

const StyledNavBar = styled(Flex)(
  css({
    alignItems: "center",
    borderColor: "lightest-gray",
    height: "80px",
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 2000,
    backgroundColor: "transparent",
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
    flexDirection: "row",
    fontSize: "text-xl",
    fontWeight: "700",
    lineHeight: "80px",
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
      border: "1px solid purple",

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

const StyledHamburger = styled(HeadlessButton)(
  css({
    color: "dark-purple",
    cursor: "pointer",
    display: ["block", "none"],
    height: "48px",
    outline: "none",
    padding: "12px 16px",
    position: "absolute",
    right: 0,
    top: 0,
  })
);
