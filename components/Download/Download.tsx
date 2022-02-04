import React from "react";
import { useState } from "react";
import css from "@styled-system/css";
import styled from "styled-components";

import Flex from "components/Flex";
import GitHubButton from "react-github-btn";

import { DownloadTable } from "components/Download";
import { OsParameter } from "./helpers";
import type { MajorVersionCollection } from "./types";

interface DownloadProps {
  initialDownloads: Array<MajorVersionCollection>;
  initialOs: OsParameter;
}

export const Download: React.FC<DownloadProps> = ({
  initialDownloads,
  initialOs,
}) => {
  const [showAllNotes, setShowAllNotes] = useState(false);
  // const [showAllNotes, setShowNotes] = useState(false);

  console.log(showAllNotes);

  const renderGithubStars = () => {
    return (
      <GitHubButton
        href="https://github.com/gravitational/teleport"
        data-icon="octicon-star"
        data-size="large"
        data-show-count="true"
        aria-label="Star repo on GitHub"
      >
        Star
      </GitHubButton>
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
        <Top mb={4}>
          {renderAllNotesToggle()}
          {renderGithubStars()}
        </Top>
        {allTables}
      </DownloadContainer>
    );
  };

  return <>{renderTables()}</>;
};

const DownloadContainer = styled("div")(
  css({
    display: "inline-block",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: ["100%", "90%"],
    pt: "32px",
  })
);

const Top = styled(Flex)(
  css({
    alignItems: "left",
    justifyContent: "left",
    flexGrow: 1,
  })
);

const StyledNotesButton = styled("button")(
  css({
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
  })
);
