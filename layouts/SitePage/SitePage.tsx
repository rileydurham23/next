import { MDXProvider } from "@mdx-js/react";
// Drift is the chatbot - should be avaialble on all pages
import Drift from "react-driftjs";
import Layout from "components/Layout";
import Footer from "components/Footer";
import Head from "components/Head";
import Box from "components/Box";
import { HeaderMode, HeaderBehaviour } from "components/Header";
import { components } from "./components";
import wavePngUrl from "sharedAssets/images/wave-light.png";

interface Props {
  meta: {
    title?: string;
    description?: string;
    hideWave?: boolean;
    shortFooter?: boolean;
    headerMode?: HeaderMode;
    headerBehaviour?: HeaderBehaviour;
    headerColor?: string;
    border?: string;
    shadow?: boolean;
  };
  children: React.ReactNode;
}

const background = `url(${wavePngUrl}) 0 0 no-repeat`;

export default function SitePage({ meta, children }: Props) {
  const { headerMode = "full" } = meta;

  return (
    <>
      <Head title={meta.title} description={meta.description} />
      <Layout
        mode={headerMode}
        background={meta.hideWave ? "none" : background}
        behaviour={meta.headerBehaviour}
        headerColor={meta.headerColor}
        border={meta.border}
        shadow={meta.shadow}
      >
        <Box color="text" lineHeight="26px">
          <MDXProvider components={components}>{children}</MDXProvider>
        </Box>
      </Layout>
      <Footer short={Boolean(meta.shortFooter)} />
      <Drift appId={process.env.NEXT_PUBLIC_DRIFT_ID} />
    </>
  );
}
