import { useLayoutEffect, useEffect, useRef, useState } from "react";

import { styled } from "./stitches.config";
import ReactMarkdown from "react-markdown";

import DownloadRow from "./DownloadRow";
import DownloadToggleMenu from "./DownloadToggleMenu";
import type { MajorVersionCollection } from "./types";
import type { OS } from "./types";

import { Box } from "./components/Box";
import { Flex } from "./components/Flex";

import { getDownloadInfo } from "./helpers";

interface DownloadTableProps {
  showAllNotes: boolean;
  data: MajorVersionCollection;
}

export const DownloadTable = ({ data, showAllNotes }: DownloadTableProps) => {
  // lazy state initialization done so function is only called on first render to set the value of 'os'

  const [os, setOs] = useState<OS>("linux");
  const [showIndividualNote, setShowIndividualNote] = useState(false);

  const [selectedVersionTag, setSelectedVersionTag] = useState(() => {
    const latestVersion = data.versions.find(
      (version) => version.prerelease === false
    );

    return latestVersion.version;
  });

  const handleChange = (os: OS) => {
    setOs(os);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVersionTag(event.target.value);
  };

  const label = showIndividualNote
    ? "Hide Release Notes"
    : "Show Release Notes";

  const renderOsMenu = () => {
    return <DownloadToggleMenu selectedDefault={os} onChange={handleChange} />;
  };

  const selectedVersion = data.versions.find(
    (version) => version.version === selectedVersionTag
  );

  // we need to trigger an effect ONLY if when showAllNotes changes
  // to synchronize local state with global state. ref is used here so
  // that we can reference the local state without having to put it in the
  // effect dependency array. the useLayoutEffect below keeps the ref state
  // up to date with whatever is in actual state
  const showIndividualNoteRef = useRef(showIndividualNote);

  // useLayoutEffect is used to avoid flash of unwanted content and a second render
  useEffect(() => {
    showIndividualNoteRef.current = showIndividualNote;
  }, [showIndividualNote]);

  useEffect(() => {
    if (showAllNotes !== showIndividualNoteRef.current) {
      setShowIndividualNote(showAllNotes);
    }
  }, [showAllNotes]);

  const renderNotes = () => {
    if (showIndividualNote) {
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
          <HeaderH1>{"Teleport " + data.majorVersion}</HeaderH1>
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
        <Flex>{renderOsMenu()}</Flex>
      </HeaderContainer>
    );
  };

  return (
    <DownloadTableContainer>
      {renderHeaders()}
      {renderNotes()}

      <StyledTable>
        <thead>
          <TableHeader>
            <StyledTh>Operating system</StyledTh>
            <StyledTh>Checksum</StyledTh>
            <StyledSizeTh>Size</StyledSizeTh>
            <StyledTh>Download link</StyledTh>
          </TableHeader>
        </thead>
        <tbody>
          {selectedVersion.downloads
            .filter((download) => {
              const downloadInformation = getDownloadInfo(download.name);
              return downloadInformation.os === os;
            })
            .map((download) => (
              <DownloadRow
                displaySize={download.displaySize}
                key={download.sha256}
                name={download.name}
                sha256={download.sha256}
                url={download.url}
              />
            ))}
        </tbody>
      </StyledTable>
    </DownloadTableContainer>
  );
};

const DownloadTableContainer = styled(Box, {
  borderRadius: "$lg",
  boxShadow: "rgb(0 0 0 / 12%) 0px 1px 4px",
  marginBottom: "$7",
});

const HeaderContainer = styled(Flex, {
  alignItems: "center",
  // TODO deal with mobile styling issues
  // flexDirection: ["column", "row"],
  justifyContent: "space-between",
  padding: "5px 30px",
  "@bp1": {
    backgroundColor: "red",
  },
});

const HeaderH1 = styled("h1", {
  color: "$dark-purple",
  fontSize: "$header-4",
  fontWeight: "$bold",
  lineHeight: "$lg",
  width: "150px",
});

const Left = styled(Flex, {
  alignItems: "center",
});

const ReleaseATag = styled("a", {
  color: "$light-blue",
  cursor: "pointer",
  fontSize: "$text-sm",
  lineHeight: "$lg",
  width: "30%",
  textDecoration: "underline",
});

const ReleaseDropdownContainer = styled(Flex, {
  alignItems: "center",
  color: "$gray",
  fontSize: "$text-sm",
  marginRight: "$7",
});

const StyledMarkdown = styled(ReactMarkdown, {
  color: "$gray",
  fontSize: "$text-md",
  lineHeight: "$lg",
  padding: "20px",

  a: {
    color: "$light-purple",
  },
  h2: {
    fontSize: "$text-md",
  },
  h3: {
    textTransform: "uppercase",
    fontSize: "$text-md",
  },
});

const StyledSelect = styled("select", {
  border: "1px solid $blue-gray",
  color: "$light-blue",
  fontSize: "$text-sm",
  height: "17px",
  marginLeft: "$1",
  padding: "0px 33px",
});

const StyledSizeTh = styled("th", {
  textAlign: "left",
});

const StyledTh = styled("th", {
  paddingLeft: "30px",
  textAlign: "left",
});

const StyledTable = styled("table", {
  borderCollapse: "collapse",
  width: "100%",
});

const TableHeader = styled("tr", {
  borderTop: "1px solid $lightest-gray",
  color: "$blue-gray",
  fontSize: "$text-xs",
  lineHeight: "$xl",
  textTransform: "uppercase",
});
