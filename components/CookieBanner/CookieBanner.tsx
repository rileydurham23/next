import { useState } from "react";

import css from "@styled-system/css";
import styled from "styled-components";

import Box from "components/Box";
import Button from "components/Button";
import Flex from "components/Flex";
import Link from "components/Link";

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
  // lazy state initialization used in order to not lock the browser on localStorage look up
  // this also avoids hasCookieStored from being computer on every render
  const [showBanner, setShowBanner] = useState(() => {
    // in some cases, localStorage access will throw an error depending
    // on the user's browser. wrapping it in a trycatch avoids white screening in case of error
    try {
      const hasCookieStored =
        typeof window !== "undefined" &&
        localStorage.getItem("hasCookie") === "true";

      return !hasCookieStored;
    } catch (e) {
      // the default state if there's an error is to show the banner
      return true;
    }
  });

  const handleAcceptClick = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("hasCookie", "true");
      setShowBanner(false);
    }

    //updates permissions for gtag to function
    // eslint-disable-next-line
    // gtag("consent", "update", {
    //   ad_storage: "granted",
    //   analytics_storage: "granted",
    //   region: googleAnalyticsRegions,
    // });
  };

  return (
    <>
      {showBanner && (
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
    fontSize: ["14px", "16px"],
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
    padding: [2, 3],
    zIndex: "999999",
    boxShadow: " 0px 2px 10px #455A64",
    transition: "all 0.3s ease",
  })
);
