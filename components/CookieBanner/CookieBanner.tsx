import { useState } from "react";

import css from "@styled-system/css";
import styled from "styled-components";

import Box from "components/Box";
import Button from "components/Button";
import Flex from "components/Flex";
import Link from "components/Link";

const GDPRBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAcceptClick = () => {
    setIsVisible(false);
  };

  return (
    <OuterContainer>
      <CookieMessage>
        <TextContainer>
          Our sites uses cookies to provide you with a great user experience. By
          using this website, you accept our&nbsp;
          <Link href="https://goteleport.com/privacy/" color="white">
            Cookie Policy.
          </Link>
        </TextContainer>
      </CookieMessage>
      <Button onClick={handleAcceptClick} variant="secondary">
        Okay!
      </Button>
    </OuterContainer>
  );
};

export default GDPRBanner;

const TextContainer = styled(Box)(
  css({
    display: "inline-block",
    padding: [2, 0],
  })
);

const CookieMessage = styled(Flex)(
  css({
    marginRight: 5,
    flexDirection: ["column"],
    marginBottom: [2, 0],
    margin: 1,
    maxWidth: "900px",
  })
);

const OuterContainer = styled(Flex)(
  css({
    backgroundColor: "dark-purple",
    color: "white",
    alignItems: ["left", "center"],
    flexDirection: ["column", "row"],
    justifyContent: "space-around",
    position: "fixed",
    bottom: 0,
    width: "100%",
    padding: 3,
    zIndex: "999999",
    boxShadow: " 0px 2px 10px #455A64",
    // fontSize: "text-lg",
    transition: "all 0.3s ease",
  })
);
