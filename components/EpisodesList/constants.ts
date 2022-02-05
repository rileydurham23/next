import podcastIcon from "./assets/podcast.svg";
import tutorialIcon from "./assets/tutorial.svg";
import webinarIcon from "./assets/webinar.svg";
import techPaperIcon from "./assets/tech-paper.svg";
import auditIcon from "./assets/audit-report.svg";
import { CardParams, EpisodeKind } from "./types";

export const CARD_DATA: Record<EpisodeKind, CardParams> = {
  podcast: {
    cardBG: "podcast",
    cardBC: "#7553fa",
    src: podcastIcon,
    caption: "PODCAST",
  },
  techPaper: {
    cardBG: "whitepaper",
    cardBC: "#59a4ec",
    src: techPaperIcon,
    caption: "TECH PAPER",
  },
  tutorial: {
    cardBG: "tutorial",
    cardBC: "#5a68ff",
    src: tutorialIcon,
    caption: "TUTORIAL",
  },
  auditReport: {
    cardBG: "audit",
    cardBC: "#f09182",
    src: auditIcon,
    caption: "AUDIT REPORT",
  },
  webinar: {
    cardBG: "webinar",
    cardBC: "#216ffd",
    src: webinarIcon,
    caption: "WEBINAR",
  },
  analystReport: {
    cardBG: "whitepaper",
    cardBC: "#59a4ec",
    src: techPaperIcon,
    caption: "ANALYST REPORT",
  },
};

export const RESOURCES = [
  {
    id: "all",
    title: "All",
    href: "/resources/",
  },
  {
    id: "audits",
    title: "Audit report",
    href: "/resources/audits",
  },
  {
    id: "white-papers",
    title: "Tech paper",
    href: "/resources/white-papers/",
  },
  {
    id: "guides",
    title: "Tutorial",
    href: "/resources/guides",
  },
  {
    id: "videos",
    title: "Webinar",
    href: "/resources/videos",
  },
  {
    id: "podcast",
    title: "Podcast",
    href: "/resources/podcast/",
  },
  {
    id: "analyst-reports",
    title: "Analyst Report",
    href: "/resources/analyst-reports/",
  },
];
