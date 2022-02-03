import { useEffect, useState } from "react";

import { styled } from "@stitches/react";

import Link from "components/Link";
import { getOsParameter, groupByOS, OsParameter } from "./helpers";
import type { MajorVersionCollection } from "./types";
import DownloadToggleMenu from "./DownloadToggleMenu";

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

  console.log(data.versions);

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
            <BodyRow key={download.sha256}>
              <StyledTd>{download.name}</StyledTd>
              <StyledTd>
                <Link href={download.sha256}>SHA256</Link>
              </StyledTd>
              <StyledTd>{download.displaySize}</StyledTd>
              <StyledTd>
                <Link href={download.url}>{download.name}</Link>
              </StyledTd>
            </BodyRow>
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

const StyledTd = styled("td", {
  padding: "5px 30px",
});

const StyledTable = styled("table", {
  borderSpacing: "10px 5px",
  borderCollapse: "separate",
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
});

const OuterContainer = styled("div", {
  border: "1px solid blue",
  flexDirection: "column",
  padding: "10px",
  marginBottom: "20px",
  // width: "100%",
});

const TableHeader = styled("tr", {
  textTransform: "uppercase",
});

const BodyRow = styled("tr", {
  border: "1px solid green",
});
