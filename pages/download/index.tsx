import Download from "components/Download";

import SectionHeader from "components/SectionHeader";

import DownloadPageHeader from "components/Download";

import { styled } from "@stitches/react";

import { getOsParameter } from "components/Download/helpers";
import type {
  Version,
  MajorVersionCollection,
  OS,
} from "components/Download/types";

interface PaginatedResponse {
  next: number;
  prev: number;
  first: number;
  last: number;
}

interface VersionApiResponse extends PaginatedResponse {
  items: Version[];
}

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

  return Object.values(versionsByMajorVersion).sort(
    (a, b) => Number(b.majorVersion) - Number(a.majorVersion)
  );
};

// avoid making network request. next invokes on server that must return promise
// with props you want to pass to the component. used in place of fetch
export const getServerSideProps = (context) => {
  // handle reading query parameter of url done on the server
  const os = getOsParameter(context.query.os);

  return fetch(
    "https://dashboard.gravitational.com/webapi/releases-oss?product=teleport&page=0"
  )
    .then((response) => response.json())
    .then((data) => ({
      props: {
        os: os || "linux",
        initialDownloads: groupByMajorVersions(data),
      },
    }));
};

interface DownloadPageProps {
  initialDownloads: Array<MajorVersionCollection>;
  os?: OS;
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

const DownloadPage: React.FC<DownloadPageProps> = ({ initialDownloads }) => {
  return (
    <>
      <SectionHeader
        title="Download Teleport"
        subtitle="Community Edition"
        description="Teleport provides simple secure access to SSH servers, Kubernetes clusters, PostgreSQL databases and web apps behind NAT, in any environment. It's a certificate authority with an integrated identity-aware proxy."
        descriptionTextWidth="1000px"
        bg="wave-on-gray"
      >
        <InstallColumnContainer>
          Additional ways to install Teleport
          {headerLinks.map((link) => (
            <ul key={link.href}>
              <li>
                <a href={link.href}>{link.name}</a>
              </li>
            </ul>
          ))}
        </InstallColumnContainer>
      </SectionHeader>
      <ContentContainer>
        <Download initialDownloads={initialDownloads} />
      </ContentContainer>
    </>
  );
};

export default DownloadPage;

const InstallColumnContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
});

const ContentContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  padding: 0,
  margin: 0,
});
