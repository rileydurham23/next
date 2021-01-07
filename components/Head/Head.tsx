import NextHead from "next/head";
import { useRouter } from "next/router";

interface HeadProps {
  title: string;
  description?: string;
}

const Head = (meta: HeadProps) => {
  const router = useRouter();

  const host = process.env.NEXT_PUBLIC_HOST;
  const url = `${host}${router.asPath}`;
  const title = meta.title || "Teleport Documentation";
  const description = meta.description || "";

  return (
    <NextHead>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple.png" />
      <link rel="manifest" href="/manifest.webmanifest" />
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
