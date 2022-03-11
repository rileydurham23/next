import { useLayoutEffect, useRef, useState } from "react";

import styled from "styled-components";
import css from "@styled-system/css";

import ReactMarkdown from "react-markdown";

import DownloadRow from "./DownloadRow";
import DownloadToggleMenu from "./DownloadToggleMenu";
import type { MajorVersionCollection } from "./types";
import type { OS } from "./types";

import Box from "components/Box";
import Flex from "components/Flex";

import { getDownloadInfo } from "./helpers";
import type { Version } from "./types";

interface DownloadTableProps {
  data: MajorVersionCollection;
  showAllNotes: boolean;
}

export const DownloadTable = ({ data, showAllNotes }: DownloadTableProps) => {
  // lazy state initialization done so function is only called on first render to set the value of 'os'

  const [os, setOs] = useState<OS>("linux");
  const [showIndividualNote, setShowIndividualNote] = useState(false);

  const [selectedVersionTag, setSelectedVersionTag] = useState(() => {
    const latestVersion = data.versions.find(
      (version) => version.prerelease === false
    );

    if (latestVersion) {
      return latestVersion.version;
    }

    // if there is no latestVersion (i.e. pre-release), then return the most recent version based off
    // its publicationDate

    let mostRecentVersionItem: Version | null = null;

    data.versions.forEach((version) => {
      const publishedDate = version.publishedAt;

      if (
        !mostRecentVersionItem ||
        publishedDate > mostRecentVersionItem.publishedAt
      ) {
        mostRecentVersionItem = version;
      }
    });

    return mostRecentVersionItem.version;
  });

  // reset the OS based off clicking 'linux, max, windows' buttons
  const handleChange = (os: OS) => {
    setOs(os);
  };

  // change the selected version of a release
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
  useLayoutEffect(() => {
    showIndividualNoteRef.current = showIndividualNote;
  }, [showIndividualNote]);

  useLayoutEffect(() => {
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

      {selectedVersion.prerelease ? (
        <PrereleaseWarning>
          This version is a pre-release and is not recommended for production
          usage.
        </PrereleaseWarning>
      ) : null}

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
              // return only the release notes for a selected version
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

const DownloadTableContainer = styled(Box)(
  css({
    borderRadius: "lg",
    boxShadow: "rgb(0 0 0 / 12%) 0px 1px 4px",
    marginBottom: 7,
    overflow: ["scroll", null],
  })
);

const HeaderContainer = styled(Flex)(
  css({
    alignItems: "center",
    justifyContent: "space-between",
    padding: "5px 30px",
    flexDirection: ["column", "row"],
  })
);

const HeaderH1 = styled("h1")(
  css({
    color: "dark-purple",
    fontSize: "header-4",
    fontWeight: "bold",
    lineHeight: "lg",
    width: "150px",
  })
);

const Left = styled(Flex)(
  css({
    alignItems: "center",
    flexDirection: ["column", "row"],
  })
);

const ReleaseATag = styled("a")(
  css({
    color: "light-blue",
    cursor: "pointer",
    fontSize: "text-sm",
    lineHeight: "lg",
    width: "30%",
    textDecoration: "underline",
  })
);

const ReleaseDropdownContainer = styled(Flex)(
  css({
    alignItems: "center",
    color: "gray",
    fontSize: "text-sm",
    marginRight: 7,
  })
);

const StyledMarkdown = styled(ReactMarkdown)(
  css({
    color: "gray",
    fontSize: "text-md",
    lineHeight: "lg",
    padding: "20px",

    a: {
      color: "light-purple",
    },
    h2: {
      fontSize: "text-md",
    },
    h3: {
      textTransform: "uppercase",
      fontSize: "text-md",
    },
  })
);

const StyledSelect = styled("select")(
  css({
    border: "1px solid #BDCAD0",
    color: "light-blue",
    fontSize: "text-sm",
    height: "17px",
    marginLeft: 1,
    px: 5,
  })
);

const StyledSizeTh = styled("th")(
  css({
    // paddingLeft: "30px",
  })
);

const StyledTh = styled("th")(
  css({
    paddingLeft: [5, 2],
  })
);

const StyledTable = styled("table")(
  css({
    borderCollapse: "collapse",
    width: "100%",
  })
);

const TableHeader = styled("tr")(
  css({
    borderTop: "1px solid lightest-gray",
    color: "blue-gray",
    fontSize: "text-xs",
    lineHeight: "xl",
    textTransform: "uppercase",
    textAlign: "left",
  })
);

const PrereleaseWarning = styled(Box)(
  css({
    backgroundColor: "red",
    color: "white",
    fontSize: "text-md",
    textAlign: "center",
    lineHeight: "lg",
    px: 3,
    fontWeight: "bold",
  })
);