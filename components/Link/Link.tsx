import cn from "classnames";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { isHash, isExternalLink, isLocalAssetFile } from "utils/url";
import { useNormalizedHref } from "./hooks";
import styles from "./Link.module.css";

export interface LinkProps extends Omit<NextLinkProps, "href"> {
  passthrough?: boolean;
  scheme?: string;
  className?: string;
  href: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Link = ({
  children,
  href,
  className,
  as,
  replace,
  scroll,
  shallow,
  passthrough,
  prefetch,
  locale,
  scheme,
  ...linkProps
}: LinkProps) => {
  const normalizedHref = useNormalizedHref(href);

  if (
    passthrough ||
    isHash(normalizedHref) ||
    isLocalAssetFile(normalizedHref)
  ) {
    return (
      <a
        href={normalizedHref}
        {...linkProps}
        className={cn(styles.wrapper, styles[scheme], className)}
      >
        {children}
      </a>
    );
  } else if (isExternalLink(normalizedHref)) {
    return (
      <a
        href={normalizedHref}
        target="_blank"
        rel="noopener noreferrer"
        {...linkProps}
        className={cn(styles.wrapper, styles[scheme], className)}
      >
        {children}
      </a>
    );
  }

  const nextProps: NextLinkProps = {
    href: normalizedHref,
    as,
    replace,
    scroll,
    shallow,
    prefetch,
    locale,
  };

  return (
    <NextLink {...nextProps} prefetch={false}>
      <a
        {...linkProps}
        className={cn(styles.wrapper, styles[scheme], className)}
      >
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
