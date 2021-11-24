import { ReactNode } from "react";
import Box from "components/Box";
import Flex from "components/Flex";
import Video from "components/Video";

export type Props = {
  video: string;
  description: string;
  children: ReactNode;
};

export default function SignupDescription({
  video,
  description,
  children,
}: Props) {
  return (
    <Flex
      width="100%"
      position="relative"
      flexDirection="column"
      alignItems={["stretch", "center", "flex-start"]}
    >
      <Video videoId={video} width={640} height={360} mt="4" />
      <Box position={["static", "static", "absolute"]} right="0" top="0" my="4">
        {children}
      </Box>

      <Box
        as="p"
        text="text-lg"
        mt="3"
        alignSelf="flex-start"
        width={["100%", "80%", "50%"]}
        color="darkest"
      >
        {description}
      </Box>
    </Flex>
  );
}
