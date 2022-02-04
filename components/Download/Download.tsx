import React from "react";
import { useState } from "react";

import { styled } from "@stitches/react";

import { Star } from "react-github-buttons";
import { DownloadTable } from "components/Download";
import type { MajorVersionCollection, OS } from "./types";

interface DownloadProps {
  initialDownloads: Array<MajorVersionCollection>;
  initialOs: OS;
}

export const Download: React.FC<DownloadProps> = ({
  initialDownloads,
  initialOs,
}) => {
  const [showAllNotes, setShowAllNotes] = useState(false);

  const renderGithubStars = () => {
    return (
      <Star owner="gravitational" repo="teleport" css={{ color: "red" }} />
    );
  };

  const renderAllNotesToggle = () => {
    const label = showAllNotes
      ? "Hide All Release Notes"
      : "Show All Release Notes";
    return (
      <StyledNotesButton onClick={toggleAllNotes}>{label}</StyledNotesButton>
    );
  };

  const toggleAllNotes = () => {
    setShowAllNotes(!showAllNotes);
  };

  // const togglelIndividualNotes = () => {

  // }

  const renderTables = () => {
    const allTables = initialDownloads.map((majorVersionCollection) => {
      return (
        <DownloadTable
          showAllNotes={showAllNotes}
          key={majorVersionCollection.majorVersion}
          data={majorVersionCollection}
          initialOs={initialOs}
        />
      );
    });

    return (
      <DownloadContainer>
        <Top>
          {renderAllNotesToggle()}
          {renderGithubStars()}
        </Top>
        {allTables}
      </DownloadContainer>
    );
  };

  return <>{renderTables()}</>;
};

const StyledGithubStarButton = styled(Star, {
  fontFamily: "helvetica",
  color: "red",
});

const DownloadContainer = styled("div", {
  display: "inline-block",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  pt: "32px",
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
