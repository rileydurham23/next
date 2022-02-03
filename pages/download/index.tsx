import Download from "components/Download";
import Flex from "components/Flex";
import Link from "components/Link";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import _ from "lodash";

import { getOsParameter } from "components/Download/helpers";
import type {
  Version,
  MajorVersionCollection,
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
        os: null,
        initialDownloads: groupByMajorVersions(data),
      },
    }));
};

interface DownloadPageProps {
  initialDownloads: Array<MajorVersionCollection>;
  os?: "linux" | "mac" | "windows";
}

const DownloadPage: React.FC<DownloadPageProps> = ({
  os = "linux",
  initialDownloads,
}) => {
  console.log("??????", os);
  // return (
  //   <div style={{ height: "100vh", width: "100vw" }}>
  //     <iframe
  //       src="http://goteleport.com/teleport/download"
  //       width="100%"
  //       height="100%"
  //     />
  //   </div>
  // );

  return (
    <>
      <SectionHeader
        title="Download Teleport"
        subtitle="Community Edition"
        description="Teleport provides simple secure access to SSH servers, Kubernetes clusters, PostgreSQL databases and web apps behind NAT, in any environment. It's a certificate authority with an integrated identity-aware proxy."
        descriptionTextWidth="1000px"
        bg="wave-on-gray"
      >
        <Flex flexDirection="column">
          Additional ways to install Teleport
          <ul>
            <li>
              <Link href="https://goteleport.com/docs/getting-started/">
                Teleport Quickstart Guide
              </Link>
            </li>
            <li>
              <Link href="https://goteleport.com/installing/">
                Install from Source
              </Link>
            </li>
            <li>
              <Link href="https://quay.io/repository/gravitational/teleport?tab=tags">
                Install using Docker
              </Link>
            </li>
          </ul>
        </Flex>
      </SectionHeader>
      <Section bg="flatWhite" display="flex" justifyContent="center">
        <Download initialDownloads={initialDownloads} initialOs={os} />
      </Section>
    </>
  );
};

export default DownloadPage;
