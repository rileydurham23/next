import React from "react";
import { useEffect, useState } from "react";
import css from "@styled-system/css";
import styled from "styled-components";

import * as _ from "lodash";
import Box from "components/Box";
import Centrator from "components/Centrator";
import GitHubButton from "react-github-btn";
// import Section from "components/Section";

const gravity =
  "https://dashboard.gravitational.com/webapi/releases-oss?product=gravity&page=0";
const teleport =
  "https://dashboard.gravitational.com/webapi/releases-oss?product=teleport&page=0";

const fetchDownloads = (): Promise<unknown> => {
  const url =
    "https://dashboard.gravitational.com/webapi/releases-oss?product=teleport&page=0";

  return fetch(url).then((response) => response.json());
};

interface ReturnObject {
  props: any;
}

const getServerSideProps = (context): Promise<ReturnObject> => {
  return fetchDownloads().then((response) => {
    // console.log(response);
    return {
      props: {},
    };
  });
};

const groupByMajorVersions = (allReleases, product) => {
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
  const [downloads, setDownloads] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showNotes, setShowNotes] = useState(false);
  const url = product === "teleport" ? teleport : gravity;

  const renderGithubStars = () => {
    const url =
      product === "teleport"
        ? "https://github.com/gravitational/teleport"
        : "https://github.com/gravitational/gravity";

    return (
      <GitHubButton
        href={url}
        data-icon="octicon-star"
        data-size="large"
        data-show-count="true"
        aria-label="Star repo on GitHub"
      >
        Star
      </GitHubButton>
    );
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
        setDownloads(majorVersions);
      })
      .catch((error) => {
        setError(false);
        setErrorMessage(error);
      });
  }, [url]);

  return <Centrator>adsfadfadf</Centrator>;
};

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
