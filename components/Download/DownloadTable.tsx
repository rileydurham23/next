import { useState } from "react";
import css from "@styled-system/css";
import styled from "styled-components";
import _ from "lodash";

import Flex from "components/Flex";

interface DownloadTableProps {
  showNotes: boolean;
  key: number;
  data: any;
  product: "teleport" | "gravity";
  initialDownloads: any;
}

export const DownloadTable = ({
  initialDownloads,
  showNotes,
  data,
  product,
}: DownloadTableProps) => {
  const [os, setOs] = useState("linux");
  const [firstShowNotes, setFirstShowNotes] = useState(true);
  const [release, setLatestRelease] = useState("latest release");
  // const [downloads, setDownloads] = useState("downloads");

  let latestRelease = _.find(data, { prerelease: false });

  // IF NOT STABLE RELEASES PICK THE NEWEST ONE
  if (!latestRelease) {
    latestRelease = _.find(data, "publishedAt");
  }
  const downloads = groupByOS(latestRelease.downloads);

  // SET DEFAULT OS TO DISPLAY BASED ON URL
  const urlParams = getUrlParams(window.location.href);

  if (urlParams && urlParams.os) {
    if (urlParams.os === "windows") {
      setOs("windows");
    }
    if (urlParams.os === "mac") {
      setOs("mac");
    }
  }

  return (
    <OuterContainer>
      <h1>download table</h1>
      <h1>asdf</h1>
    </OuterContainer>
  );
};

const OuterContainer = styled(Flex)(
  css({
    border: "1px solid blue",
    flexDirection: "column",
  })
);
