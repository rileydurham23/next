import { ImageProps } from "next/image";

export interface BlogArticaleFrontmatter {
  title: string;
  description: string;
  articleTitle: string;
  date: Date;
  author: string;
  logo: { image: Exclude<ImageProps["src"], string>; alt: string };
  tags: string[];
  layout: string;
}

export interface BlogArticle {
  frontmatter: BlogArticaleFrontmatter;
  uri: string;
}

export interface FeaturedArticleCardsProps {
  articles: BlogArticle[];
}
