import css from "@styled-system/css";
import dynamic from "next/dynamic";
import { MDXProvider } from "@mdx-js/react";
import styled from "styled-components";

import Box from "components/Flex";
import { components as baseComponents } from "layouts/SitePage";
import Centrator from "components/Centrator";
import Flex from "components/Flex";
import Head from "components/Head";
import JoinTheCommunity from "components/JoinTheCommunity";
import Layout from "components/Layout";
import Section from "components/Section";
import TryTeleport from "components/TryTeleport";
import Video from "components/Video";
import VideoRow from "components/VideoRow";

interface TutorialPageProps {
  meta: {
    alternateTitle?: string;
    description: string;
    associatedLabels?: Array<string>;
    title: string;
    publicationDate: string;
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
  meta: { alternateTitle, description, title, associatedLabels, videoId },
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
          px={[0, 4]}
        >
          <Flex flexDirection="column">
            <StyledTitleBox as="h3">{alternateTitle || title}</StyledTitleBox>
            <StyledVideo borderRadius="none" videoId={videoId} />
            <VideoRow
              associatedLabels={associatedLabels}
              mainVideoId={videoId}
            />
          </Flex>
        </Section>
        <Flex
          flexDirection={["column", "row"]}
          justifyContent="space-evenly"
          px={[4, 4, 0]}
        >
          <Section bg="flatWhite">
            <Centrator
              alignItems={[null, null, "center"]}
              background="transparent"
              borderTop="1px solid #f0f2f4"
              display="flex"
              flexDirection="column"
              pt={0}
            >
              <Flex flexBasis="fit-content" flexDirection="column">
                <MDXProvider components={components}>
                  <TextContainer>{children}</TextContainer>
                </MDXProvider>
                <JoinTheCommunity />

                <Box pb={[1, 11]} pt={[0, 2]}>
                  <SSRLessShareButtons
                    title={alternateTitle || title}
                    isCompact
                  />
                </Box>
              </Flex>
            </Centrator>
          </Section>
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
    maxWidth: "1040px",
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
    maxWidth: "1040px",
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
