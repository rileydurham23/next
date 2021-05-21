import { MDXProvider } from "@mdx-js/react";
import { Layout, Footer, Head } from "components";
import { components } from "components/MDX";
import wavePngUrl from "sharedAssets/images/wave-light.png";

interface Props {
  meta: {
    title?: string;
    description?: string;
    hideWave?: boolean;
    shortFooter?: boolean;
  };
  children: React.ReactNode;
}

const background = `url(${wavePngUrl}) 0 0 no-repeat`;

export default function SitePage({ meta, children }: Props) {
  return (
    <>
      <Head title={meta.title} description={meta.description} />
      <Layout background={meta.hideWave ? "none" : background}>
        <MDXProvider components={components}>{children}</MDXProvider>
      </Layout>
      <Footer short={Boolean(meta.shortFooter)} />
    </>
  );
}
