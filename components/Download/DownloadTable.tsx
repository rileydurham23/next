import { useEffect, useState } from "react";
import css from "@styled-system/css";
import styled from "styled-components";
import _ from "lodash";

import Flex from "components/Flex";
import Link from "components/Link";
import { getOsParameter, groupByOS, OsParameter } from "./helpers";
import type { MajorVersionCollection } from "./types";

interface DownloadTableProps {
  showNotes: boolean;
  data: MajorVersionCollection;
  initialOs: OsParameter;
}

export const DownloadTable = ({
  showNotes,
  data,
  initialOs,
}: DownloadTableProps) => {
  // lazy state initialization done so function is only called on first render to set the value of 'os'
  const [os, setOs] = useState<OsParameter>(initialOs);
  const [firstShowNotes, setFirstShowNotes] = useState(true);
  const [selectedVersionTag, setSelectedVersionTag] = useState(() => {
    const latestVersion = data.versions.find(
      (version) => version.prerelease === false
    );

    return latestVersion.version;
  });

  const selectedVersion = data.versions.find(
    (version) => version.version === selectedVersionTag
  );

  // const toggleReleaseNotes = (event) => {
  //   event.preventDefault();

  //   if (showNotes && firstShowNotes) {
  //     setTableShowNotes(false);
  //     setFirstShowNotes(false);
  //   } else if (showNotes) {
  //     setTableShowNotes(false);
  //     setFirstShowNotes(false);
  //   } else {
  //     setTableShowNotes(true);
  //     setFirstShowNotes(false);
  //   }
  // };

  // const shouldShowNotes = () => {
  //   if (showNotes && firstShowNotes) {
  //     setTableShowNotes(true);
  //   } else if (showNotes) {
  //     setTableShowNotes(true);
  //   }

  //   return showNotes;
  // };

  // const selectVersion = (event) => {
  //   const version = event.target.value;
  //   const release = _.find(data, { version: version });
  //   const downloads = groupByOS(release.downloads);

  //   setTableDownloads(downloads);
  // };

  // const selectOS = (os) => {
  //   setOs(os);
  // };

  // const renderHeader = () => {
  //   return (
  //     <th>
  //       <Flex justifyContent="space-between">
  //         <Flex layout="flex" align="center">
  //           {renderTitle()}
  //           {renderVersionSelector()}
  //           {renderNotesLabel()}
  //         </Flex>

  //         <Flex justifyContent="right">{renderOsMenu()}</Flex>
  //       </Flex>

  //       {renderNotes()}
  //     </th>
  //   );
  // };

  const renderTitle = () => {
    return "Teleport " + data.majorVersion;
  };

  const handleSelectChange = (event) => {
    setSelectedVersionTag(event.target.value);
  };

  return (
    <OuterContainer>
      <HeaderContainer>
        <h1>{renderTitle()}</h1>
        <select onChange={handleSelectChange} value={selectedVersion.version}>
          {data.versions.map((version) => (
            <option key={version.id} value={version.version}>
              {version.version}
            </option>
          ))}
        </select>
      </HeaderContainer>
      <table>
        <thead>
          <tr>
            <th>Operating system</th>
            <th>Checksum</th>
            <th>Size</th>
            <th>Download link</th>
          </tr>
        </thead>
        <tbody>
          {selectedVersion.downloads.map((download) => (
            <tr key={download.sha256}>
              <td>{download.name}</td>
              <td>{download.sha256}</td>
              <td>{download.displaySize}</td>
              <td>
                <Link href={download.url}>{download.name}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </OuterContainer>
  );
};

const HeaderContainer = styled(Flex)(css({}));

const OuterContainer = styled(Flex)(
  css({
    border: "1px solid blue",
    flexDirection: "column",
  })
);
