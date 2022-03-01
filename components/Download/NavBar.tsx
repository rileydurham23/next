import { useState, useCallback } from "react";
import { styled } from "./stitches.config";

import { Flex } from "./components/Flex";
import Icon from "components/Icon";
import Menu from "./components/Menu";
import blockBodyScroll from "utils/block-body-scroll";
import { NavBarCTA } from "./components/NavBarCTA";

import LogoSvg from "./assets/logo.svg?react";

const Logo = () => (
  <LogoContainer>
    <LogoSvg width="100%" height="100%" />
  </LogoContainer>
);

const LogoContainer = styled(Flex, {
  lineHeight: 0,
  width: "121px",
  height: "24px",
  color: "$dark-purple",
});

export const NavBar = () => {
  const [isNavigationVisible, setIsNavigationVisible] =
    useState<boolean>(false);
  const toggleNavigaton = useCallback(() => {
    setIsNavigationVisible((value) => !value);
    blockBodyScroll(isNavigationVisible);
  }, [isNavigationVisible]);

  console.log("isNavigationVisible", isNavigationVisible);
  return (
    <NavBarContainer>
      <LogoLink href="/">
        <Logo />
      </LogoLink>
      <StyledHamburger onClick={toggleNavigaton}>
        <Icon name={isNavigationVisible ? "close" : "hamburger"} size="md" />
      </StyledHamburger>
      <StyledContentWrapper
        style={{ display: isNavigationVisible ? "none" : "inherit" }}
        // activity={isNavigationVisible ? "active" : null}
      >
        <Menu />
        <NavBarCTA />
      </StyledContentWrapper>
    </NavBarContainer>
  );
};

interface StyledContentWrapperProps {
  activity: "active" | "inactive";
  children: React.ReactNode;
}

const StyledContentWrapper = styled(Flex, {
  border: "1px solid orange",
  width: "100%",
  position: "relative",
  "@bp1": {
    flexDirection: "column",
    border: "10px solid green",
    position: "absolute",
    zIndex: 2000,
    top: "48px",
    right: 0,
    bottom: 0,
    left: 0,
    display: "flex",
    overflow: "auto",
    width: "auto",
    p: 2,
    bg: "white",
    variant: {
      activity: {
        active: {
          width: "100%",
          alignItems: "center",
          backgroundColor: "orange",
        },
      },
    },
  },
});

const NavBarContainer = styled(Flex, {
  alignItems: "center",
  height: "80px",
  left: 0,
  position: "absolute",
  right: 0,
  top: 0,
  zIndex: 2000,
  backgroundColor: "transparent",
  width: "100%",
  "@bp1": {
    backgroundColor: "white",
    boxShadow: "0 1px 4px rgb(0 0 0 / 24%)",
    height: "48px",
    position: "fixed",
  },
});

const LogoLink = styled("a", {
  padding: "0 32px",
  transition: "all .3s",
  height: "80px",
  display: "flex",
  alignItems: "center",
  lineHeight: "80px",
  paddingRight: "47px",

  "&:hover": {
    backgroundColor: "#f1f3f4",
  },
  "&:focus": {
    backgroundColor: "#f1f3f4",
  },
  "@bp1": {
    height: "48px",
    lineHeight: "48px",
    paddingLeft: "16px",
    paddingRight: "16px",
  },
});

const StyledHamburger = styled("button", {
  appearance: "none",
  boxSizing: "border-box",
  minWidth: 0,
  lineHeight: "inherit",
  fontSize: "inherit",
  border: 0,
  backgroundColor: "transparent",
  color: "$dark-purple",
  cursor: "pointer",
  display: "none",
  height: "48px",
  outline: "none",
  padding: "12px 16px",
  position: "absolute",
  right: 0,
  top: 0,
  "@bp1": {
    display: "block",
  },
});
