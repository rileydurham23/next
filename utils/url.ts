export const isExternalLink = (href: string): boolean =>
  href.startsWith("//") || href.startsWith("mailto:") || href.includes("://");

export const isHash = (href: string): boolean => href.startsWith("#");

export const getPath = (href: string) => {
  const base = href.split("#")[0];

  // In SSR mode next ignores trailingSlsh option in asPath
  return base.endsWith("/") ? base : `${base}/`;
};

export const getHash = (href: string) => href.split("#")[1];
