import { styled } from "@stitches/react";

import Download from "components/Download";
import { DownloadPageHeader } from "components/Download";
import { getOsParameter } from "components/Download/helpers";
import { NavBar } from "components/Download";

import type {
  Version,
  MajorVersionCollection,
  OS,
} from "components/Download/types";

interface DownloadPageProps {
  initialDownloads: Array<MajorVersionCollection>;
  os?: OS;
}

interface PaginatedResponse {
  next: number;
  prev: number;
  first: number;
  last: number;
}

interface VersionApiResponse extends PaginatedResponse {
  items: Version[];
}

const headerLinks = [
  {
    href: "https://goteleport.com/docs/getting-started/",
    name: "Teleport Quickstart Guide",
  },
  {
    href: "https://goteleport.com/installing",
    name: "Install from Source",
  },
  {
    href: "https://quay.io/repository/gravitational/teleport?tab=tags",
    name: "Install using Docker",
  },
];

const groupByMajorVersions = (
  versionApiResponse: VersionApiResponse
): Array<MajorVersionCollection> => {
  const versionsByMajorVersion: { [key: string]: MajorVersionCollection } = {};

  versionApiResponse.items.forEach((version) => {
    const majorVersion = version.version.slice(1, 4);

    if (versionsByMajorVersion[majorVersion]) {
      versionsByMajorVersion[majorVersion].versions.push(version);
    } else {
      versionsByMajorVersion[majorVersion] = {
        majorVersion,
        versions: [version],
      };
    }
  });

  // returns versions sorted by how recently they were released
  return Object.values(versionsByMajorVersion).sort(
    (a, b) => Number(b.majorVersion) - Number(a.majorVersion)
  );
};

// getServerSideProps avoids making a network request on each render. next invokes on server that must return promise
// with props you want to pass to the component. this is used in place of fetch
export const getServerSideProps = (context) => {
  // handle reading query parameter of url done on the server
  const os = getOsParameter(context.query.os);

  return fetch(
    "https://dashboard.gravitational.com/webapi/releases-oss?product=teleport&page=0"
  )
    .then((response) => response.json())
    .then((data) => ({
      // set the os based on the response. if no os stated, set it as 'linux'
      props: {
        os: os || "linux",
        initialDownloads: groupByMajorVersions(data),
      },
    }));
};

const DownloadPage: React.FC<DownloadPageProps> = ({ initialDownloads }) => {
  return (
    <>
      <NavBar />
      <DownloadPageHeader
        title="Download Teleport"
        subtitle="Community Edition"
        description="Teleport provides simple secure access to SSH servers, Kubernetes clusters, PostgreSQL databases and web apps behind NAT, in any environment. It's a certificate authority with an integrated identity-aware proxy."
      >
        <InstallColumnContainer>
          Additional ways to install Teleport
          {headerLinks.map((link) => (
            <StyledUl key={link.href}>
              <li>
                <StyledLink href={link.href}>{link.name}</StyledLink>
              </li>
            </StyledUl>
          ))}
        </InstallColumnContainer>
      </DownloadPageHeader>
      <ContentContainer>
        <Download initialDownloads={initialDownloads} />
      </ContentContainer>
    </>
  );
};

export default DownloadPage;

const StyledUl = styled("ul", {
  margin: "8px 0 8px 18px",
  padding: 0,
});

const StyledLink = styled("a", {
  color: "$light-purple",
  margin: 0,
  padding: 0,
});

const ContentContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  // padding: 0,
  // margin: 0,
});

const InstallColumnContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
});
