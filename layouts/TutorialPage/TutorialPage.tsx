import css from "@styled-system/css";
import dynamic from "next/dynamic";
import { MDXProvider } from "@mdx-js/react";
import styled from "styled-components";

import Box from "components/Flex";
import { components as baseComponents } from "layouts/SitePage";
import Flex from "components/Flex";
import Head from "components/Head";
import Layout from "components/Layout";
import TryTeleport from "components/TryTeleport";
import Video from "components/Video";
import VideoColumn from "components/VideoColumn";

interface TutorialPageProps {
  meta: {
    alternateTitle?: string;
    description: string;
    title: string;
    tutorialPublicationDate: string;
    videoId: string;
    videoLength: string;
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
  meta: { alternateTitle, description, title, videoId, videoLength },
  children,
}: TutorialPageProps) => {
  return (
    <>
      <Head title={alternateTitle || title} description={description} />
      <Layout
        behaviour="floating"
        border="none"
        lineHeight="lg"
        hideWave="true"
        pt={[6, 11]}
      >
        <Flex backgroundColor="black" justifyContent="center" width="100%">
          <Video
            hasRoundedEdges={false}
            height={439}
            videoId={videoId}
            width={780}
          />
        </Flex>

        <Flex
          background="linear-gradient(125deg,#f0f2f4,#fff)"
          flexDirection="column"
          px={[3, 9]}
          py={[1, 3]}
        >
          <Box
            as="h3"
            color="darkest"
            fontSize="text-xl"
            lineHeight="lg"
            margin="0"
            padding="0"
          >
            {alternateTitle || title}
          </Box>
          <Box
            as="p"
            fontSize={["text-sm", "text-md"]}
            lineHeight="md"
            margin={0}
            padding={0}
          >
            Video Length: {videoLength}
          </Box>
        </Flex>
        <Flex
          flexDirection={["column", "row"]}
          justifyContent="space-evenly"
          pl={[1, 4]}
        >
          <Flex
            flexBasis="fit-content"
            flexDirection="column"
            maxWidth={["97%", "73%"]}
            px={[4, 6]}
            py={1}
          >
            <MDXProvider components={components}>
              <TextContainer>{children}</TextContainer>
            </MDXProvider>
            <Box mt={[0, 3]}>
              <SSRLessShareButtons title={alternateTitle || title} />
            </Box>
          </Flex>
          <VideoColumn />
        </Flex>

        <TryTeleport />
      </Layout>
    </>
  );
};

const TextContainer = styled(Flex)(
  css({
    color: "darkest",
    flexDirection: "column",
    lineHeight: "28px",
    h2: {
      fontSize: "22px",
      mt: 3,
      "&:first-child": {
        mt: [2, 5],
      },
    },
    p: {
      mb: 3,
    },
  })
);
