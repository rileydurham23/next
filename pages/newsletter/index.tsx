import styled from "styled-components";
import { css, StyledSystemProps } from "components/system";
import webBackground from "./assets/newsletter_web@2x.png";
import Image from "next/image";
import Background from "../../components/Newsletter/Background";
import Card from "../../components/Newsletter/Card";
import engineers from "./assets/engineers.png";
import whiteLogo from "./assets/white.png";
import Flex from "../../components/Flex";

const Newsletter = (): JSX.Element => {
  return (
    <>
      <Background backgroundImage={`url(${webBackground})`}>
        <NewsHeader>
          <h1>
            <Image
              src={whiteLogo}
              alt="network infrastructure"
              width="321px"
              height="40px"
            />
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
          <div></div>
        </Card>
      </Background>
    </>
  );
};

const ImageContainer = styled(Flex)<StyledSystemProps>(
  css({
    justifyContent: "center",
    alignItems: "top",
    borderRadius: "8px 0 0 8px",
    width: "504px",
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
`;

const Caption = styled.div`
  color: #000000;
  font-style: normal;
  letter-spacing: normal;

  h2 {
    font-family: "Lato - Bold";
    font-size: 24px;
    font-weight: 700;
    font-style: normal;
    letter-spacing: normal;
    line-height: 22px;
  }

  p {
    width: 392px;
    height: 67px;
    font-family: "Lato - Regular";
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
`;

export default Newsletter;
