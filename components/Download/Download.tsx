import React from "react";
import { useEffect, useState } from "react";

import Centrator from "components/Centrator";
import Section from "components/Section";

const urls = {
  teleport:
    "https://dashboard.gravitational.com/webapi/releases-oss?product=teleport&page=0",
  gravity:
    "https://dashboard.gravitational.com/webapi/releases-oss?product=gravity&page=0",
};

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
    console.log(response);
    return {
      props: {},
    };
  });
};

export const Download = (product) => {
  const [downloads, setDownloads] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showNotes, setShowNotes] = useState(false);
  // const url = product === "teleport" ? "teleport" : "gravity";

  const toggleReleaseNotes = () => {
    setShowNotes(!showNotes);
  };

  useEffect(() => {
    const url =
      "https://dashboard.gravitational.com/webapi/releases-oss?product=teleport&page=0";

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  }, []);

  return (
    <Centrator>
      <h1>testing</h1>
    </Centrator>
  );
};
