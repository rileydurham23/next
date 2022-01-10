/*
 * For some reason that I don't understand and can't reproduce in separate repo,
 * Vercel will fall with error in svgr image path if this file has tsx extension
 * AND also have getStaticProps. So I changed it to JSX.
 */

import Blog from "layouts/Blog";
import { getArticlesListAndTags } from "server/resources-helpers";

const ARTICLES_BY_PAGE = 15;

function getArticlesByTag(artList, tag) {
  return artList.filter((art) =>
    art.frontmatter.tags.some((artTag) => artTag === tag)
  );
}

function addPaths(articlesList, pathsArray, tag) {
  const maxPages = Math.ceil((articlesList.length + 1) / ARTICLES_BY_PAGE);

  if (tag) {
    pathsArray.push({ params: { path: ["tags", tag] } });
    for (let i = 0; i <= maxPages; i++) {
      pathsArray.push({ params: { path: ["tags", tag, "page", `${i + 1}`] } });
    }
  } else {
    for (let i = 0; i <= maxPages; i++) {
      pathsArray.push({ params: { path: ["page", `${i + 1}`] } });
    }
  }
}

export async function getStaticPaths() {
  const articlesAndTags = await getArticlesListAndTags();
  const tags = articlesAndTags.tags;
  const articles = articlesAndTags.list;
  const paths = [];

  tags.forEach((tag) => {
    const articlesByTag = getArticlesByTag(articles, tag);
    addPaths(articlesByTag, paths, tag);
  });

  addPaths(articles, paths);

  paths.unshift({ params: { path: null } });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { tags, list } = await getArticlesListAndTags();
  let tag = null;
  let pageNumber = "1";
  let maxPages = Math.ceil(list.length / ARTICLES_BY_PAGE);

  if (params.path) {
    for (let i = 0; i < params.path.length; i++) {
      if (params.path[i] === "tags") {
        tag = params.path[i + 1];
      }
      if (params.path[i] === "page") {
        pageNumber = params.path[i + 1];
      }
    }
  }
  const initialPageCount = ARTICLES_BY_PAGE * (Number(pageNumber) - 1);
  const finalPageCount = ARTICLES_BY_PAGE * Number(pageNumber);
  let articles = list.slice(initialPageCount, finalPageCount);

  if (tag) {
    const articlesByFilter = getArticlesByTag(list, tag);
    maxPages = Math.ceil((articlesByFilter.length + 1) / ARTICLES_BY_PAGE);
    articles = articlesByFilter.slice(initialPageCount, finalPageCount);
  }

  return {
    props: {
      tag,
      tags,
      articles,
      currentPage: pageNumber,
      maxPages,
    },
  };
}

export default function BlogPage(props) {
  return <Blog {...props} />;
}
