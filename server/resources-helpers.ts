import { PodcastEpisode, TechPaperBook } from "components/EpisodesList/types";
import { getPagesInfo } from "./pages-helpers";

export const getResourcesData = (type: string) => {
  let resourcesPageInfo = [];

  try {
    resourcesPageInfo = getPagesInfo(`resources/${type}/**/*.mdx`).map(
      ({ data }) => data
    );

    if (type === "podcast") {
      resourcesPageInfo = resourcesPageInfo
        //we use a filter to exclude the index page
        .filter((episode: PodcastEpisode) => episode.frontmatter.podcastName)
        .sort((a: PodcastEpisode, b: PodcastEpisode) => {
          const aNumberEpisode = Number(
            a.frontmatter.podcastName.split("-")[0]
          );
          const bNumberEpisode = Number(
            b.frontmatter.podcastName.split("-")[0]
          );
          return bNumberEpisode - aNumberEpisode;
        });
    } else if (type === "white-papers") {
      resourcesPageInfo = resourcesPageInfo
        //we use a filter to exclude the index page
        .filter(
          (episode: TechPaperBook) =>
            episode.frontmatter.title !== "Tech Papers"
        )
        .sort((a: TechPaperBook, b: TechPaperBook) => {
          return (
            new Date(b.frontmatter.publicationDate).getTime() -
            new Date(a.frontmatter.publicationDate).getTime()
          );
        });
    }
  } catch (e) {
    console.error(e);
  }

  return resourcesPageInfo;
};
