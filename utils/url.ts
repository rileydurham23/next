import getConfig from "../server/config-site";

export const host = process.env.NEXT_PUBLIC_HOST;
interface URLParts {
  anchor?: string;
  path: string;
  query: Record<string, string>;
}

export const splitAsPath = (asPath: string): URLParts => {
  const [rest, anchor] = asPath.split("#");
  const [path, search] = rest.split("?");
  const query: Record<string, string> = !search
    ? {}
    : search.split("&").reduce((result, segment) => {
        const [key, value] = segment.split("=");

        result[key] = value;

        return result;
      }, {});

  return { anchor, path, query };
};

export const buildAsPath = (parts: URLParts): string => {
  let result = parts.path;

  const search = Object.entries(parts.query)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  if (search) {
    result = `${result}?${search}`;
  }

  if (parts.anchor) {
    result = `${result}#${parts.anchor}`;
  }

  return result;
};

export const isExternalLink = (href: string): boolean =>
  href.startsWith("//") || href.startsWith("mailto:") || href.includes("://");

export const isHash = (href: string): boolean => href.startsWith("#");

export const isMdxLink = (href: string): boolean => /\.md(x)?(#|$)/.test(href);

export const isExtensionLess = (href: string): boolean => {
  const parts = href.split("/");
  const lastPart = parts[parts.length - 1];

  return !lastPart.includes(".");
};

export const isPage = (href: string): boolean =>
  isMdxLink(href) || isExtensionLess(href);

export const getVersionAsPath = (href: string) => {
  const { latest } = getConfig();

  return href.replace(`/ver/${latest}`, "");
};

export const getDocPath = (asPath: string) => {
  const base = getVersionAsPath(splitAsPath(asPath).path);

  // In SSR mode next ignores trailingSlsh option in asPath
  return base.endsWith("/") ? base : `${base}/`;
};

export const buildCanonicalUrl = (asPath: string) => {
  const path = getVersionAsPath(asPath);

  return `${host}${path}`;
};

export const hasExt = () => /\..+$/;
export const urlPattern = () => /^(https?:)/;
export const emailPattern = () => /^(mailto:)/;
export const blackList = () => /\.(mdx?|css|tsx?|jsx?)$/;

export const isLocalAssetFile = (_href?: string) => {
  if (typeof _href !== "string") return false;
  const href = _href.split("#")[0].split("?")[0];
  let dots = href.split(".").length - 1;
  if (href[0] === ".") {
    dots--;
    if (href[1] === ".") {
      dots--;
    }
  }

  return (
    dots > 0 &&
    href[href.length - 1] !== "/" &&
    hasExt().test(href) &&
    !blackList().test(href) &&
    !urlPattern().test(href) &&
    !emailPattern().test(href)
  );
};
