import Box from "components/Box";
import Flex, { FlexProps } from "components/Flex";

export function EmailSubscribe({ ...props }: FlexProps) {
  return (
    <Flex
      backgroundColor="white"
      justifyContent="center"
      alignItems={["stretch", "center"]}
      flexDirection={["column", "row"]}
      py="4"
      {...props}
    >
      <Box as="p" text={["text-xl", "header-4"]} color="darkest">
        Get the latest product updates and engineering blog posts
      </Box>

      <Box ml={[0, 2]} mt={[2, 0]}>
        [email form placeholder]
      </Box>
    </Flex>
  );
}
