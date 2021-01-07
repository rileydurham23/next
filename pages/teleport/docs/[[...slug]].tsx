import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import hydrate from "next-mdx-remote/hydrate";

import { HeaderMeta } from "utils/rehype-headers";

import { getPostBySlug, getSlugList, SerializedMdx } from "server/docs";

import Admonition from "components/Admonition";
import Link from "components/Link";
import Navigation, { NavigationCategory } from "components/Navigation";
import { Tabs, TabItem } from "components/Tabs";

const components = { a: Link, Admonition, Tabs, TabItem };

interface DocsPageProps {
  headers: HeaderMeta[];
  navigation: NavigationCategory[];
  mdx: SerializedMdx;
}

const DocsPage = ({ headers, navigation, mdx }: DocsPageProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const content = hydrate(mdx, { components });

  return (
    <table>
      <tbody>
        <tr>
          <td valign="top">
            <Navigation data={navigation} />
          </td>
          <td valign="top">
            <div>{content}</div>
          </td>
          <td valign="top">
            {headers.map(({ id, title, rank }) => {
              return (
                <div key={id}>
                  {Array(rank).fill("* ")}
                  <a href={`#${id}`} style={{ whiteSpace: "nowrap" }}>
                    {title}
                  </a>
                </div>
              );
            })}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default DocsPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const result = await getPostBySlug(params.slug, components);

  if (!result) {
    return { notFound: true };
  }

  const { headers, navigation, mdx } = result;

  return {
    props: { headers, navigation, mdx }, // will be passed to the page component as props
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getSlugList(),
    fallback: false,
  };
};
