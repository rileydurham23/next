import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";

import { getPostBySlug, getSlugList, PageData } from "server/docs";
import {
  AnchorNavigation,
  Box,
  DocHeader,
  DocNavigation,
  Footer,
  Flex,
  Head,
  Layout,
  Link,
  MDX,
  Notice,
} from "components";

import { mdxHydrateOptions } from "components/MDX";
import { getCurrentCategoryIndex } from "components/DocNavigation";

const DocsPage = ({
  navigation,
  mdx,
  meta: { description, h1, headers, title, githubUrl },
  versions,
  isLatestVersion,
}: PageData) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const categoryId = getCurrentCategoryIndex(navigation, router.asPath);
  const icon = navigation[categoryId]?.icon;

  const { href: latestVersionHref } = versions.find(({ isLatest }) => isLatest);
  const { title: currentVersionTitle } = versions.find(
    ({ isCurrent }) => isCurrent
  );

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
              {!isLatestVersion && (
                <Notice mb={4}>
                  This chapter covers {currentVersionTitle}. We highly recommend
                  evaluating the <Link href={latestVersionHref}>latest</Link>{" "}
                  version instead.
                </Notice>
              )}
              <Box maxWidth="900px">
                <MDX raw={mdx} />
              </Box>
            </Box>
            {!!headers.length && <AnchorNavigation headers={headers} />}
          </Flex>
          <Footer />
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
