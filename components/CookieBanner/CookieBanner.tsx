import { useState } from "react";

import css from "@styled-system/css";
import styled from "styled-components";

import Box from "components/Box";
import Button from "components/Button";
import Flex from "components/Flex";
import Link from "components/Link";

const gtagRegions = [
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
  const [showBanner, setShowBanner] = useState(() => {
    // in some cases, localStorage access will throw an error depending
    // on the user's browser. wrapping in a try-catch avoids white screening in case of error
    try {
      const hasCookieStored =
        typeof window !== "undefined" &&
        localStorage.getItem("hasCookie") === "true";

      return !hasCookieStored;
    } catch (e) {
      console.log(e);
      return true;
    }
  });

  const handleAcceptClick = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("hasCookie", "true");
      setShowBanner(false);

      // window.gtag needs to be gated because in development, NEXT_PUBLIC_GTAG_ID is undefined which throws an error
      if (window.gtag) {
        // updating consent to track in google analytics in states/countries that require consent to do so
        window.gtag("consent", "update", {
          ad_storage: "granted",
          analytics_storage: "granted",
          region: gtagRegions,
        });
      }
    }
  };

  return (
    <>
      {showBanner && (
        <OuterContainer>
          <CookieMessage>
            <TextContainer>
              This site uses cookies to improve service. By using this site, you
              agree to our use of cookies.&nbsp;
              <Link href="https://goteleport.com/privacy/" color="white">
                More info.
              </Link>
            </TextContainer>
          </CookieMessage>
          <Button onClick={handleAcceptClick} variant="secondary">
            Ok, got it.
          </Button>
        </OuterContainer>
      )}
    </>
  );
};

export default CookieBanner;

const CookieMessage = styled(Flex)(
  css({
    fontSize: ["text-md", "text-lg"],
    lineHeight: "md",
    marginBottom: [2, 0],
  })
);

const OuterContainer = styled(Flex)(
  css({
    alignItems: ["left", "center"],
    backgroundColor: "dark-purple",
    bottom: 0,
    boxShadow: "0px 2px 10px #455A64",
    color: "white",
    flexDirection: ["column", "row"],
    justifyContent: "space-around",
    padding: [2, 3],
    position: "fixed",
    width: "100%",
    zIndex: "999999",
  })
);

const TextContainer = styled(Box)(
  css({
    display: "inline-block",
    padding: [2, 0],
  })
);
