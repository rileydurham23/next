import styled from "styled-components";
import { css } from "components/system";

import type { IconName } from "components/Icon";
import Icon from "components/Icon";
import Link from "components/Link";
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

interface LIProps {
  href: string;
  hrefName: string;
  iconName?: IconName;
}

const LI = ({ href, hrefName, iconName = null }: LIProps) => {
  return (
    <>
      <StyledLi>
        <StyledIcon name={iconName} mr={iconName ? 3 : -4} />
        <Link color="darkest" href={href}>
          {hrefName}
        </Link>
      </StyledLi>
    </>
  );
};

const StyledLi = styled("li")(
  css({
    display: "flex",
    lineHeight: "md",
    pt: [2, 4],
    "&:nth-child(1)": {
      pt: [2, 3],
    },
  })
);

const StyledIcon = styled(Icon)(
  css({
    color: "dark-purple",
  })
);

export default LI;
