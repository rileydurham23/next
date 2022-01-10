import css from "@styled-system/css";
import Box from "components/Box";
import { FlexProps } from "components/Flex";
import Centrator from "components/Centrator";
import Video from "components/Video";
import { P } from "components/MDX";

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
        maxWidth="640px"
        minWidth={["0", "640px"]}
        flexShrink={0}
        borderRadius="default"
        boxShadow="0 0 32px rgba(0, 0, 0, 0.16)"
        alignSelf="flex-start"
      >
        <Video videoId={videoId} />
      </Box>
      <Box pl={[0, 11]} pt={[3, 0]}>
        <Box
          as="h2"
          fontSize="header-1"
          fontWeight="black"
          color="black"
          mb={3}
        >
          {title}
        </Box>
        <Box
          fontSize={["text-md", "text-xl"]}
          lineHeight={["md", "lg"]}
          color="dark-gray"
          css={css({
            [`& > ${P}`]: {
              fontSize: "inherit",
              lineHeight: "inherit",
            },
          })}
        >
          {children}
        </Box>
      </Box>
    </Centrator>
  );
};
