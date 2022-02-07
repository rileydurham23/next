import { useState } from "react";

import { styled } from "@stitches/react";
import ReactMarkdown from "react-markdown";

import DownloadToggleMenu from "./DownloadToggleMenu";
import DownloadRow from "./DownloadRow";
import type { OS } from "./types";
import type { MajorVersionCollection } from "./types";

import { getDownloadInfo } from "./helpers";

interface DownloadTableProps {
  showAllNotes: boolean;
  data: MajorVersionCollection;
}

export const DownloadTable = ({ showAllNotes, data }: DownloadTableProps) => {
  // lazy state initialization done so function is only called on first render to set the value of 'os'
  const [os, setOs] = useState<OS>("linux");
  const [selectedVersionTag, setSelectedVersionTag] = useState(() => {
    const latestVersion = data.versions.find(
      (version) => version.prerelease === false
    );

    return latestVersion.version;
  });
  const [showIndividualNote, setShowIndividualNote] = useState(false);

  console.log("show individual", showIndividualNote);

  const selectedVersion = data.versions.find(
    (version) => version.version === selectedVersionTag
  );

  const handleChange = (os: OS) => {
    setOs(os);
  };

  const renderOsMenu = () => {
    return <DownloadToggleMenu selectedDefault={os} onChange={handleChange} />;
  };

  const renderTitle = () => {
    return "Teleport " + data.majorVersion;
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVersionTag(event.target.value);
  };

  const label = showIndividualNote
    ? "Hide Release Notes"
    : "Show Release Notes";

  const renderNotes = () => {
    if (showAllNotes || showIndividualNote) {
      return (
        <>
          {data.versions
            .filter((version) => {
              const versionId = version.version;
              return versionId === selectedVersion.version;
            })
            .map((version) => (
              <StyledMarkdown key={version.version}>
                {version.descriptionMarkdown}
              </StyledMarkdown>
            ))}
        </>
      );
    }
  };

  const renderHeaders = () => {
    return (
      <HeaderContainer>
        <Left>
          <HeaderH1>{renderTitle()}</HeaderH1>
          <ReleaseDropdownContainer>
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
          </ReleaseDropdownContainer>
          <ReleaseATag
            onClick={() => setShowIndividualNote(!showIndividualNote)}
          >
            {label}
          </ReleaseATag>
        </Left>
        <Right>{renderOsMenu()}</Right>
      </HeaderContainer>
    );
  };

  return (
    <OuterContainer>
      <TopHalf>
        {renderHeaders()}
        {renderNotes()}
      </TopHalf>
      <StyledTable>
        <thead>
          <TableHeader>
            <StyledTh>Operating system</StyledTh>
            <StyledTh>Checksum</StyledTh>
            <StyledSizeTh>Size</StyledSizeTh>
            <StyledTh>Download link</StyledTh>
          </TableHeader>
        </thead>
        <tbody style={{ width: "90%" }}>
          {selectedVersion.downloads
            .filter((download) => {
              const downloadInformation = getDownloadInfo(download.name);
              return downloadInformation.os === os;
            })
            .map((download) => (
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

const StyledSizeTh = styled("th", {
  textAlign: "left",
  paddingLeft: "0px",
});

const StyledTh = styled("th", {
  textAlign: "left",
  paddingLeft: "30px",
});

const TopHalf = styled("div", {});

const StyledMarkdown = styled(ReactMarkdown, {
  fontSize: "14px",
  lineHeight: "24px",
  color: "#607D8B",
  padding: "20px",

  a: {
    color: "#651fff !important",
  },
  h2: {
    fontSize: "14px",
  },
  h3: {
    textTransform: "uppercase",
    fontSize: "14px",
  },
});

const ReleaseDropdownContainer = styled("div", {
  marginRight: "48px",
  display: "flex",
  fontSize: "12px",
  lineHeight: "24px",
  color: "rgb(96, 125, 139)",
  alignItems: "center",
});

const ReleaseATag = styled("a", {
  backgroundColor: "transparent",
  cursor: "pointer",
  color: "rgb(0, 145, 234)",
  fontSize: "14px",
  lineHeight: "24px",
  width: "30%",
});

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
  borderCollapse: "collapse",
  margin: 0,
  width: "100%",
});

const StyledSelect = styled("select", {
  border: "1px solid rgb(189, 202, 208)",
  color: "rgb(0, 145, 234)",
  fontSize: "12px",
  marginLeft: "4px",
  padding: "0px 33px",
  height: "17px",
});

const HeaderH1 = styled("h1", {
  width: "150px",
  color: "rgb(81, 47, 201)",
  fontSize: "20px",
  lineHeight: "32px",
  fontWeight: "600",
});

const HeaderContainer = styled("div", {
  display: "flex",
  // TODO deal with mobile styling issues
  // flexDirection: ["column", "row"],
  justifyContent: "space-between",
  alignItems: "center",
  padding: "5px 30px",
});

const OuterContainer = styled("div", {
  flexDirection: "column",
  marginBottom: "48px",
  borderRadius: "16px",
  boxShadow: "rgb(0 0 0 / 12%) 0px 1px 4px",
});

const TableHeader = styled("tr", {
  textTransform: "uppercase",
  fontSize: "10px",
  color: "rgb(189, 202, 208)",
  margin: "8px",
  borderTop: "1px solid #F0F2F4",
  lineHeight: "40px",
});
