import { useRouter } from "next/router";
import AnchorNavigation, { HeaderMeta } from "components/AnchorNavigation";
import Box from "components/Box";
import Button from "components/Button";
import Footer from "components/Footer";
import Flex from "components/Flex";
import Head from "components/Head";
import Layout from "components/Layout";
import Link from "components/Link";
import MDX from "components/MDX";
import Notice from "components/Notice";
import Header from "./Header";
import Navigation, { getCurrentCategoryIndex } from "./Navigation";
import { NavigationCategory, VersionsInfo, PageMeta } from "./types";

interface PageContentProps {
  navigation: NavigationCategory[];
  versions: VersionsInfo;
  meta: PageMeta;
  tableOfConents: HeaderMeta[];
  githubUrl: string;
  children: React.ReactNode;
}

const PageContent = ({
  navigation,
  versions,
  githubUrl,
  meta: { h1, title, description },
  tableOfConents,
  children,
}: PageContentProps) => {
  const router = useRouter();

  const categoryId = getCurrentCategoryIndex(navigation, router.asPath);
  const icon = categoryId ? navigation[categoryId]?.icon : "book";

  return (
    <>
      <Head title={title} description={description} />
      <Layout>
        <Flex alignItems="stretch" flexDirection={["column", "row"]}>
          <Box flexShrink={0}>
            <Navigation data={navigation} />
          </Box>
          <Flex flexGrow={1} flexDirection="column">
            <Header
              title={h1 || title}
              versions={versions}
              githubUrl={githubUrl}
              icon={icon}
            />
            <Flex>
              <Box flexGrow={1} px={[3, 6]} py={[3, 4]}>
                {versions.current !== versions.latest && (
                  <Notice mb={4}>
                    This chapter covers {versions.current}. We highly recommend
                    evaluating the <Link href="/">latest</Link> version instead.
                  </Notice>
                )}
                <Box maxWidth="900px">
                  <MDX>{children}</MDX>
                </Box>
              </Box>
              {!!tableOfConents.length && (
                <AnchorNavigation
                  headers={tableOfConents}
                  display={["none", "none", "block"]}
                />
              )}
            </Flex>
            <Footer>
              <Box
                textAlign="center"
                fontSize={["text-l", "text-xl"]}
                lineHeight={["md", "xl"]}
                color="gray"
                px={3}
                mb={3}
              >
                Have a suggestion or can’t find something?
              </Box>
              <Button
                as="a"
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                shape="lg"
                variant="secondary"
              >
                IMPROVE THE DOCS
              </Button>
            </Footer>
          </Flex>
        </Flex>
      </Layout>
    </>
  );
};

export default PageContent;
