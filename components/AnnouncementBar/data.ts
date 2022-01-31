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
  ["bwGoogle", "bwNasdaq", "bwMoodys", "bwSamsung", "bwHp", "bwIbm"],
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
    "colorCarta",
    "colorWise",
  ],
  [
    "colorMayStreet",
    "colorMX",
    "colorFolio",
    "colorGSR",
    "colorTribal",
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

// New home page

export const NewHomepage: LogoRow[] = expandConfig([
  [
    "colorNasdaq",
    "colorCarta",
    "colorDoorDash",
    "colorElastic",
    "colorSnowflake",
    "colorVmware",
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
    "colorMoodys",
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

export const CompactClientsPAM: LogoRow[] = expandConfig([
  [
    { src: "colorAuth0", url: "/case-study/auth0/" },
    "colorAirtable",
    {
      src: "colorElastic",
      url: "/case-study/elastic-testimonial/",
    },
    {
      src: "colorCarta",
      url: "/case-study/carta-testimonial/",
    },
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
