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
        <div>
          <Image
            src={whiteLogo}
            alt="network infrastructure"
            width="321px"
            height="40px"
          />
        </div>
        <Card>
          <ImageContainer>
            <Image
              src={engineers}
              alt="network infrastructure"
              width="534px"
              height="300px"
            />
          </ImageContainer>
          <div></div>
        </Card>
      </Background>
    </>
  );
};

const ImageContainer = styled(Flex)<StyledSystemProps>(
  css({
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px 0 0 8px",
    backgroundImage:
      "linear-gradient(-68deg, #eff1fe 0%, #ffffff 100%, #ffffff 100%)",
    height: "544px",
    width: "504px",
  })
);

export default Newsletter;
