import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";

import { getPostBySlug, getSlugList, PageData } from "server/docs";
import {
  AnchorNavigation,
  Box,
  DocHeader,
  DocNavigation,
  Flex,
  Head,
  Layout,
  MDX,
} from "components";

import { mdxHydrateOptions } from "components/MDX";
import { getCurrentCategoryIndex } from "components/DocNavigation";

const DocsPage = ({
  navigation,
  mdx,
  meta: { description, h1, headers, title, githubUrl },
  versions,
}: PageData) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const categoryId = getCurrentCategoryIndex(navigation, router.asPath);
  const icon = navigation[categoryId]?.icon;

  return (
    <Layout>
      <Head title={title} description={description} />
      <Flex alignItems="stretch">
        <Box flexShrink={0}>
          <DocNavigation data={navigation} />
        </Box>
        <Flex flexGrow={1} flexDirection="column">
          <DocHeader
            title={h1}
            versions={versions}
            githubUrl={githubUrl}
            icon={icon}
          />
          <Flex>
            <Box flexGrow={1} px={6} py={4}>
              <MDX raw={mdx} />
            </Box>
            {!!headers.length && <AnchorNavigation headers={headers} />}
          </Flex>
        </Flex>
      </Flex>
    </Layout>
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
