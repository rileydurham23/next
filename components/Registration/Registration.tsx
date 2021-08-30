import styled from "styled-components";
import { css, StyledSystemProps } from "components/system";
import Head from "components/Head";
import NextImage from "next/image";
import Link from "components/Link";
import Box from "components/Box";
import Flex from "components/Flex";
import Logo from "components/Logo";
import { RegistrationForm } from "./RegistrationForm";
import { transition } from "components/system";
import engineers from "./assets/engineers.png";
import webBackground from "./assets/newsletter_web.png";
import mobBackground from "./assets/newsletter_mob.png";

/**
 *
 * @returns a standalone, full-page component with email subscription form.
 * ***Not intended to be used within an MDX file.***
 * The button text must be changed in marketo.
 */

export interface RegistrationProps {
  headTitle: string;
  headDescription: string;
  mainImage?: string;
  title: string;
  description: string | React.ReactNode;
  CTA: string;
  subCTA: string;
  formID?: string;
}

export const Registration = ({
  headTitle,
  headDescription,
  mainImage = `${engineers}`,
  title,
  description,
  CTA,
  subCTA,
  formID,
}: RegistrationProps) => {
  return (
    <>
      <Head title={headTitle} description={headDescription} />
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        minHeight="100vh"
        backgroundImage={[`url(${mobBackground})`, `url(${webBackground})`]}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        pl={[2, 4]}
        pr={[2, 4]}
      >
        <Box as="header" mt={[5, 9]} mb={[5, 5]} color="white">
          <Logo width={["120px", "180px"]} height={["24px", "38px"]} />
        </Box>

        <StyledCard as="section">
          {/* Side with image, title, description */}
          <StyledAccessPlane order={[2, 1]}>
            <Flex
              flexDirection="column"
              justifyContent="center"
              maxWidth={["420px", "initial"]}
            >
              <Flex
                position="relative"
                width="auto"
                height={[158, 300]}
                mt={[4, 8]}
                p={1}
              >
                <NextImage
                  src={mainImage}
                  alt={title}
                  layout="fill"
                  objectFit="contain"
                />
              </Flex>
              <Box
                fontSize={["header-4", "header-3"]}
                lineHeight="md"
                fontWeight="bold"
                px={[3, 8]}
                py={[2, 3]}
              >
                {title}
              </Box>
              <Box
                fontSize="text-lg"
                lineHeight="md"
                fontWeight="regular"
                px={[3, 8]}
                pb={[5, 8]}
                whiteSpace="pre-wrap"
              >
                {description}
              </Box>
            </Flex>
          </StyledAccessPlane>

          {/* Side with email form */}
          <StyledEmailCTA>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              maxWidth={["420px", "initial"]}
              px={[3, 9]}
              pt={[6, 0]}
            >
              <Box justifyContent="center">
                <Box
                  as="h1"
                  fontSize={["header-3", "header-1"]}
                  lineHeight={["lg", "xl"]}
                  pb={[2, 3]}
                  fontWeight={"bold"}
                >
                  {CTA}
                </Box>
                <Box fontSize="text-xl" pb={[0, 3]}>
                  {subCTA}
                </Box>
              </Box>
              <RegistrationForm formID={formID} />
            </Flex>
          </StyledEmailCTA>
        </StyledCard>

        {/* Footer: hidden on mobile */}
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
            <StyledLink href="/security/">SECURITY POLICY</StyledLink>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

const StyledAccessPlane = styled(Flex)(
  css({
    backgroundImage: [
      "linear-gradient(141deg, #eff1fe 0%, #ffffff 100%)",
      "linear-gradient(-68deg, #eff1fe 0%, #ffffff 100%,)",
    ],
    borderTopLeftRadius: [0, "md"],
    borderBottomLeftRadius: "md",
    borderBottomRightRadius: ["md", 0],
    justifyContent: "center",
  })
);

const StyledCard = styled(Flex)(
  css({
    maxWidth: "944px",
    width: "100%",
    backgroundColor: "white",
    flexDirection: ["column", "row-reverse"],
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

const StyledEmailCTA = styled("div")<StyledSystemProps>(
  css({
    display: "flex",
    justifyContent: "center",
    background: "white",
    borderRadius: "md",
    boxSizing: "border-box",
  })
);

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
