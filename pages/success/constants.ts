import type { IconName } from "components/Icon";

interface TopLink {
  iconName: IconName;
  href: string;
  hrefName: string;
}

export const TopLinks: Array<TopLink> = [
  {
    iconName: "quickstart",
    href: "https://goteleport.com/docs/getting-started/",
    hrefName: "Quickstart Guide",
  },
  {
    iconName: "documents",
    href: "https://goteleport.com/docs/",
    hrefName: "Developer Docs",
  },
  {
    iconName: "shieldCheck",
    href: "https://goteleport.com/resources/",
    hrefName: "Security Best Practices",
  },
  {
    iconName: "github",
    href: "https://github.com/gravitational/teleport",
    hrefName: "Github Repo",
  },
];
