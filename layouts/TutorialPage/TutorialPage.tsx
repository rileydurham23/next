import css from "@styled-system/css";
import dynamic from "next/dynamic";
import { MDXProvider } from "@mdx-js/react";
import styled from "styled-components";

import Box from "components/Flex";
import { components as baseComponents } from "layouts/SitePage";
import Flex from "components/Flex";
import Head from "components/Head";
import Layout from "components/Layout";
import Section from "components/Section";
import TryTeleport from "components/TryTeleport";
import Video from "components/Video";
import VideoRow from "components/VideoRow";

interface TutorialPageProps {
  meta: {
    alternateTitle?: string;
    description: string;
    tutorialLabels?: Array<string>;
    title: string;
    tutorialPublicationDate: string;
    videoId: string;
  };
  children: React.ReactNode;
}

const components = {
  ...baseComponents,
};

const SSRLessShareButtons = dynamic(() => import("components/ShareButtons"), {
  ssr: false,
});

export const TutorialPage = ({
  meta: { alternateTitle, description, title, tutorialLabels, videoId },
  children,
}: TutorialPageProps) => {
  return (
    <>
      <Head title={alternateTitle || title} description={description} />
      <Layout
        behaviour="floating"
        border="none"
        hideWave="true"
        lineHeight="lg"
        pt={[6, 11]}
      >
        <Section
          alignItems="center"
          bg="grayWave"
          display="flex"
          flexDirection="column"
        >
          <Flex flexDirection="column">
            <StyledTitleBox as="h3">{alternateTitle || title}</StyledTitleBox>
            <StyledVideo borderRadius="none" videoId={videoId} />
            <VideoRow tutorialLabels={tutorialLabels} />
          </Flex>
        </Section>

        <Flex
          flexDirection={["column", "row"]}
          justifyContent="space-evenly"
          pl={[1, 4]}
          px={[4, 11, 130, 192]}
        >
          <Flex flexBasis="fit-content" flexDirection="column">
            <MDXProvider components={components}>
              <TextContainer>{children}</TextContainer>
            </MDXProvider>
            <Box pb={[1, 11]} pt={[0, 2]}>
              <SSRLessShareButtons title={alternateTitle || title} />
            </Box>
          </Flex>
        </Flex>

        <TryTeleport />
      </Layout>
    </>
  );
};

const StyledTitleBox = styled(Box)(
  css({
    fontSize: ["header-3", "header-2"],
    fontWeight: "black",
    lineHeight: "lg",
    mb: [3, 0],
    mt: [3, 11],
    mx: [4, 0, 0],
    order: [1, 0],
  })
);

const StyledVideo = styled(Video)(
  css({
    maxHeight: "590px",
    maxWidth: "min(100vw, 1048px)",
    my: [1, 6],
  })
);

const TextContainer = styled(Flex)(
  css({
    color: "darkest",
    flexDirection: "column",
    h2: {
      fontSize: "md",
      fontWeight: "bold",
      mb: 3,
      mt: [2, 5],
      "&:first-child": {
        mt: [2, 11],
      },
    },
    p: {
      lineHeight: "28px",
      mb: 3,
    },
  })
);
