import styled from "styled-components";
import css from "@styled-system/css";

import NextImage from "next/image";

import Box from "components/Box";
import Flex from "components/Flex";
import { H1, H3, LI, UL } from "components/Text";
import Icon from "components/Icon";
import Link from "components/Link";
import pam from "./assets/get-in-touch@2x.png";
import Pattern1 from "components/Pattern1";
import wavelight from "sharedAssets/images/wave-light.png";

interface ListItem {
  href: string;
  icon: "bolt" | "stack" | "github";
  text: string;
}

interface TextBlock {
  h3: string;
  listItems: Array<ListItem>;
}

const textBlocks: Array<TextBlock> = [
  {
    h3: "Getting Started",
    listItems: [
      {
        href: "https://goteleport.com/case-study/",
        icon: "bolt",
        text: "Meet our Customers",
      },
      {
        href: "https://goteleport.com/blog/",
        icon: "stack",
        text: "Read the Blog",
      },
      {
        href: "https://github.com/gravitational/teleport/",
        icon: "github",
        text: "Github Repository",
      },
    ],
  },
  {
    h3: "Join Our Community",
    listItems: [
      {
        href: "https://github.com/gravitational/teleport/discussions/",
        icon: "github",
        text: "Community Discussion",
      },
    ],
  },
];

const ThankYou = () => {
  return (
    <Pattern1
      headTitle="Thank you for Contacting Teleport"
      headDescription="We have received your request and will get back to you shortly"
      cardMaxWidth={["420px", "900px"]}
      colorStyle="purple"
    >
      {/* Left side with Pam Image */}
      <LeftSide>
        <ImageContainer>
          <NextImage
            alt="Pam the wonder robot"
            layout="fill"
            objectFit="contain"
            src={pam}
          />
        </ImageContainer>
      </LeftSide>

      {/* Right side with content */}
      <RightSide>
        <StyledH1>Contact Received</StyledH1>
        <DescriptionContainer>
          We have received your request and will get back to you shortly. Below
          are some resources to help you get started right away.
        </DescriptionContainer>

        {textBlocks.map((textBlock) => (
          <>
            <StyledH3>{textBlock.h3}</StyledH3>
            <StyledUL>
              {textBlock.listItems.map((item) => (
                <Flex key={item.text} mb={[3, 4]}>
                  <Icon name={item.icon} color="gray" />
                  <StyledLI>
                    <Link color="dark-purple" href={item.href}>
                      {item.text}
                    </Link>
                  </StyledLI>
                </Flex>
              ))}
            </StyledUL>
          </>
        ))}
      </RightSide>
    </Pattern1>
  );
};

const DescriptionContainer = styled(Box)(
  css({
    color: "darkest",
    lineHeight: "lg",
    mb: [2, 4],
  })
);

const ImageContainer = styled(Box)(
  css({
    height: "348px",
    mb: 5,
    mt: [6, null],
    position: "relative",
    width: "auto",
  })
);

const LeftSide = styled(Flex)(
  css({
    backgroundColor: "lightest-gray",
    backgroundImage: `url(${wavelight})`,
    backgroundPosition: "30% 150%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "300%",
    borderBottomLeftRadius: "md",
    borderTopLeftRadius: "md",
    display: ["none", "flex"],
    flexDirection: "column",
    height: "794px",
    justifyContent: "center",
    width: "43%",
  })
);

const RightSide = styled(Flex)(
  css({
    flexDirection: "column",
    py: [5, 11],
    px: [4, 7],
    width: ["100%", "57%"],
  })
);

const StyledH1 = styled(H1)(
  css({
    fontSize: "header-2",
    fontWeight: "black",
    lineHeight: "lg",
    mb: 3,
  })
);

const StyledH3 = styled(H3)(
  css({
    lineHeight: "xxl",
    mb: 1,
  })
);

const StyledLI = styled(LI)(
  css({
    lineHeight: "md",
    listStyleType: "none",
    ml: [2, 3],
  })
);

const StyledUL = styled(UL)(
  css({
    pl: 0,
  })
);

export default ThankYou;
