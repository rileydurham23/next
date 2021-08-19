import styled from "styled-components";
import css from "@styled-system/css";
import Head from "components/Head";
import Link from "components/Link";
import Box from "components/Box";
import Flex from "components/Flex";
import Logo from "components/Logo";
import { transition } from "components/system";
import webBackground from "./assets/newsletter_web.png";
import mobBackground from "./assets/newsletter_mob.png";

const Thanks = () => {
  return (
    <>
      <Head title="Thanks!" description="Submission successful!" />
      <StyledBackground
        backgroundImage={[`url(${mobBackground})`, `url(${webBackground})`]}
        minHeight="100vh"
        backgroundColor="light-purple"
        backgroundSize="cover"
        pl={[2, 4]}
        pr={[2, 4]}
      >
        <Box as="header" mt={[5, 9]} mb={[5, 5]} color="white">
          <Logo width={["120px", "180px"]} height={["24px", "38px"]} />
        </Box>

        <StyledCard as="section" justifyContent="space-evenly" p={5}>
          <Flex as="h1" m={0}>
            Thank you!
          </Flex>
          <Box>
            Thank you for signing up! The form has been submitted successfully.
          </Box>
          <Box>
            Return to <Link href="https://goteleport.com">goteleport.com</Link>
          </Box>
        </StyledCard>

        <Box as="footer" mb={9}>
          <StyledCopyright>
            © 2021 GRAVITATIONAL, INC. ALL RIGHTS RESERVED
          </StyledCopyright>
          <Box
            display={["none", "flex"]}
            flexDirection="row"
            justifyContent="center"
          >
            <StyledLink href="/tos/">TERMS OF SERVICE</StyledLink>
            <StyledLink href="/privacy/">PRIVACY POLICY</StyledLink>
          </Box>
        </Box>
      </StyledBackground>
    </>
  );
};

const StyledCard = styled(Flex)(
  css({
    maxWidth: "944px",
    width: "350px",
    height: "250px",
    backgroundColor: "white",
    flexDirection: "column",
    borderRadius: "md",
    marginBottom: [8, 5],
    boxShadow: "0 0 64px rgba(0, 0, 0, 0.32)",
  })
);

const StyledCopyright = styled("div")(
  css({
    display: ["none", "block"],
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: "text-sm",
    textAlign: "center",
    textTransform: "uppercase",
  })
);

const StyledBackground = styled(Flex)({
  display: "flex",
  flexDirection: "column",
  boxSizing: "content-box",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundRepeat: "no-repeat",
});

const StyledLink = styled(Link)(
  css({
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: "text-sm",
    textAlign: "center",
    textDecoration: "underline",
    textTransform: "uppercase",
    mx: 1,
    mt: 2,
    padding: 1,
    cursor: "pointer",
    transition: transition([["color", "interaction"]]),
    "&:hover": {
      color: "white",
    },
    "&:focus, &:active": {
      color: "white",
      outline: "none",
    },
  })
);

export default Thanks;
