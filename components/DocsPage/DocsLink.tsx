import { resolve } from "url";
import { useRouter } from "next/router";
import { useContext } from "react";
import BaseLink, { LinkProps } from "components/Link";
import { getDocPath } from "utils/url";
import { DocsContext, updateScopeInUrl } from "./context";

export const DocsLink = ({ href: baseHref, ...props }: LinkProps) => {
  const router = useRouter();
  let href = resolve(getDocPath(router.asPath), baseHref);
  const { scope } = useContext(DocsContext);

  if (href.startsWith("/docs/")) {
    href = updateScopeInUrl(href, scope);
  }

  return <BaseLink {...props} href={href} scheme="docs" />;
};
