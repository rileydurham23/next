import styled from "styled-components";
import { css, StyledSystemProps } from "components/system";
import webBackground from "./assets/newsletter_web@2x.png";
import Image from "next/image";
import Background from "components/Newsletter/Background";
import Card from "components/Newsletter/Card";
import engineers from "./assets/engineers.png";
import whiteLogo from "./assets/white.png";
import Flex from "components/Flex";
import { NewsletterEmailSubscribe } from "components/Newsletter/NewsletterEmailSubscribe";

const breakpoints = ["1000px"];

const Newsletter = () => {
  return (
    <>
      <Background backgroundImage={`url(${webBackground})`}>
        <NewsHeader>
          <h1>
            <a href="/">
              {/* verify url in <a/> tag above */}
              <Image
                src={whiteLogo}
                alt="network infrastructure"
                width="321px"
                height="40px"
              />
            </a>
          </h1>
        </NewsHeader>
        <Card>
          <CardDivLeft className="left">
            <ImageContainer>
              <Image
                src={engineers}
                alt="network infrastructure"
                width="534px"
                height="300px"
              />
            </ImageContainer>
            <Caption>
              <h2>Teleport Access Plane</h2>
              <p>
                Get quick & secure access to SSH servers, Kubernetes clusters,
                web applications, and databases across any environment.
              </p>
            </Caption>
          </CardDivLeft>
          <CardDivRight>
            <Caption>
              <h1>Subscribe to our newsletter!</h1>
              <p style={{ fontSize: "18px" }}>
                Subscribe to our newsletter to receive bi-weekly product
                updates, blog posts, and technical resources from the Teleport
                team.
              </p>
              <Email>Email Address</Email>
              <NewsletterEmailSubscribe />
            </Caption>
          </CardDivRight>
        </Card>
        <Copyright> © 2021 GRAVITATIONAL, INC. ALL RIGHTS RESERVED</Copyright>
        <TermsContainer>
          <a href="/tos/">
            {/* verify url in <a/> tag above */}
            <TermsText>TERMS OF SERVICE</TermsText>
          </a>
          <a href="/privacy/">
            {/* verify url in <a/> tag above */}
            <TermsText>PRIVACY POLICY</TermsText>
          </a>
        </TermsContainer>
      </Background>
    </>
  );
};

const ImageContainer = styled(Flex)<StyledSystemProps>(
  css({
    justifyContent: "center",
    alignItems: "top",
    width: "504px",
    margin: "65px 0 0 0",
  })
);

const NewsHeader = styled.header`
  padding: 48px 0px 16px;
  position: relative;
  left: 65px;
`;

const CardDivLeft = styled.div`
  background-image: linear-gradient(
    -68deg,
    #eff1fe 0%,
    #ffffff 100%,
    #ffffff 100%
  );
  width: 504px;
  border-radius: 8px 0 0 8px;
`;

const Caption = styled.div`
  color: #000000;
  margin: 0 56px;
  box-sizing: border-box;

  h1 {
    font-size: 34px;
  }

  h2 {
    font-family: Lato;
    font-size: 24px;
    font-weight: 700;
    line-height: 22px;
  }

  p {
    font-family: Lato;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
`;

const CardDivRight = styled.div`
  background: #ffffff;
  width: 440px;
  border-radius: 0 8px 8px 0;
  margin-top: 99px;
`;

const Email = styled.div`
  color: #324148;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
`;

const Copyright = styled.section`
  width: 459px;
  height: 14px;
  color: rgba(255, 255, 255, 0.8);
  font-family: "Lato";
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
`;

const TermsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const TermsText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-family: "Lato";
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  text-decoration: underline;
  text-transform: uppercase;
  margin: 12px 5px 60px 5px;
`;
export default Newsletter;
