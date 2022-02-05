export interface PodcastEpisode {
  frontmatter: {
    podcastName: string;
    title: string;
    description: string;
    publicationDate: string;
  };
  uri: string;
}

export interface TechPaperBook {
  frontmatter: {
    podcastName: string;
    title: string;
    description: string;
    publicationDate: string;
    cardTitle?: string;
    brief?: string;
  };
  uri: string;
}

export interface CardParams {
  cardBG: string;
  cardBC: string;
  src: string;
  caption: string;
}

export type EpisodeKind =
  | "podcast"
  | "techPaper"
  | "tutorial"
  | "auditReport"
  | "webinar"
  | "analystReport";

export interface ResourceItem {
  id: string;
  title: string;
  href: string;
}

export interface AuditReport {
  frontmatter: {
    alternateTitle?: string;
    auditPdf: string;
    authors: string;
    coverPhotoYear: string;
    description: string;
    publicationDate: string;
    title: string;
  };
  uri: string;
}

export interface Tutorial {
  frontmatter: {
    alternateTitle?: string;
    description: string;
    publicationDate: string;
    title: string;
    videoId: string;
  };
  uri: string;
}

export interface Webinar {
  frontmatter: {
    alternateTitle?: string;
    description: string;
    publicationDate: string;
    title: string;
    videoId: string;
  };
  uri: string;
}

export interface AnalystReport {
  frontmatter: {
    description: string;
    publicationDate: string;
    title: string;
  };
  uri: string;
}
