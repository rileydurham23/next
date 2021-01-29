export const isExternalLink = (href: string): boolean =>
  href.startsWith("//") || href.includes("://");

export const isHash = (href: string): boolean => href.startsWith("#");

export const getPath = (href: string) => href.split("#")[0];

export const getHash = (href: string) => href.split("#")[1];
