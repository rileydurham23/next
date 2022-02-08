import React from "react";
import { useState } from "react";
import { styled } from "@stitches/react";

import { DownloadTable } from "components/Download";
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
    return <Star owner="gravitational" repo="teleport" />;
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

const DownloadContainer = styled("div", {
  display: "inline-block",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  pt: "32px",
  width: "90%",
  maxWidth: "1240px",
  overflow: "scroll",
});

const Top = styled("div", {
  display: "flex",
  justifyContent: "left",
  marginBottom: "32px",
  marginTop: "32px",
});

const StyledNotesButton = styled("button", {
  background: "white",
  border: "1px solid rgb(189, 202, 208)",
  borderRadius: "4px",
  color: "rgb(0, 145, 234)",
  fontSize: "12px",
  height: "32px",
  cursor: "pointer",
  outline: "none",
  margin: "0 32px 0 0",
  display: "inline-block",
  padding: "0 24px",
});
