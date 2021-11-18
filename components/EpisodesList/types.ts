export interface PodcastEpisode {
  frontmatter: {
    podcastName: string;
    title: string;
    description: string;
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
  | "webinar";

export interface ResourceItem {
  id: string;
  title: string;
  href: string;
}
