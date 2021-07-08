import styled from "styled-components";
import { css, StyledSystemProps } from "components/system";
import Head from "components/Head";
import Link from "components/Link";
import Box from "components/Box";
import Flex from "components/Flex";
import Image from "components/Image";
import { NewsletterEmailSubscribe } from "components/Newsletter/NewsletterEmailSubscribe";

import webBackground from "./assets/newsletter_web.png";
import mobBackground from "./assets/newsletter_mob.png";
import engineers from "./assets/engineers.png";
import whiteLogo from "./assets/white_logo@1x.png";

const Newsletter = () => {
  return (
    <>
      <Head title="Newsletter" description="Subsribe to our Newsletter!" />
      <StyledBackground
        backgroundImage={[`url(${mobBackground})`, `url(${webBackground})`]}
        height="100vh"
      >
        <Box mt={[9, 7]} mb={[5, 5]}>
          <Box as="h1" m={0}>
            <Link href="/">
              <Flex
                justifyContent="center"
                alignItems="top"
                height={["24px", "auto"]}
                width={["120px", "auto"]}
                css={css({
                  "&:hover, &:active, &:focus": {
                    opacity: 0.8,
                  },
                })}
              >
                <Image
                  src={whiteLogo}
                  alt="network infrastructure"
                  width="100%"
                />
              </Flex>
            </Link>
          </Box>
        </Box>
        <Card>
          <AccessPlane order={[2, 1]}>
            <StyledBackground
              backgroundImage={`url(${engineers})`}
              backgroundSize="100%"
              width={[282, 534]}
              height={[158, 300]}
              backgroundRepeat="no-repeat"
              ml={[5, -3]}
              mt={[4, 8]}
            />
            <Box>
              <Box
                fontSize={["header-4", "header-3"]}
                lineHeight={["22px", "24px"]}
                fontWeight="bold"
                // width="100%"
                p={["8px 16px 10px 16px", "12px 56px 16px 56px"]}
              >
                Access Plane
              </Box>
              <Box
                fontSize="text-lg"
                lineHeight={["20px", "24px"]}
                fontWeight="regular"
                px={[3, 8]}
                pb={[5, 8]}
              >
                Teleport allows engineers and security professionals to unify
                access for SSH servers, Kubernetes clusters, web applications,
                and databases across all environments.
              </Box>
            </Box>
          </AccessPlane>
          <EmailCTA>
            <Flex
              flexDirection="column"
              justifyContent="space-betweem"
              alignItems="center"
              px={[3, 9]}
            >
              <Box justifyContent="center">
                <Box
                  fontSize={["22px", "34px"]}
                  lineHeight={["28px", "40px"]}
                  pt={[7, "120px"]}
                  pb={[2, 3]}
                  fontWeight={"bold"}
                >
                  Subscribe to our newsletter!
                </Box>
                <Box fontSize="text-xl" pb={[0, 3]}>
                  We&apos;ll send you the best of our blog just once a month. We
                  promise.
                </Box>
              </Box>
              <NewsletterEmailSubscribe />
            </Flex>
          </EmailCTA>
        </Card>
        <Box mb={5}>
          <Copyright>© 2021 GRAVITATIONAL, INC. ALL RIGHTS RESERVED</Copyright>
          <Box
            display={["none", "flex"]}
            flexDirection="row"
            justifyContent="center"
          >
            <Link href="/tos/">
              <TermsText>TERMS OF SERVICE</TermsText>
            </Link>
            <Link href="/privacy/">
              <TermsText>PRIVACY POLICY</TermsText>
            </Link>
          </Box>
        </Box>
      </StyledBackground>
    </>
  );
};

const AccessPlane = styled(Flex)(
  css({
    backgroundImage: [
      "linear-gradient(141deg, #eff1fe 0%, #ffffff 100%)",
      "linear-gradient(-68deg, #eff1fe 0%, #ffffff 100%, #ffffff 100%)",
    ],
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: ["0 0 8px 8px", "8px 0 0 8px"],
  })
);

const Card = styled(Flex)(
  css({
    background: "white",
    flexDirection: ["column", "row-reverse"],
    borderRadius: "md",
    marginBottom: [8, 5],
    boxShadow: "0 0 64px rgba(0, 0, 0, 0.32)",
    height: [624, 544],
    width: [343, 944],
  })
);

const Copyright = styled("div")(
  css({
    display: ["none", "block"],
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: "text-sm",
    textAlign: "center",
    textTransform: "uppercase",
  })
);

const EmailCTA = styled("div")<StyledSystemProps>(
  css({
    background: "white",
    borderRadius: "md",
    boxSizing: "border-box",
  })
);

const StyledBackground = styled(Flex)({
  display: "flex",
  flexDirection: "column",
  boxSizing: "content-box",
  justifyContent: "space-between",
  alignItems: "center",
});

const TermsText = styled("div")(
  css({
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: "text-sm",
    textAlign: "center",
    textDecoration: "underline",
    textTransform: "uppercase",
    margin: "16px 8px 64px 8px",
    "&:hover, &:active, &:focus": {
      color: "dark-purple",
    },
  })
);

export default Newsletter;
