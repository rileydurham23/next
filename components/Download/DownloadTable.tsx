import { useEffect, useState } from "react";

import { styled } from "@stitches/react";

import Link from "components/Link";
import { getOsParameter, groupByOS, OsParameter } from "./helpers";
import type { MajorVersionCollection } from "./types";
import DownloadToggleMenu from "./DownloadToggleMenu";
import DownloadRow from "./DownloadRow";

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
  const [os, setOs] = useState<OsParameter>("linux");
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

  const handleChange = (os) => {
    console.log("%%%%%");
    setOs(os);
  };

  const renderOsMenu = () => {
    const buttons = [
      { value: "linux", name: "Linux", icon: "linux" },
      { value: "mac", name: "MacOS", icon: "apple" },
      { value: "windows", name: "Windows", icon: "windows" },
    ];

    return (
      <DownloadToggleMenu
        selectedDefault={os}
        buttons={buttons}
        onChange={handleChange}
      />
    );
  };

  const renderTitle = () => {
    return "Teleport " + data.majorVersion;
  };

  const handleSelectChange = (event) => {
    setSelectedVersionTag(event.target.value);
  };

  console.log(data);

  return (
    <OuterContainer>
      <HeaderContainer>
        <Left>
          <HeaderH1>{renderTitle()}</HeaderH1>
          <p>Release:</p>
          <StyledSelect
            onChange={handleSelectChange}
            value={selectedVersion.version}
          >
            {data.versions.map((version) => (
              <option key={version.id} value={version.version}>
                {version.version}
              </option>
            ))}
          </StyledSelect>
        </Left>
        <Right>{renderOsMenu()}</Right>
      </HeaderContainer>
      <StyledTable>
        <thead>
          <TableHeader>
            <th>Operating system</th>
            <th>Checksum</th>
            <th>Size</th>
            <th>Download link</th>
          </TableHeader>
        </thead>
        <tbody style={{ width: "90%" }}>
          {selectedVersion.downloads.map((download) => (
            <DownloadRow
              key={download.sha256}
              name={download.name}
              url={download.url}
              displaySize={download.displaySize}
              sha256={download.sha256}
            />
          ))}
        </tbody>
      </StyledTable>
    </OuterContainer>
  );
};

const Left = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});
const Right = styled("div", {
  display: "flex",
  flexDirection: "row",
});

const StyledTable = styled("table", {
  // borderSpacing: "10px 5px",
  borderCollapse: "collapse",
  margin: 0,
  width: "100%",
});

const StyledSelect = styled("select", {
  width: "60%",
  // height: "70%",
});

const HeaderH1 = styled("h1", {
  marginRight: "20px",
  width: "400px",
});

const HeaderContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "5px 30px",
});

const OuterContainer = styled("div", {
  border: "1px solid blue",
  flexDirection: "column",
  marginBottom: "20px",
});

const TableHeader = styled("tr", {
  textTransform: "uppercase",
});
