import { useRouter } from "next/router";
import AnchorNavigation, { HeaderMeta } from "components/AnchorNavigation";
import Box from "components/Box";
import Button from "components/Button";
import Flex from "components/Flex";
import Head from "components/Head";
import Layout from "components/Layout";
import Link from "components/Link";
import MDX from "components/MDX";
import Notice from "components/Notice";
import Header from "./Header";
import Footer from "./Footer";
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
  meta: { h1, title, description, layout },
  tableOfConents,
  children,
}: PageContentProps) => {
  const router = useRouter();
  const isDocLayout = !layout || layout === "doc";
  const isSectionLayout = layout === "section";

  const { current, latest, available } = versions;

  const categoryId = getCurrentCategoryIndex(navigation, router.asPath);
  const icon = categoryId ? navigation[categoryId]?.icon : "book";

  const isOldVersion = available.indexOf(current) < available.indexOf(latest);
  const isBetaVersion = available.indexOf(current) > available.indexOf(latest);

  return (
    <>
      <Head title={title} description={description} />
      <Layout>
        <Flex alignItems="stretch" flexDirection={["column", "row"]}>
          <Box flexShrink={0}>
            <Navigation data={navigation} section={isSectionLayout} />
          </Box>
          <Flex flexGrow={1} flexDirection="column">
            <Header
              title={h1 || title}
              versions={versions}
              githubUrl={githubUrl}
              icon={icon}
            />
            <Flex bg={isSectionLayout ? "page-bg" : "white"}>
              <Box flexGrow={1} px={[3, 6]} py={[3, 4]}>
                {(isOldVersion || isBetaVersion) && (
                  <Notice mb={4}>
                    {isOldVersion && (
                      <>
                        This chapter covers a past release: {versions.current}.{" "}
                        We recommend the <Link href="/docs/">latest</Link>{" "}
                        version instead.
                      </>
                    )}
                    {isBetaVersion && (
                      <>
                        This chapter covers an upcoming release:{" "}
                        {versions.current}. We recommend the{" "}
                        <Link href="/docs/">latest</Link> version instead.
                      </>
                    )}
                  </Notice>
                )}
                <Box maxWidth={isDocLayout ? "900px" : "auto"}>
                  <MDX>{children}</MDX>
                </Box>
              </Box>
              {!!tableOfConents.length && isDocLayout && (
                <AnchorNavigation
                  headers={tableOfConents}
                  display={["none", "none", "block"]}
                />
              )}
            </Flex>
            <Footer section={isSectionLayout}>
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
