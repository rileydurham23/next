import { useRouter } from "next/router";
import AnchorNavigation, { HeaderMeta } from "components/AnchorNavigation";
import Box from "components/Box";
import Button from "components/Button";
import Footer from "components/Footer";
import Flex from "components/Flex";
import Layout from "components/Layout";
import Link from "components/Link";
import MDX from "components/MDX";
import Notice from "components/Notice";
import Header from "./Header";
import Navigation, { getCurrentCategoryIndex } from "./Navigation";
import { NavigationCategory } from "./types";

interface Version {
  title: string;
  href: string;
  isLatest: boolean;
  isCurrent: boolean;
}

interface PageContentProps {
  navigation: NavigationCategory[];
  versions: Version[];
  h1: string;
  githubUrl: string;
  children: React.ReactNode;
  isLatestVersion: boolean;
  currentVersionTitle: string;
  latestVersionHref: string;
  headers: HeaderMeta[];
}

const PageContent = ({
  navigation,
  versions,
  h1,
  githubUrl,
  isLatestVersion,
  currentVersionTitle,
  latestVersionHref,
  headers,
  children,
}: PageContentProps) => {
  const router = useRouter();

  const categoryId = getCurrentCategoryIndex(navigation, router.asPath);
  const icon = navigation[categoryId]?.icon;

  return (
    <Layout>
      <Flex alignItems="stretch" flexDirection={["column", "row"]}>
        <Box flexShrink={0}>
          <Navigation data={navigation} />
        </Box>
        <Flex flexGrow={1} flexDirection="column">
          <Header
            title={h1}
            versions={versions}
            githubUrl={githubUrl}
            icon={icon}
          />
          <Flex>
            <Box flexGrow={1} px={[3, 6]} py={[3, 4]}>
              {!isLatestVersion && (
                <Notice mb={4}>
                  This chapter covers {currentVersionTitle}. We highly recommend
                  evaluating the <Link href={latestVersionHref}>latest</Link>{" "}
                  version instead.
                </Notice>
              )}
              <Box maxWidth="900px">
                <MDX>{children}</MDX>
              </Box>
            </Box>
            {!!headers.length && (
              <AnchorNavigation
                headers={headers}
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
  );
};

export default PageContent;
