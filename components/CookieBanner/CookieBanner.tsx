import { useState } from "react";

import css from "@styled-system/css";
import styled from "styled-components";

import Box from "components/Box";
import Button from "components/Button";
import Flex from "components/Flex";
import Link from "components/Link";
import { useEffect } from "react";

const googleAnalyticsRegions = [
  "BE",
  "BG",
  "CZ",
  "DK",
  "DE",
  "EE",
  "IE",
  "GR",
  "ES",
  "FR",
  "HR",
  "IT",
  "CY",
  "LV",
  "LT",
  "LU",
  "HU",
  "MT",
  "NL",
  "AT",
  "PL",
  "PT",
  "RO",
  "SI",
  "SK",
  "FI",
  "SE",
  "US-CA",
];

const CookieBanner = () => {
  const hasCookieStored =
    typeof window !== "undefined" &&
    localStorage.getItem("hasApprovedCookies") === "true";

  const handleAcceptClick = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("hasApprovedCookies", "true");
      console.log("set cookie");
      console.log("getting cookie", localStorage.getItem("hasApprovedCookies"));
    }

    //updates permissions for gtag to function
    //this code needs to be tested with a VPN - Cole
    //eslint-disable-next-line
    // gtag("consent", "update", {
    //   ad_storage: "granted",
    //   analytics_storage: "granted",
    //   region: googleAnalyticsRegions,
    // });
  };

  console.log("hasCookieStored:", hasCookieStored);

  return (
    <>
      {!hasCookieStored && (
        <OuterContainer>
          <CookieMessage>
            <TextContainer>
              Our sites uses cookies to provide you with a great user
              experience. By using this website, you accept our&nbsp;
              <Link href="https://goteleport.com/privacy/" color="white">
                Cookie Policy.
              </Link>
            </TextContainer>
          </CookieMessage>
          <Button onClick={handleAcceptClick} variant="secondary">
            Okay!
          </Button>
        </OuterContainer>
      )}
    </>
  );
};

export default CookieBanner;

const TextContainer = styled(Box)(
  css({
    display: "inline-block",
    padding: [2, 0],
  })
);

const CookieMessage = styled(Flex)(
  css({
    marginRight: 5,
    flexDirection: ["column"],
    marginBottom: [2, 0],
    margin: 1,
    maxWidth: "900px",
    lineHeight: "md",
  })
);

const OuterContainer = styled(Flex)(
  css({
    backgroundColor: "dark-purple",
    color: "white",
    alignItems: ["left", "center"],
    flexDirection: ["column", "row"],
    justifyContent: "space-around",
    position: "fixed",
    bottom: 0,
    width: "100%",
    padding: 3,
    zIndex: "999999",
    boxShadow: " 0px 2px 10px #455A64",
    // fontSize: "text-lg",
    transition: "all 0.3s ease",
    // display:
  })
);
