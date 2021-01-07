import NextLink from "next/link";
import { AnchorHTMLAttributes } from "react";

const isExternalLink = (href?: string): boolean =>
  typeof href === "string" && (href.startsWith("//") || href.includes("://"));

const isHash = (href?: string): boolean =>
  typeof href === "string" && href.startsWith("#");

interface LinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  passHref?: boolean;
}

const Link = ({
  children,
  href,
  replace,
  scroll,
  shallow,
  passHref,
  ...linkProps
}: LinkProps) => {
  if (isExternalLink(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...linkProps}>
        {children}
      </a>
    );
  } else if (isHash(href)) {
    return (
      <a href={href} {...linkProps}>
        {children}
      </a>
    );
  }

  const nextProps = {
    replace,
    scroll,
    shallow,
    passHref,
    href,
  };

  return (
    <NextLink {...nextProps}>
      <a {...linkProps}>{children}</a>
    </NextLink>
  );
};

export default Link;
