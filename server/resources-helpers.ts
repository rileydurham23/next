import type { BlogArticle } from "layouts/BlogArticle/types";
import {
  PodcastEpisode,
  TechPaperBook,
  Tutorial,
} from "components/EpisodesList/types";
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
    } else if (type === "guides") {
      resourcesPageInfo = resourcesPageInfo
        //we use a filter to exclude the index page
        .filter(
          (episode: Tutorial) => episode.frontmatter.tutorialPublicationDate
        )
        .sort((a: Tutorial, b: Tutorial) => {
          return (
            new Date(b.frontmatter.tutorialPublicationDate).getTime() -
            new Date(a.frontmatter.tutorialPublicationDate).getTime()
          );
        });
    }
  } catch (e) {
    console.error(e);
  }

  return resourcesPageInfo;
};

const getArticlesList = () => {
  let articlesPageInfo = [];

  try {
    articlesPageInfo = getPagesInfo(`blog/**/*.mdx`)
      .map(({ data }) => data)
      .filter(
        (article: BlogArticle) => article.frontmatter.layout === "blogArticle"
      )
      .sort(
        (a: BlogArticle, b: BlogArticle) =>
          new Date(b.frontmatter.date).getTime() -
          new Date(a.frontmatter.date).getTime()
      );
  } catch (e) {
    console.error(e);
  }

  return articlesPageInfo;
};

export const getFeaturedListAndTags = () => {
  const articlesList = getArticlesList();

  const rawAllTags: Set<string> = new Set();
  articlesList?.forEach((article) =>
    article.frontmatter.tags.forEach((tag) => rawAllTags.add(tag))
  );

  return {
    tags: Array.from(rawAllTags),
    list: articlesList.slice(0, 4),
  };
};
