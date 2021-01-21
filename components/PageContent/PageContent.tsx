import AnchorNavigation, { HeaderMeta } from "components/AnchorNavigation";
import Box from "components/Box";
import DocHeader from "components/DocHeader";
import DocNavigation, { NavigationCategory } from "components/DocNavigation";
import Footer from "components/Footer";
import Flex from "components/Flex";
import { IconName } from "components/Icon";
import Layout from "components/Layout";
import Link from "components/Link";
import MDX, { RawMDX } from "components/MDX";
import Notice from "components/Notice";

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
  icon: IconName;
  mdx: RawMDX;
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
  icon,
  mdx,
  isLatestVersion,
  currentVersionTitle,
  latestVersionHref,
  headers,
}: PageContentProps) => {
  return (
    <Layout>
      <Flex alignItems="stretch" flexDirection={["column", "row"]}>
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
            <Box flexGrow={1} px={[3, 6]} py={[3, 4]}>
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
            {!!headers.length && (
              <AnchorNavigation
                headers={headers}
                display={["none", "none", "block"]}
              />
            )}
          </Flex>
          <Footer />
        </Flex>
      </Flex>
    </Layout>
  );
};

export default PageContent;
