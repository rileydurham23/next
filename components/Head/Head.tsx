import NextHead from "next/head";
import { useRouter } from "next/router";

import { buildCanonicalUrl, host } from "utils/url";

const formatTitle = (suffix: string, title?: string) => {
  const base = title ? `${title} | ` : "";

  return base + suffix;
};
interface HeadProps {
  title: string;
  image?: string;
  description?: string;
  titleSuffix?: string;
}

const Head = ({
  image,
  description: propsDescription,
  title: propsTitle,
  titleSuffix,
}: HeadProps) => {
  const router = useRouter();
  const url = buildCanonicalUrl(router);
  const title = formatTitle(titleSuffix, propsTitle);
  const description = propsDescription || "";

  return (
    <NextHead>
      <title>{title}</title>
      <link rel="icon" href="/static/favicon.ico" />
      <link rel="icon" href="/static/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/static/apple.png" />
      <link rel="manifest" href="/static/manifest.webmanifest" />
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta name="author" content="Teleport" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${host}/static/${image}`} />
    </NextHead>
  );
};

Head.defaultProps = {
  image: "og-image.png",
  titleSuffix: "Teleport",
  description:
    "Teleport is available for free as an open source download. We also offer commercial subscription plans priced on the number of computing resources accessible via Teleport.",
};

export default Head;
