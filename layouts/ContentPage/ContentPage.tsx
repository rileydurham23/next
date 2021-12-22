import { Fragment, useMemo } from "react";
import { MDXProvider } from "@mdx-js/react";
import Centrator from "components/Centrator";
import Drift from "components/Drift";
import SectionHeader, { BGColor } from "components/SectionHeader";
import Section from "components/Section";
import Head from "components/Head";
import Layout from "components/Layout";
import Footer from "components/Footer";
import NextImage, { ImageProps } from "next/image";
import TryTeleport from "components/TryTeleport";
import accessPlaneImg from "./assets/access-plane-all.png";
import Quote from "components/Quote";
import { Figure } from "components/MDX/Image";
import { components as baseComponents } from "layouts/SitePage";

const ACCESS_LINK = {
  href: "/",
  text: "Learn more",
  variant: "secondary",
  shape: "outline",
} as const;

const baseWrapperOptions = {
  bg: "wavelight" as const,
  color: "darkest",
  backgroundPosition: "top left",
  backgroundSize: "auto",
};

const components = {
  ...baseComponents,
  Quote: function LocalQuote(props) {
    return <Quote mt="6" {...props} />;
  },
  Figure: function LocalFigure(props) {
    return <Figure xMargin="0" {...props} />;
  },
};

interface ContentPageProps {
  meta: {
    title?: string;
    subtitle?: string;
    description?: string;
    noindex?: boolean;
    h1?: string;
    articleDescription?: boolean;
    logo?: {
      image: Exclude<ImageProps["src"], string>;
      alt: string;
    };
    bgWave?: BGColor;
    tryTeleport?: boolean;
    accessPlane?: boolean;
    needWrapper?: boolean;
    topMargin?: number;
    headerColor?: string;
  };
  children: React.ReactNode;
}

export const ContentPage = ({
  children,
  meta: {
    title,
    subtitle = "Teleport Access Plane",
    description,
    noindex,
    h1,
    articleDescription = true,
    logo,
    needWrapper,
    bgWave,
    tryTeleport,
    accessPlane,
    topMargin = 11,
    headerColor,
  },
}: ContentPageProps) => {
  const bg = bgWave ? { bg: bgWave } : {};
  const Wrapper = needWrapper ? Section : Fragment;
  const wrapperOptions = useMemo(
    () => (needWrapper ? baseWrapperOptions : {}),
    [needWrapper]
  );

  return (
    <>
      <Head title={title} description={description} noIndex={noindex} />
      <Layout border="none" behaviour="floating" headerColor={headerColor}>
        <SectionHeader
          subtitle={subtitle}
          title={h1 ? h1 : title}
          description={articleDescription ? description : undefined}
          {...bg}
        >
          {logo && <NextImage src={logo.image} alt={logo.alt} />}
        </SectionHeader>
        <Wrapper {...wrapperOptions}>
          <Centrator
            flexDirection="column"
            my={[3, topMargin]}
            color="text"
            lineHeight="26px"
          >
            <MDXProvider components={components}>{children}</MDXProvider>
          </Centrator>
        </Wrapper>
        <Drift />
        {accessPlane && (
          <SectionHeader
            mode="full"
            subtitle="Teleport is part of the"
            title="Access Plane"
            description="Teleport provides an Access Plane that consolidates access controls and auditing across all environments - infrastructure, applications and data."
            bg="wave"
            link={ACCESS_LINK}
          >
            <NextImage
              src={accessPlaneImg}
              width={588}
              height={356}
              layout="intrinsic"
              alt="Teleport Access Plane"
            />
          </SectionHeader>
        )}
        {tryTeleport && <TryTeleport />}
      </Layout>
      <Footer />
    </>
  );
};
