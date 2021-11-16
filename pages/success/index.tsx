import styled from "styled-components";
import { css, transition } from "components/system";

import Box from "../../components/Box";
import defaultBackground from "../../components/Registration/assets/newsletter_web.png";
import Flex from "../../components/Flex";
import Icon from "../../components/Icon";
import type { IconName } from "../../components/Icon";
import Link from "../../components/Link";
import Logo from "../../components/Logo";
import mobileBackground from "../../components/Registration/assets/newsletter_mob.png";
import NextImage from "next/image";
import pam from "./assets/pam.png";
import Section from "components/Section";

interface TopLink {
  iconName: IconName;
  href: string;
  hrefName: string;
}

const TopLinks: Array<TopLink> = [
  {
    iconName: "quickstart",
    href: "https://goteleport.com/docs/getting-started/",
    hrefName: "Quickstart Guide",
  },
  {
    iconName: "documents",
    href: "https://goteleport.com/docs/",
    hrefName: "Developer Docs",
  },
  {
    iconName: "shieldCheck",
    href: "https://goteleport.com/resources/",
    hrefName: "Security Best Practices",
  },
  {
    iconName: "github",
    href: "https://github.com/gravitational/teleport",
    hrefName: "Github Repo",
  },
];

const DownloadSuccess = () => {
  return (
    <>
      <BackgroundContainer>
        {/* Logo Box */}
        <Box as="header" color="white" mb={[7, "135px"]} mt={[9, 7]}>
          <Logo
            width={["194px", "321px"]}
            height={["24px", "40px"]}
            alt="Teleport's logo"
          />
        </Box>

        {/* Outer container */}
        <ComponentContainer>
          <LeftSide>
            <Flex
              flexDirection="column"
              justifyContent="center"
              maxWidth={["420px", "initial"]}
              width="100%"
            >
              <Flex
                position="relative"
                width="auto"
                height={[200, 410]}
                mb={5}
                mt={[6, null]}
              >
                <NextImage
                  alt="Pam, Teleport's mascot"
                  layout="fill"
                  objectFit="contain"
                  src={pam}
                />
              </Flex>
            </Flex>
          </LeftSide>
          <RightSide>
            <Box justifyContent="center" mx={[3, 6]} my={[7, 9]}>
              <Box
                as="h2"
                fontSize={["header-3", "header-2"]}
                fontWeight={["bold", "black"]}
                lineHeight={["lg", "xl"]}
              >
                Thank you for downloading Teleport!
              </Box>
              <Box
                color="darkest"
                fontSize="text-lg"
                fontWeight="regular"
                lineHeight="md"
                pt={[3, 4]}
              >
                We&apos;re excited to help you secure access to your
                infrastructure and reduce compliance headaches.
              </Box>

              <TextFlex>
                <StyledH3>Getting Started</StyledH3>
                <StyledUL>
                  {TopLinks.map((link, index) => (
                    <LI
                      href={link.href}
                      iconName={link.iconName}
                      hrefName={link.hrefName}
                      key={index}
                    />
                  ))}
                </StyledUL>

                <StyledH3>Join Our Community</StyledH3>
                <StyledUL>
                  <LI
                    href="https://github.com/gravitational/teleport/discussions"
                    iconName="github"
                    hrefName="Community Discussion"
                    key="1"
                  />
                </StyledUL>

                <StyledH3>Need Enterprise Grade Features?</StyledH3>
                <StyledUL>
                  <LI
                    href="https://goteleport.com/#offerings"
                    hrefName="Learn About Teleport Enterprise Edition"
                    key="1"
                  />
                </StyledUL>
              </TextFlex>
            </Box>
          </RightSide>
        </ComponentContainer>

        {/* Footer: hidden on mobile */}
        <Box as="footer" mb={9} flex="1">
          <StyledCopyright>
            © 2021 GRAVITATIONAL, INC. ALL RIGHTS RESERVED
          </StyledCopyright>
          <Box
            display={["none", "flex"]}
            flexDirection="row"
            justifyContent="center"
            pt="17px"
          >
            <StyledLink href="/tos/">TERMS OF SERVICE</StyledLink>
            <StyledLink href="/privacy/">PRIVACY POLICY</StyledLink>
            <StyledLink href="/security/">SECURITY POLICY</StyledLink>
          </Box>
        </Box>
      </BackgroundContainer>
    </>
  );
};

interface LIProps {
  href: string;
  hrefName: string;
  iconName?: IconName;
}

const LI = ({ href, hrefName, iconName }: LIProps) => {
  return (
    <StyledLi>
      <StyledIcon name={iconName} mr={iconName ? 3 : -4} />
      <Link color="darkest" href={href}>
        {hrefName}
      </Link>
    </StyledLi>
  );
};

const StyledIcon = styled(Icon)(
  css({
    color: "dark-purple",
  })
);

const BackgroundContainer = styled(Flex)(
  css({
    alignItems: "center",
    backgroundImage: [`url(${mobileBackground})`, `url(${defaultBackground})`],
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "100vh",
    px: [2, 4],
  })
);

const ComponentContainer = styled(Flex)(
  css({
    backgroundColor: "white",
    borderRadius: "md",
    boxShadow: "0 0 64px rgba(0, 0, 0, 0.32)",
    flexDirection: ["column", "row"],
    mb: [8, 5],
    maxWidth: ["343px", "900px"],
    width: "100%",
  })
);

const LeftSide = styled(Section)(
  css({
    alignItems: "center",
    backgroundColor: "lightest-gray",
    backgroundPosition: 0,
    borderRadius: "md",
    display: "flex",
    flex: "1",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    width: "100%",
    minHeight: "300px",
  })
);

const RightSide = styled(Flex)(
  css({
    alignItems: "center",
    flex: "1",
    flexDirection: "column",
  })
);

const StyledCopyright = styled("div")(
  css({
    color: "rgba(255, 255, 255, 0.8)",
    display: ["none", "block"],
    fontSize: "text-sm",
    textAlign: "center",
    textTransform: "uppercase",
  })
);

const StyledH3 = styled("h3")(
  css({
    fontSize: "text-xl",
    lineHeight: ["md", "lg"],
    my: 0,
    pt: [5, 6],
  })
);

const StyledLi = styled("li")(
  css({
    display: "flex",
    lineHeight: "md",
    pt: [2, 4],
    "&:nth-child(1)": {
      pt: [2, 3],
    },
  })
);

const StyledLink = styled(Link)(
  css({
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: "text-sm",
    mx: 3,
    transition: transition([["color", "interaction"]]),
    "&:focus, &:active": {
      color: "white",
      outline: "none",
    },
    "&:hover": {
      color: "white",
    },
  })
);

const StyledUL = styled("ul")(
  css({
    listStyle: "none",
    m: 0,
    pl: 0,
  })
);

const TextFlex = styled(Flex)(
  css({
    alignItems: "stretch",
    flexDirection: "column",
    lineHeight: "xl",
    minHeight: 6,
    minWidth: ["auto", "304px"],
  })
);

export default DownloadSuccess;
