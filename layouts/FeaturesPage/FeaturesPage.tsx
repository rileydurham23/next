import { MDXProvider } from "@mdx-js/react";
import Drift from "react-driftjs";
import SectionHeader from "components/SectionHeader";
import Section from "components/Section";
import Head from "components/Head";
import Layout from "components/Layout";
import Feedback from "components/Feedback";
import { CompanyId } from "components/Company";
import SectionVideo from "components/SectionVideo";
import Image from "components/Image";
import Footer from "components/Footer";
import NextImage, { ImageProps } from "next/image";
import TryTeleport from "components/TryTeleport";
import { components as baseComponents } from "layouts/SitePage";

const components = {
  ...baseComponents,
  img: function LocalImage(props) {
    return <Image xMargin="0" yMargin="0" alt="" {...props} />;
  },
};

interface FeaturesPageProps {
  meta: {
    title: string;
    subtitle: string;
    description: string;
    $images: { logo: Exclude<ImageProps["src"], string> };
    altImage: string;
    noindex?: boolean;
    h1?: string;
    reviews?: CompanyId[];
    titleVideo?: string;
    videoId?: string;
    videoDescription?: string;
  };
  children: React.ReactNode;
}

export const FeaturesPage = ({
  children,
  meta: {
    title,
    subtitle = "Access Plane",
    description,
    noindex,
    h1,
    $images,
    altImage,
    reviews,
    titleVideo,
    videoId,
    videoDescription,
  },
}: FeaturesPageProps) => {
  return (
    <>
      <Head title={title} description={description} noIndex={noindex} />
      <Layout border="none" behaviour="floating">
        <SectionHeader
          subtitle={subtitle}
          title={h1 ? h1 : title}
          description={description}
        >
          <NextImage src={$images.logo} alt={altImage} />
        </SectionHeader>
        <Section bg="waveWhiteTop">
          <MDXProvider components={components}>{children}</MDXProvider>
        </Section>
      </Layout>
      {reviews && (
        <Section bg="purple">
          <Feedback reviews={reviews} dark />
        </Section>
      )}
      {videoId && (
        <Section bg="wavelight">
          <SectionVideo title={titleVideo} videoId={videoId}>
            {videoDescription}
          </SectionVideo>
        </Section>
      )}
      <TryTeleport />
      <Footer />
      <Drift appId={process.env.NEXT_PUBLIC_DRIFT_ID} />
    </>
  );
};
