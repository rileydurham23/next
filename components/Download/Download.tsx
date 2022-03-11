import React from "react";
import { useState } from "react";
import styled from "styled-components";
import css from "@styled-system/css";

import Box from "components/Box";
import { DownloadTable } from "components/Download";
import Flex from "components/Flex";
import type { MajorVersionCollection } from "./types";
import { Star } from "react-github-buttons";

interface DownloadProps {
  initialDownloads: Array<MajorVersionCollection>;
}

export const Download: React.FC<DownloadProps> = ({ initialDownloads }) => {
  const [showAllNotes, setShowAllNotes] = useState(false);
  const notesLabel = showAllNotes
    ? "Hide All Release Notes"
    : "Show All Release Notes";

  const renderGithubStars = () => {
    return (
      <Star
        owner="gravitational"
        repo="teleport"
        css={{ color: "red !important" }}
      />
    );
  };

  const toggleAllNotes = () => {
    setShowAllNotes(!showAllNotes);
  };

  const renderTables = () => {
    const allTables = initialDownloads.map((majorVersionCollection) => {
      return (
        <DownloadTable
          showAllNotes={showAllNotes}
          key={majorVersionCollection.majorVersion}
          data={majorVersionCollection}
        />
      );
    });

    return (
      <DownloadContainer>
        <Top>
          <StyledNotesButton onClick={toggleAllNotes}>
            {notesLabel}
          </StyledNotesButton>
          {renderGithubStars()}
        </Top>
        {allTables}
      </DownloadContainer>
    );
  };

  return <>{renderTables()}</>;
};

const DownloadContainer = styled(Box)(
  css({
    width: "90%",
    maxWidth: "1240px",
    // overflow: "scroll",
  })
);

const Top = styled(Flex)(
  css({
    my: 5,
  })
);

const StyledNotesButton = styled("button")(
  css({
    backgroundColor: "white",
    border: "1px solid #BDCAD0",
    borderRadius: "default",
    color: "light-blue",
    fontSize: "text-sm",
    height: "32px", // theming not working
    cursor: "pointer",
    mr: 5,
    px: 4,
  })
);
