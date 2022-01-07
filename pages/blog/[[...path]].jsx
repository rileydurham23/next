/*
 * For some reason that I don't understand and can't reproduce in separate repo,
 * Vercel will fall with error in svgr image path if this file has tsx extension
 * AND also have getStaticProps. So I changed it to JSX.
 */

import Blog from "layouts/Blog";
import { getArticlesListAndTags } from "server/resources-helpers";

export async function getStaticPaths() {
  const articlesAndTags = await getArticlesListAndTags();
  const tags = articlesAndTags.tags;

  const paths = tags.map((tag) => ({
    params: { path: ["tags", tag] },
  }));

  paths.unshift({ params: { path: null } });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { tags, list: full_list } = await getArticlesListAndTags();
  let list = full_list;
  let tag = null;
  if (params.path) {
    tag = params.path.pop().toLowerCase();
    list = list.filter((art) =>
      art.frontmatter.tags.some((artTag) => artTag === tag)
    );
  }

  return {
    props: {
      tag,
      tags,
      articles: list,
    },
  };
}

export default function BlogPage(props) {
  return <Blog {...props} />;
}
