import NextLink from "next/link";
import { AnchorHTMLAttributes } from "react";

const isExternalLink = (href: string) =>
  href.startsWith("//") || href.includes("://");

export interface LinkProps
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
  if (!isExternalLink(href)) {
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
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...linkProps}>
      {children}
    </a>
  );
};

export default Link;
