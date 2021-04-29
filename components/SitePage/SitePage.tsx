import { MDXProvider } from "@mdx-js/react";
import { Layout, Footer, Head } from "components";
import { components } from "components/MDX";
import wavePngUrl from "sharedAssets/images/wave-light.png";

interface Props {
  meta: {
    title?: string;
    description?: string;
  };
  children: React.ReactNode;
}

export default function SitePage({ meta, children }: Props) {
  return (
    <>
      <Head title={meta.title} description={meta.description} />
      <Layout background={`url(${wavePngUrl}) 0 0 no-repeat`}>
        <MDXProvider components={components}>{children}</MDXProvider>
      </Layout>
      <Footer />
    </>
  );
}
