import { useState, useCallback, useRef, MouseEvent } from "react";
import { useClickAway } from "react-use";
import { css, media } from "components/system";
import styled from "styled-components";
import Box from "components/Box";
import Button from "components/Button";
import Flex from "components/Flex";
import { DropdownMenu } from "./DropdownMenu/DropdownMenu";
import { DropdownMenuItem } from "./DropdownMenu/DropdownMenuItem";
import { DropdownMenuOverlay } from "./DropdownMenu/DropdownMenuOverlay";

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

  console.log();

  return (
    <>
      {isSignInVisible && <DropdownMenuOverlay />}
      <Flex
        flexGrow={0}
        alignItems="center"
        justifyContent="flex-end"
        flexDirection={["column", "row"]}
        flexShrink={0}
        mt={[5, 0]}
        ml={[0, "auto"]}
        width={["100%", "auto"]}
      >
        <Box position="relative" width={["100%", "auto"]} ref={ref}>
          <StyledCTA
            as="a"
            href="https://teleport.sh/"
            onClick={toggleSignIn}
            variant="secondary"
          >
            Sign In
          </StyledCTA>
          <Box
            display={isSignInVisible ? "block" : "none"}
            right={[0, 3]}
            position={["relative", "absolute"]}
            width={["100%", "auto"]}
            minWidth={[0, "400px"]}
            top={[0, "32px"]}
            zIndex={3000}
          >
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
          </Box>
        </Box>
        <StyledCTA as="a" href="/pricing/">
          Get Started
        </StyledCTA>
      </Flex>
    </>
  );
};

const StyledCTA = styled(Button)(
  css({
    mt: [2, 0],
    mr: [0, 3],
    flexShrink: 0,
  }),
  media("sm", {
    fontSize: "text-lg",
    height: "56px",
    width: "100%",
  })
);
