import { useState, useCallback } from "react";

import { styled } from "@stitches/react";

import Flex from "./components/Flex";
import Logo from "components/Logo";
import Menu from "components/Menu";
import HeadlessButton from "components/HeadlessButton";
import blockBodyScroll from "utils/block-body-scroll";
import { NavBarCTA } from "./NavBarCTA";

const StyledLogoLink = styled("a", {
  color: "dark-purple",
  flexDirection: "row",
  fontSize: "text-xl",
  fontWeight: "700",
  lineHeight: "80px",
  paddingLeft: "32px",
  textDecoration: "none",
  // transition: transition([["background", "interaction"]]),
  display: "flex",
  alignItems: "center",
  height: "80px",
  width: "200px",
  minWidth: "200px",
});

export const NavBar = ({}) => {
  const [isNavigationVisible, setIsNavigationVisible] =
    useState<boolean>(false);
  const toggleNavigaton = useCallback(() => {
    setIsNavigationVisible((value) => !value);
    blockBodyScroll(isNavigationVisible);
  }, [isNavigationVisible]);

  return (
    <OuterContainer>
      <StyledLogoLink href="/">
        <Logo width="121px" height="24px" color="dark-purple" />
      </StyledLogoLink>
      {/* <StyledHamburger onClick={toggleNavigaton}>
          <Icon name={isNavigationVisible ? "close" : "hamburger"} size="md" />
        </StyledHamburger> */}
      <Menu />
      <NavBarCTA />
    </OuterContainer>
  );
};

const OuterContainer = styled("header", {
  border: "1px solid purple",
  display: "flex",
});

// const StyledNavBar = styled(Flex, {
//   alignItems: "center",
//   height: "80px",
//   left: 0,
//   position: "absolute",
//   right: 0,
//   top: 0,
//   zIndex: 2000,

//   // media("sm", {
//   //   background: "white",
//   //   boxShadow: "0 1px 4px rgba(0, 0, 0, 0.24)",
//   //   height: "48px",
//   //   position: "fixed",
//   // })
// });

// const StyledContentWrapper = styled(Flex, {
//   width: "100%",
//   alignItems: "center",
// });

const StyledHamburger = styled("button", {
  cursor: "pointer",
  display: "none",
  // display: ["block", "none"],
  height: "48px",
  outline: "none",
  padding: "12px 16px",
  position: "absolute",
  right: 0,
  top: 0,
});
