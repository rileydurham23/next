import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";

import hydrate from "next-mdx-remote/hydrate";

import { getPostBySlug, getSlugList, PageData } from "server/docs";

import Admonition from "components/Admonition";
import Head from "components/Head";
import Link from "components/Link";
import Navigation, { NavigationCategory } from "components/Navigation";
import { Tabs, TabItem } from "components/Tabs";

const mdxHydrateOptions = {
  components: { a: Link, Admonition, Tabs, TabItem },
};

const DocsPage = ({
  navigation,
  mdx,
  meta: { description, h1, headers, title },
}: PageData) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const content = hydrate(mdx, mdxHydrateOptions);

  return (
    <>
      <Head title={title} description={description} />
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <Navigation data={navigation} />
            </td>
            <td valign="top">
              <h1>{h1}</h1>
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
    </>
  );
};

export default DocsPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const props = await getPostBySlug(params.slug, mdxHydrateOptions.components);

  if (!props) {
    return { notFound: true };
  }

  return {
    props, // will be passed to the page component as props
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getSlugList(),
    fallback: false,
  };
};
