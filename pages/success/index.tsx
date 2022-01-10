import styled from "styled-components";
import { css } from "components/system";

import Pattern1 from "components/Pattern1";
import Box from "components/Box";
import Flex from "components/Flex";
import Section from "components/Section";
import NextImage from "next/image";
import pam from "./assets/pam.png";
import Icon from "components/Icon";
import type { IconName } from "components/Icon";
import Link from "components/Link";

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
    iconName: "stack",
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
    <Pattern1
      headTitle="Teleport Success"
      headDescription="Teleport enables unified access for Kubernetes clusters, SSH servers, databases, and web applications in any environment."
      colorStyle="purple"
      cardMaxWidth={["343px", "944px"]}
    >
      <LeftSide>
        <Flex flexDirection="column" justifyContent="center" width="100%">
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
        <Box mx={[3, 6]} my={[7, 9]}>
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
            <h3>Getting Started</h3>
            <ul>
              {TopLinks.map((link, index) => (
                <LI
                  href={link.href}
                  iconName={link.iconName}
                  hrefName={link.hrefName}
                  key={index}
                />
              ))}
            </ul>

            <h3>Join Our Community</h3>
            <ul>
              <LI
                href="https://github.com/gravitational/teleport/discussions"
                iconName="github"
                hrefName="Community Discussion"
                key="1"
              />
            </ul>

            <h3>Need Enterprise Grade Features?</h3>
            <ul>
              <LI
                href="https://goteleport.com/#offerings"
                hrefName="Learn About Teleport Enterprise Edition"
                key="1"
              />
            </ul>
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
    borderRadius: ["8px 8px 0 0", "8px 0 0 8px"],
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

const TextFlex = styled(Flex)(
  css({
    alignItems: "stretch",
    flexDirection: "column",
    lineHeight: "xl",
    minHeight: 6,
    minWidth: ["auto", "304px"],
    h3: {
      fontSize: "text-xl",
      lineHeight: ["md", "lg"],
      my: 0,
      pt: [5, 6],
    },
    ul: {
      listStyle: "none",
      m: 0,
      pl: 0,
    },
    li: {
      display: "flex",
      lineHeight: "md",
      pt: [2, 4],
      "&:nth-child(1)": {
        pt: [2, 3],
      },
    },
  })
);

interface LIProps {
  href: string;
  hrefName: string;
  iconName?: IconName;
}

const LI = ({ href, hrefName, iconName }: LIProps) => {
  return (
    <li>
      {iconName && <Icon name={iconName} color="dark-purple" mr={3} />}
      <Link color="darkest" href={href}>
        {hrefName}
      </Link>
    </li>
  );
};

export default DownloadSuccess;
