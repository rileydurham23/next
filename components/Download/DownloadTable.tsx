import { useState } from "react";
import css from "@styled-system/css";
import styled from "styled-components";
import _ from "lodash";

import Flex from "components/Flex";
import { getOsParameter, groupByOS, OsParameter } from "./helpers";

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
  // lazy state initialization done so function is only called on first render to set the value of 'os'
  const [os, setOs] = useState<OsParameter>(
    () => getOsParameter(window.location) || "linux"
  );
  const [firstShowNotes, setFirstShowNotes] = useState(true);
  const [release, setLatestRelease] = useState("latest release");

  let latestRelease = _.find(data, { prerelease: false });

  // IF NOT STABLE RELEASES PICK THE NEWEST ONE
  if (!latestRelease) {
    latestRelease = _.find(data, "publishedAt");
  }
  const downloads = groupByOS(latestRelease.downloads);

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
