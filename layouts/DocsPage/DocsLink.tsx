import { resolve } from "url";
import { useRouter } from "next/router";
import { useContext } from "react";
import BaseLink, { LinkProps } from "components/Link";
import { getDocPath } from "utils/url";
import { DocsContext, updateScopeInUrl } from "./context";

interface ObjectHref {
  src: string;
}

type DocsLinkProps = Omit<LinkProps, "href"> & {
  href: string | ObjectHref;
};

export const DocsLink = ({ href: rawHref, ...props }: DocsLinkProps) => {
  const router = useRouter();
  const baseHref = typeof rawHref === "object" ? rawHref.src : rawHref;
  let href = resolve(getDocPath(router.asPath), baseHref);
  const { scope } = useContext(DocsContext);

  if (href.startsWith("/docs/")) {
    href = updateScopeInUrl(href, scope);
  }

  return <BaseLink {...props} href={href} />;
};
