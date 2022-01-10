import * as logos from "./logos";
import type { LogoName } from "./types";

type LogoConfig =
  | LogoName
  | {
      src: LogoName;
      url: string;
    };

export interface Logo {
  src: string;
  url?: string;
}

export type LogoRow = Logo[];

const expandLogo = (logo: LogoConfig): Logo => {
  if (typeof logo === "object") {
    return {
      src: logos[logo.src],
      url: logo.url,
    };
  }

  return { src: logos[logo] };
};

const expandConfig = (rows: LogoConfig[][]): LogoRow[] =>
  rows.map((row) => row.map((logo) => expandLogo(logo)));

// Standard Gray Set

export const Gray: LogoRow[] = expandConfig([
  ["bwGoogle", "bwNasdaq", "bwCrypto", "bwSamsung", "bwHp", "bwIbm"],
  ["bwCarta", "bwSquare", "bwSnowflake", "bwSumologic", "bwDoordash"],
  ["bwDk", "bwGitlab", "bwAccenture", "bwFreshworks", "bwZynga"],
]);

// SaaS Page

export const SaaS: LogoRow[] = expandConfig([
  [
    "colorSnowflake",
    "colorAirtable",
    "colorElastic",
    "colorAuth0",
    "colorCarta",
    "colorVmware",
  ],
  [
    "colorSumologic",
    "colorGladly",
    "colorGusto",
    "colorOrbit",
    "colorFlywheel",
  ],
]);

// Finance Page

export const Finance: LogoRow[] = expandConfig([
  [
    "colorNasdaq",
    "colorSquare",
    "colorGoldman",
    "colorMoodys",
    "colorCrypto",
    "colorWise",
  ],
  [
    "colorMayStreet",
    "colorMX",
    "colorFolio",
    "colorGSR",
    "colorCarta",
    "colorSpotOn",
  ],
]);

// Internet & Entertainment Page

export const Internet: LogoRow[] = expandConfig([
  [
    "colorZynga",
    "colorDraftKings",
    "colorDoorDash",
    "colorTwitch",
    "colorRushStreet",
    "colorEpicGames",
  ],

  [
    "colorWish",
    "colorCoupang",
    "colorTokopedia",
    "colorBigCommerce",
    "colorThredUp",
    "colorShadeStore",
  ],
]);

// CompactClientsList
// When determining order, make sure logos with case-study urls always appear in the first 3 positions
// otherwise they are not displayed on mobile

export const CompactClients: LogoRow[] = expandConfig([
  [
    { src: "colorAuth0", url: "/case-study/auth0/" },
    "colorAirtable",
    {
      src: "colorElastic",
      url: "/case-study/elastic-testimonial/",
    },
    "colorCrypto",
    "colorDoorDash",
  ],
  [
    "colorGitlab",
    "colorGusto",
    {
      src: "colorNasdaq",
      url: "/case-study/nasdaq-testimonial/",
    },
    "colorHPE",
    "colorIBM",
  ],
  [
    "colorSamsung",
    {
      src: "colorSumologic",
      url: "/case-study/sumologic-testimonial/",
    },
    "colorSwisscom",
    "colorThreatstack",
    "colorTwitch",
  ],
]);
