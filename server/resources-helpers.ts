import type { BlogArticle } from "layouts/BlogArticle/types";
import {
  AuditReport,
  EpisodeKind,
  PodcastEpisode,
  TechPaperBook,
  Tutorial,
  Webinar,
} from "components/EpisodesList/types";
import { getPagesInfo } from "./pages-helpers";

interface PageDataWithEpisodeKind extends MDXPageData<MDXPageFrontmatter> {
  episodeKind: EpisodeKind;
}

type EpisodeKindUriMap = {
  [K in EpisodeKind]: string;
};

// this is implemented in order to be exhaustive of the available keys for types of resources
// added in the future
const episodeKindUriMap: EpisodeKindUriMap = {
  podcast: "podcast",
  tutorial: "guides",
  auditReport: "audits",
  techPaper: "white-papers",
  webinar: "videos",
};

export const addResourceKind = (
  data: MDXPageData<MDXPageFrontmatter>
): PageDataWithEpisodeKind => {
  const { uri } = data;
  const episodeKindUri = uri.split("/")[2];
  let episodeKind: EpisodeKind;

  let episodeKindUriMapKey: EpisodeKind;

  for (episodeKindUriMapKey in episodeKindUriMap) {
    const value = episodeKindUriMap[episodeKindUriMapKey];

    if (value === episodeKindUri) {
      episodeKind = episodeKindUriMapKey;
    }
  }

  if (!episodeKind) {
    throw new Error(`Unexpected uri episode kind: ${episodeKindUri}`);
  }

  return { ...data, episodeKind };
};

export const getAllResourcesData = () => {
  const allPagesInformation = getPagesInfo(`resources/*/*/*.mdx`);
  const mappedInformation = allPagesInformation.map(({ data }) =>
    addResourceKind(data)
  );
  return mappedInformation.sort((a, b) =>
    a.frontmatter.publicationDate < b.frontmatter.publicationDate ? 1 : -1
  );
};

export const getResourcesData = (type: string) => {
  let resourcesPageInfo = [];

  try {
    resourcesPageInfo = getPagesInfo(`resources/${type}/*/*.mdx`).map(
      ({ data }) => addResourceKind(data)
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
