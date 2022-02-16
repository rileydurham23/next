import css from "@styled-system/css";
import styled from "styled-components";

import Button from "components/Button";
import Flex from "components/Flex";
import Link from "components/Link";

const GDPRBanner = () => {
  const handleAcceptClick = () => {
    console.log("accepted");
  };
  return (
    <OuterContainer>
      <CookieMessage>
        We use cookies on our website. To learn how we use this information,
        please read our {"  "}
        <Link href="https://goteleport.com/privacy/">Private Policy.</Link>
      </CookieMessage>
      <Button onClick={handleAcceptClick}>Okay!</Button>
    </OuterContainer>
  );
};

export default GDPRBanner;

const CookieMessage = styled(Flex)(
  css({
    marginRight: 5,
    color: "darkest",
    alignItems: "center",
  })
);

const OuterContainer = styled(Flex)(
  css({
    backgroundColor: "white",
    justifyContent: "center",
    position: "fixed",
    bottom: 0,
    width: "100%",
    padding: "30px",
    zIndex: "999999",
    boxShadow: " 0px 2px 10px #888888",
    transition: "all 0.3s ease",
  })
);
