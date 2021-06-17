import Box from "components/Box";
import { FlexProps } from "components/Flex";
import { Centrator } from "components/Layout";
import Video from "components/Video";

export type SectionVideoProps = {
  title: string;
  videoId: string;
  children: React.ReactNode;
} & FlexProps;

export const SectionVideo = ({
  children,
  title,
  videoId,
  ...props
}: SectionVideoProps) => {
  return (
    <Centrator py={[3, 11]} flexDirection={["column", "row"]} {...props}>
      <Box
        minWidth={["auto", "640px"]}
        flexShrink={0}
        borderRadius="default"
        boxShadow="0 0 32px rgba(0, 0, 0, 0.16)"
      >
        <Video videoId={videoId} />
      </Box>
      <Box pl={[0, 11]} pt={[3, 0]}>
        <Box as="h2">{title}</Box>
        <Box color="darkest">{children}</Box>
      </Box>
    </Centrator>
  );
};
