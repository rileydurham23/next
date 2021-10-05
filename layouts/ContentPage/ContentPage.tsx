import Drift from "react-driftjs";
import SectionHeader from "components/SectionHeader";
import Head from "components/Head";
import Layout, { Centrator } from "components/Layout";
import Footer from "components/Footer";
import MDX from "components/MDX";
import BaseCode from "components/Code";
import Box, { BoxProps } from "components/Box";
import BaseLink, { LinkProps } from "components/Link";

const components = {
  pre: function Pre(props) {
    return <pre {...props} />;
  },
  code: function Code(props) {
    return <BaseCode {...props} />;
  },
  h1: function H1(props: BoxProps) {
    return (
      <Box
        as="h1"
        mt={2}
        mb={5}
        fontSize="header-2"
        fontWeight="black"
        lineHeight="xl"
        color="black"
        {...props}
      />
    );
  },
  h2: function H2(props: BoxProps) {
    return (
      <Box
        as="h2"
        mt={5}
        mb={2}
        fontSize="header-3"
        fontWeight="regular"
        lineHeight="lg"
        color="dark-purple"
        {...props}
      />
    );
  },
  h3: function H3(props: BoxProps) {
    return (
      <Box
        as="h3"
        mt={2}
        mb={2}
        fontSize="text-lg"
        fontWeight="bold"
        lineHeight="lg"
        color="black"
        {...props}
      />
    );
  },
  a: function Link(props: LinkProps) {
    return <BaseLink {...props} scheme="site" />;
  },
};

interface ContentPageProps {
  meta: {
    title?: string;
    subtitle?: string;
    description?: string;
    noindex?: boolean;
  };
  children: React.ReactNode;
}

export const ContentPage = ({
  children,
  meta: { title, subtitle = "Teleport Access Plane", description, noindex },
}: ContentPageProps) => {
  return (
    <>
      <Head title={title} description={description} noIndex={noindex} />
      <Layout border="none" behaviour="floating">
        <SectionHeader
          subtitle={subtitle}
          title={title}
          description={description}
        />
        <Centrator flexDirection="column" my={[3, 11]}>
          <MDX components={components}>{children}</MDX>
        </Centrator>
        <Drift appId={process.env.NEXT_PUBLIC_DRIFT_ID} />
      </Layout>
      <Footer />
    </>
  );
};
