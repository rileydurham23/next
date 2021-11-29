import styled from "styled-components";
import { css } from "components/system";

import Pattern1 from "components/Pattern1";
import Box from "components/Box";
import Flex from "components/Flex";
import Icon from "components/Icon";
import type { IconName } from "components/Icon";
import Link from "components/Link";
import Section from "components/Section";
import NextImage from "next/image";
import pam from "./assets/pam.png";
import { TopLinks } from "./constants";

const DownloadSuccess = () => {
  return (
    <Pattern1
      headTitle="Teleport Success"
      headDescription="Try it free. Unify access for SSH servers, Kubernetes clusters, web applications, and databases across all environments."
      colorStyle="purple"
    >
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
            We&apos;re excited to help you secure access to your infrastructure
            and reduce compliance headaches.
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
    </Pattern1>
  );
};

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

interface LIProps {
  href: string;
  hrefName: string;
  iconName?: IconName;
}

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

const StyledIcon = styled(Icon)(
  css({
    color: "dark-purple",
  })
);

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

const StyledH3 = styled("h3")(
  css({
    fontSize: "text-xl",
    lineHeight: ["md", "lg"],
    my: 0,
    pt: [5, 6],
  })
);

export default DownloadSuccess;
