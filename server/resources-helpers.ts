import type { BlogArticle } from "layouts/BlogArticle/types";
import {
  AuditReport,
  PodcastEpisode,
  TechPaperBook,
  Tutorial,
  Webinar,
} from "components/EpisodesList/types";
import { getPagesInfo } from "./pages-helpers";

type ResourceType = "podcast" | "white-papers" | "guides" | "audits" | "videos";

export const getResourcesData = (type: ResourceType) => {
  let resourcesPageInfo = [];

  try {
    resourcesPageInfo = getPagesInfo(`resources/${type}/*/*.mdx`).map(
      ({ data }) => data
    );

    if (type === "podcast") {
      resourcesPageInfo = resourcesPageInfo.sort(
        (a: PodcastEpisode, b: PodcastEpisode) => {
          const aNumberEpisode = Number(
            a.frontmatter.podcastName.split("-")[0]
          );
          const bNumberEpisode = Number(
            b.frontmatter.podcastName.split("-")[0]
          );
          return bNumberEpisode - aNumberEpisode;
        }
      );
    } else if (type === "white-papers") {
      resourcesPageInfo = resourcesPageInfo.sort(
        (a: TechPaperBook, b: TechPaperBook) => {
          return (
            new Date(b.frontmatter.publicationDate).getTime() -
            new Date(a.frontmatter.publicationDate).getTime()
          );
        }
      );
    } else if (type === "guides") {
      resourcesPageInfo = resourcesPageInfo.sort((a: Tutorial, b: Tutorial) => {
        return (
          new Date(b.frontmatter.publicationDate).getTime() -
          new Date(a.frontmatter.publicationDate).getTime()
        );
      });
    } else if (type === "audits") {
      resourcesPageInfo = resourcesPageInfo.sort(
        (a: AuditReport, b: AuditReport) => {
          return (
            new Date(b.frontmatter.publicationDate).getTime() -
            new Date(a.frontmatter.publicationDate).getTime()
          );
        }
      );
    } else if (type === "videos") {
      resourcesPageInfo = resourcesPageInfo.sort((a: Webinar, b: Webinar) => {
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

export const getArticlesListAndTags = (limit?: number) => {
  const articlesList = getArticlesList();

  const rawAllTags: Set<string> = new Set();
  articlesList?.forEach((article) =>
    article.frontmatter.tags.forEach((tag) => rawAllTags.add(tag))
  );

  return {
    tags: Array.from(rawAllTags),
    list: limit ? articlesList.slice(0, limit) : articlesList,
  };
};
