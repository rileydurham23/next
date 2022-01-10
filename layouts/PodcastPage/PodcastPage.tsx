import { useRef, useEffect } from "react";
import { MDXProvider } from "@mdx-js/react";
import dynamic from "next/dynamic";
import Centrator from "components/Centrator";
import Layout from "components/Layout";
import Drift from "components/Drift";
import Section from "components/Section";
import Head from "components/Head";
import Footer from "components/Footer";
import TryTeleport from "components/TryTeleport";
import { components as baseComponents } from "layouts/SitePage";

const SSRLessShareButtons = dynamic(() => import("components/ShareButtons"), {
  ssr: false,
});

const components = {
  ...baseComponents,
};

interface PodcastPageProps {
  meta: {
    title: string;
    description: string;
    podcastName: string;
    noindex?: boolean;
    publicationDate: string;
  };
  children: React.ReactNode;
}

export const PodcastPage = ({
  children,
  meta: { title, description, noindex, podcastName },
}: PodcastPageProps) => {
  const podcast = useRef<HTMLDivElement>();
  useEffect(() => {
    if (podcast.current) {
      const node = document.createElement("script");
      node.className = "podigee-podcast-player";
      node.src =
        "https://player.podigee-cdn.net/podcast-player/javascripts/podigee-podcast-player.js";
      node.setAttribute(
        "data-configuration",
        `https://access-control.podigee.io/${podcastName}/embed?context=external`
      );
      podcast.current.innerHTML = "";
      podcast.current.appendChild(node);
    }
  }, [podcastName]);
  return (
    <>
      <Head title={title} description={description} noIndex={noindex} />
      <Layout
        border="none"
        behaviour="floating"
        lineHeight="lg"
        hideWave="true"
        pt={[6, 11]}
      >
        <Section bg="grayWave" py={[6, 11]}>
          <Centrator flexDirection="column">
            <div ref={podcast} />
          </Centrator>
        </Section>
        <Centrator flexDirection="column" mt={[3, 9]} mb={[6, 11]}>
          <MDXProvider components={components}>{children}</MDXProvider>
          <SSRLessShareButtons title={title} />
        </Centrator>
        <TryTeleport />
      </Layout>
      <Footer />
      <Drift />
    </>
  );
};
