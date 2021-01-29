import NextHead from "next/head";
import { useRouter } from "next/router";

const defaultTitle = "Teleport Docs";

const formatTitle = (title?: string) => {
  const base = title ? `${title} | ` : "";

  return base + defaultTitle;
};

interface HeadProps {
  title: string;
  description?: string;
}

const Head = (meta: HeadProps) => {
  const router = useRouter();

  const host = process.env.NEXT_PUBLIC_HOST;
  const url = `${host}${router.basePath}${router.asPath}`;
  const title = formatTitle(meta.title);
  const description = meta.description || "";

  return (
    <NextHead>
      <title>{title}</title>
      <link
        rel="icon"
        href={`${process.env.NEXT_PUBLIC_ROOT_DIR}/favicon.ico`}
      />
      <link
        rel="icon"
        href={`${process.env.NEXT_PUBLIC_ROOT_DIR}/favicon.svg`}
        type="image/svg+xml"
      />
      <link
        rel="apple-touch-icon"
        href={`${process.env.NEXT_PUBLIC_ROOT_DIR}/apple.png`}
      />
      <link
        rel="manifest"
        href={`${process.env.NEXT_PUBLIC_ROOT_DIR}/manifest.webmanifest`}
      />
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta name="author" content="Teleport" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${host}/og-image.png`} />
    </NextHead>
  );
};

export default Head;
