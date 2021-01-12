import Box from "components/Box";
import Button from "components/Button";
import Flex from "components/Flex";
import Icon, { IconName } from "components/Icon";
import DocHeaderVersions, { Version } from "./Versions";
import bgUrl from "./assets/bg.jpg";

interface DocHeaderProps {
  title: string;
  icon?: IconName;
  versions: Version[];
  githubUrl: string;
}

const GITHUB_DOCS = process.env.NEXT_PUBLIC_GITHUB_DOCS;

const DocHeader = ({
  title,
  icon = "book",
  versions,
  githubUrl,
}: DocHeaderProps) => {
  return (
    <Box
      position="relative"
      bg="dark-purple"
      backgroundImage={`url(${bgUrl})`}
      backgroundRepeat="no-repeat"
      backgroundPosition="right top"
      backgroundColor="dark-purple"
      backgroundSize="750px 168px"
      height="168px"
    >
      <Box as="a" href={GITHUB_DOCS} position="absolute" top="0" right="0">
        <img
          width="112"
          height="112"
          src="https://github.blog/wp-content/uploads/2008/12/forkme_right_white_ffffff.png?resize=149%2C149"
          alt="Fork me on GitHub"
        />
      </Box>
      <Flex>
        <Icon name={icon} color="white" size="lg" ml="56px" mt="56px" mr={3} />
        <Box mt={5}>
          <Box text="text-sm" color="white">
            Teleport
          </Box>
          <Box as="h1" pr={6} color="white" fontWeight="regular">
            {title}
          </Box>
          <DocHeaderVersions versions={versions} />
        </Box>
      </Flex>
      <Flex position="absolute" bottom="16px" right="48px">
        <Button shape="xs" type="secondary-white" width="60px" as="div">
          Share
        </Button>
        <Button
          width="60px"
          shape="xs"
          type="secondary-white"
          as="a"
          ml={3}
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Edit
        </Button>
      </Flex>
    </Box>
  );
};

export default DocHeader;
