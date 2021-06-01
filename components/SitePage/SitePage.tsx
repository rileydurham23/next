import { MDXProvider } from "@mdx-js/react";
import Layout from "components/Layout";
import Footer from "components/Footer";
import Head from "components/Head";
import { HeaderMode } from "components/Header";
import { components } from "components/MDX";
import wavePngUrl from "sharedAssets/images/wave-light.png";

interface Props {
  meta: {
    title?: string;
    description?: string;
    hideWave?: boolean;
    shortFooter?: boolean;
    layout?: HeaderMode;
  };
  children: React.ReactNode;
}

const background = `url(${wavePngUrl}) 0 0 no-repeat`;

export default function SitePage({ meta, children }: Props) {
  const { layout = "full" } = meta;

  return (
    <>
      <Head title={meta.title} description={meta.description} />
      <Layout mode={layout} background={meta.hideWave ? "none" : background}>
        <MDXProvider components={components}>{children}</MDXProvider>
      </Layout>
      <Footer short={Boolean(meta.shortFooter)} />
    </>
  );
}
