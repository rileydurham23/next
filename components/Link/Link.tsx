// eslint-disable-next-line node/no-deprecated-api
import { resolve } from "url";
import styled from "styled-components";
import { ComponentProps } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { useRouter } from "next/router";
import { isHash, isExternalLink, getPath } from "utils/url";
import { all, StyledSystemProps } from "components/system";

const BaseLink = styled("a")<StyledSystemProps>(
  {
    boxSizing: "border-box",
    minWidth: 0,
  },
  all
);

type LinkProps = {
  passthrough?: boolean;
} & Omit<NextLinkProps, "href"> &
  ComponentProps<typeof BaseLink>;

const Link = ({
  children,
  href,
  as,
  replace,
  scroll,
  shallow,
  passthrough,
  prefetch,
  locale,
  ...linkProps
}: LinkProps) => {
  const router = useRouter();

  if (
    /\/assets\//.test(href) ||
    passthrough ||
    (typeof href === "string" && isHash(href))
  ) {
    return (
      <BaseLink href={href} {...linkProps}>
        {children}
      </BaseLink>
    );
  } else if (typeof href === "string" && isExternalLink(href)) {
    return (
      <BaseLink
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...linkProps}
      >
        {children}
      </BaseLink>
    );
  }

  const nextProps: NextLinkProps = {
    href: resolve(getPath(router.asPath), href),
    as,
    replace,
    scroll,
    shallow,
    prefetch,
    locale,
  };

  return (
    <NextLink {...nextProps} passHref={true}>
      <BaseLink {...linkProps}>{children}</BaseLink>
    </NextLink>
  );
};

export default Link;
