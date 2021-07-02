import webBackground from "./assets/newsletter_web@2x.png";
import mobBackground from "./assets/newsletter_mobile@2x.png";
import Background from "components/Newsletter/Background";
import Card from "components/Newsletter/Card";
import NewsHeader from "components/Newsletter/NewsHeader";
import ImageContainer from "components/Newsletter/ImageContainer";
import CardDivLeftBottom from "components/Newsletter/CardDivLeftBottom";
import CardDivRightTop from "components/Newsletter/CardDivRightTop";
import Caption from "components/Newsletter/Caption";
import Email from "components/Newsletter/Email";
import Copyright from "components/Newsletter/Copyright";
import TermsContainer from "components/Newsletter/TermsContainer";
import TermsText from "components/Newsletter/TermsText";
import Image from "components/Image";
import engineers from "./assets/engineers.png";
import whiteLogo from "./assets/white.png";
import { NewsletterEmailSubscribe } from "components/Newsletter/NewsletterEmailSubscribe";

const Newsletter = () => {
  return (
    <>
      <Background
        backgroundImage={[`url(${mobBackground})`, `url(${webBackground})`]}
      >
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
        <Card
          flexDirection={["column", "row"]}
          height={[812, 544]}
          width={[375, 944]}
        >
          <CardDivLeftBottom width={[343, 504]}>
            <ImageContainer m={["0 0 0 0", "65px 0 0 0"]}>
              {/* <Image
                src={engineers}
                alt="network infrastructure"
                width={["282px", "534px"]}
                height={["158px", "300px"]}
              /> */}
            </ImageContainer>
            <Caption>
              <h2>Teleport Access Plane</h2>
              <p>
                Get quick & secure access to SSH servers, Kubernetes clusters,
                web applications, and databases across any environment.
              </p>
            </Caption>
          </CardDivLeftBottom>
          <CardDivRightTop
            order={[1, 2, 2]}
            width={[343, 440]}
            marginTop={["0px", "99px"]}
          >
            <Caption>
              <h1>Subscribe to our newsletter!</h1>
              <p style={{ fontSize: "18px" }}>
                Subscribe to our newsletter to receive bi-weekly product
                updates, blog posts, and technical resources from the Teleport
                team.
              </p>
              {/* <Email>Email Address</Email> */}
              <NewsletterEmailSubscribe />
            </Caption>
          </CardDivRightTop>
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
export default Newsletter;
