import { useState, useCallback, useRef, MouseEvent } from "react";
import { useClickAway } from "react-use";
import { styled } from "../../stitches.config";
import { Flex } from "../Flex";
import { DropdownMenu } from "../DropdownMenu/DropdownMenu";
import { DropdownMenuItem } from "../DropdownMenu/DropdownMenuItem";
// import { DropdownMenuOverlay } from "./DropdownMenu/DropdownMenuOverlay";

export const NavBarCTA = () => {
  const ref = useRef(null);

  const [isSignInVisible, setIsSignInVisible] = useState<boolean>(false);
  const toggleSignIn = useCallback((e: MouseEvent<HTMLElement>) => {
    e.preventDefault();

    setIsSignInVisible((value) => !value);
  }, []);

  useClickAway(ref, () => {
    if (isSignInVisible) {
      setIsSignInVisible(false);
    }
  });

  return (
    <>
      <OuterContainer>
        <RowContainer ref={ref}>
          <StyledSignInButton as="a" onClick={toggleSignIn}>
            Sign In
          </StyledSignInButton>

          {isSignInVisible && (
            <DropdownContainer>
              <DropdownMenu title="Sign in to Teleport">
                <DropdownMenuItem
                  href="https://teleport.sh/"
                  src="../assets/cloud.svg"
                  title="Teleport Cloud Login"
                  description="Login to your Teleport Account"
                  name="clouds"
                />
                <DropdownMenuItem
                  href="https://dashboard.gravitational.com/web/login"
                  src="../assets/download.svg"
                  title="Dashboard Login"
                  description="Legacy Login &amp; Teleport Enterprise Downloads"
                  name="download"
                />
              </DropdownMenu>
            </DropdownContainer>
          )}
        </RowContainer>
        <StyledGetStartedButton as="a" href="/pricing/">
          Get Started
        </StyledGetStartedButton>
      </OuterContainer>
    </>
  );
};

const DropdownContainer = styled("div", {
  right: "$3",
  position: "absolute",
  width: "auto",
  minWidth: "400px",
  marginTop: "1px",
  zIndex: "3000",
  "@bp1": {
    display: "block",
    position: "relative",
    width: "100%",
    minWidth: 0,
    top: 0,
  },
});

const OuterContainer = styled(Flex, {
  flexGrow: 0,
  alignItems: "center",
  justifyContent: "flex-end",
  flexDirection: "row",
  flexShirnk: 0,
  marginTop: 0,
  marginLeft: "auto",
  width: "auto",

  "@bp1": {
    flexDirection: "column",
    marginTop: "$5",
    marginLeft: 0,
    width: "100%",
    backgroundColor: "purple",
    display: "none",
  },
});

const RowContainer = styled("div", {
  position: "relative",
  width: "auto",
});

const StyledCTAButton = styled("button", {
  padding: "0 24px",
  height: "32px",
  fontSize: "14px",
  marginRight: "16px",
  borderRadius: "4px",
  fontWeight: "$bold",
  cursor: "pointer",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  fontFamily: "Lato",
  whiteSpace: "nowrap",

  "&:focus, &:hover": {
    outline: "none",
    borderColor: "$light-purple",
  },
  "&:active": {
    transitionDuration: "0s",
    opacity: "0.56",
  },
  "&&:disabled": {
    backgroundColor: "lightest-gray",
    borderColor: "lightest-gray",
    color: "dark-gray",
    cursor: "default",
    pointerEvents: "none",
  },
});

const StyledSignInButton = styled(StyledCTAButton, {
  background: "white",
  borderColor: "$dark-purple",
  color: "$dark-purple",
  border: "1px solid $dark-purple",

  "&:focus, &:hover": {
    backgroundColor: "white",
    color: "$light-purple",
  },
});

const StyledGetStartedButton = styled(StyledCTAButton, {
  backgroundColor: "$dark-purple",
  color: "white",

  "&:focus, &:hover": {
    backgroundColor: "$light-purple",
    color: "white",
  },
});
