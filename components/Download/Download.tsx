import React from "react";
import { useEffect, useState } from "react";
import css from "@styled-system/css";
import styled from "styled-components";

import * as _ from "lodash";
import Box from "components/Box";
import Centrator from "components/Centrator";
import Flex from "components/Flex";

import { Star } from "react-github-buttons";
// import DownloadRow from "./DownloadRow";

import { DownloadTable } from "components/Download";
import { OsParameter } from "./helpers";
import type { MajorVersionCollection } from "./types";

const teleport =
  "https://dashboard.gravitational.com/webapi/releases-oss?product=teleport&page=0";

interface DownloadProps {
  initialDownloads: Array<MajorVersionCollection>;
  initialOs: OsParameter;
}

export const Download: React.FC<DownloadProps> = ({
  initialDownloads,
  initialOs,
}) => {
  const [showNotes, setShowNotes] = useState(false);
  const url =
    "https://dashboard.gravitational.com/webapi/releases-oss?product=teleport&page=0";

  const renderGithubStars = () => {
    return <Star owner="gravitational" repo="teleport" />;
  };

  const renderNotesToggle = () => {
    const label = showNotes
      ? "Hide All Release Notes"
      : "Show All Release Notes";
    return (
      <StyledNotesButton onClick={toggleReleaseNotes}>
        {label}
      </StyledNotesButton>
    );
  };

  const toggleReleaseNotes = () => {
    setShowNotes(!showNotes);
  };

  // const renderErrorMessage = () => {
  //   let errMessage = null;

  //   if (error) {
  //     errMessage = (
  //       <>
  //         <Flex>
  //           We&apos;re sorry there was an error retreiving the latest build.
  //         </Flex>
  //         <Flex>
  //           Please try again later. If the problem persists contact
  //           <a href="mailto:support@goteleport.com">support@goteleport.com</a>
  //         </Flex>
  //       </>
  //     );
  //   }

  //   return errMessage;
  // };

  const renderTables = () => {
    const allTables = initialDownloads.map((majorVersionCollection) => {
      return (
        <DownloadTable
          showNotes={showNotes}
          key={majorVersionCollection.majorVersion}
          data={majorVersionCollection}
          initialOs={initialOs}
        />
      );
    });

    return (
      <Flex alignItems="center" flexDirection="column">
        <Top mb={4}>
          {renderNotesToggle()}
          {renderGithubStars()}
        </Top>
        {allTables}
      </Flex>
    );
  };

  return <>{renderTables()}</>;
};

const Top = styled(Flex)(
  css({
    alignItems: "left",
    justifyContent: "left",
  })
);

const StyledNotesButton = styled("button")(
  css({
    background: "white",
    border: "1px solid grey",
    borderRadius: "4px",
    color: "blue",
    fontSize: "12px",
    height: "32px",
    cursor: "pointer",
    outline: "none",
    margin: "0 32px 0 0",
    display: "inline-block",
    padding: "0 24px",
  })
);

const Container = styled(Flex)(
  css({
    flexDirection: "column",
    px: 11,
    pt: 5,
  })
);
