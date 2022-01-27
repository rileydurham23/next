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

const teleport =
  "https://dashboard.gravitational.com/webapi/releases-oss?product=teleport&page=0";

interface Download {
  displaySize: string;
  name: string;
  sha: string;
  url: string;
}

interface Version {
  downloads: Array<Download>;
  descriptionMarkdown: string;
  id: string;
  prerelease: boolean;
  publishedAt: string;
  version: string;
}

const groupByMajorVersions = (allReleases, product): Array<Version> => {
  const versions = {};

  allReleases.forEach((release) => {
    const majorVersion =
      product === "teleport"
        ? release.version.slice(1, 4)
        : release.version.slice(0, 3);

    if (versions[majorVersion]) {
      versions[majorVersion].push(release);
    } else {
      versions[majorVersion] = [release];
    }
  });

  const sortedVersions = _(versions).toPairs().sortBy(0).fromPairs().value();
  const versionsArray = _.values(sortedVersions).reverse();
  return versionsArray;
};

export const Download = (product: "teleport" | "gravity") => {
  const [initialDownloads, setInitialDownloads] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showNotes, setShowNotes] = useState(false);
  const url =
    "https://dashboard.gravitational.com/webapi/releases-oss?product=teleport&page=0";

  console.log(initialDownloads);

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

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const majorVersions = groupByMajorVersions(data.items, data.product);
        setInitialDownloads(majorVersions);
      })
      .catch((error) => {
        setError(false);
        setErrorMessage(error);
      });
  }, [url]);

  const renderErrorMessage = () => {
    let errMessage = null;

    if (error) {
      errMessage = (
        <>
          <Flex>
            We&apos;re sorry there was an error retreiving the latest build.
          </Flex>
          <Flex>
            Please try again later. If the problem persists contact
            <a href="mailto:support@goteleport.com">support@goteleport.com</a>
          </Flex>
        </>
      );
    }

    return errMessage;
  };

  // const renderTables = () => {
  //   if (!initialDownloads.length) {
  //     return null;
  //   }

  //   const allTables = initialDownloads.map((majorVersion, index) => (
  //     return (
  //       <DownloadTable
  //         // showNotes={showNotes}
  //         key={index}
  //         // data={majorVersion}
  //         // product={product}
  //         initialDownloads={initialDownloads}
  //       />
  //     )
  //   ));

  //   return (
  //     <div>
  //       <Top mb={4}>
  //         {renderNotesToggle()}
  //         {renderGithubStars()}
  //       </Top>
  //       {/* {allTables} */}
  //     </div>
  //   );
  // };

  return (
    <Container>
      {/* {renderTables()} */}
      <h1>!!</h1>
    </Container>
  );
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
