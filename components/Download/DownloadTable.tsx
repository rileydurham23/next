import { useState } from "react";

export const DownloadTable = ({ initialDownload }) => {
  const [os, setOs] = useState("os");
  const [showNotes, setShowNOtes] = useState(false);
  const [firstShowNotes, setFirstShowNotes] = useState(true);
  const [release, setLatestRelease] = useState("latest release");
  const [downloads, setDownloads] = useState("downloads");

  return (
    <>
      <h1>download table</h1>
      <h1>asdf</h1>
    </>
  );
};
