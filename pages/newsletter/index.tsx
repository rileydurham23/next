import styled from "styled-components";
import { all, css, StyledSystemProps } from "components/system";
import Head from "components/Head";
import webBackground from "./assets/newsletter_web.png";
import mobBackground from "./assets/newsletter_mob.png";
import Box from "components/Box";
import Flex from "components/Flex";
import Card from "components/Newsletter/Card";
import AccessPlane from "components/Newsletter/AccessPlane";
import EmailCTA from "components/Newsletter/EmailCTA";
import Image from "components/Image";
import engineers from "./assets/engineers.png";
import whiteLogo from "./assets/white_logo@1x.png";
import { NewsletterEmailSubscribe } from "components/Newsletter/NewsletterEmailSubscribe";

const Newsletter = () => {
  return (
    <>
      <Head title="Newsletter" description="Subsribe to our Newsletter!" />
      <FlexBG
        backgroundImage={[`url(${mobBackground})`, `url(${webBackground})`]}
        minHeight="100vh"
      >
        <Box m={["62px 0px 32px", "48px 0px 32px"]}>
          <Box as="h1" m={"0 0 0 0"}>
            <a href="/">
              <Flex
                justifyContent="center"
                alignItems="top"
                height={["24px", null]}
                width={["120px", null]}
              >
                <Image
                  src={whiteLogo}
                  alt="network infrastructure"
                  width={"100%"}
                />
              </Flex>
            </a>
          </Box>
        </Box>
        <Card>
          <AccessPlane order={[2, 1]}>
            <FlexBG
              backgroundImage={`url(${engineers})`}
              width={[282, 534]}
              height={[158, 300]}
              backgroundRepeat="no-repeat"
              ml={[5, -3]}
            />
            <Box>
              <Box
                fontSize={["header-4", "header-3"]}
                lineHeight={["22px", "24px"]}
                fontWeight={"bold"}
                width="100%"
                p={["6px 16px 10px 18px", "12px 56px 14px 56px"]}
              >
                Access Plane
              </Box>
              <Box
                fontSize={["15px", "text-lg"]}
                lineHeight={["20px", "24px"]}
                fontWeight={"regular"}
                width="100%"
                px={["18px", 8]}
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
              width={[343, 440]}
              height={[298, 392]}
            >
              <Box
                width={["307px", "304px"]}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  fontSize={["22px", "34px"]}
                  lineHeight={["28px", "40px"]}
                  width="100%"
                  pt={[7, "100px"]}
                  pb={[2, 3]}
                  fontWeight={"bold"}
                >
                  Subscribe to our newsletter!
                </Box>
                <Box fontSize={["17px", "18px"]} width="100%" pb={[null, 3]}>
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
            <a href="/tos/">
              <TermsText>TERMS OF SERVICE</TermsText>
            </a>
            <a href="/privacy/">
              <TermsText>PRIVACY POLICY</TermsText>
            </a>
          </Box>
        </Box>
      </FlexBG>
    </>
  );
};

const FlexBG = styled(Flex)<StyledSystemProps>(
  {
    display: "flex",
    flexDirection: "column",
    boxSizing: "content-box",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundSize: "cover",
    width: "100%",
  },
  all
);

const Copyright = styled("div")<StyledSystemProps>(
  css({
    display: ["none", "block"],
    width: "459px",
    height: "14px",
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: "text-sm",
    textAlign: "center",
    textTransform: "uppercase",
  })
);

const TermsText = styled("div")<StyledSystemProps>(
  css({
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: "text-sm",
    textAlign: "center",
    textDecoration: "underline",
    textTransform: "uppercase",
    margin: "12px 5px 60px 5px",
  })
);

export default Newsletter;
