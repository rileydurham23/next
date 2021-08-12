import Section from "components/Section";
import { Centrator } from "components/Layout";
import Flex from "components/Flex";
import Box from "components/Box";
import Video from "components/Video";

export interface VideoBannerProps {
  title: string;
  subtitle?: string;
  videoId: string;
}

export const VideoBanner = ({ title, subtitle, videoId }: VideoBannerProps) => {
  return (
    <Section bg="wavelight">
      <Centrator flexDirection="column">
        <Flex
          flexDirection="column"
          alignItems="center"
          width={["auto", "100%"]}
          py={[5, 11]}
        >
          <Box
            fontSize={["header-3", "header-1"]}
            fontWeight="black"
            mb={subtitle ? [3, 5] : [5, 7]}
          >
            {title}
          </Box>
          <Box>
            {subtitle && (
              <Box
                mb={4}
                fontSize={["text-l", "text-xl"]}
                lineHeight="lg"
                color="darkest"
                maxWidth="600px"
                textAlign="center"
              >
                {subtitle}
              </Box>
            )}
          </Box>
          <Video width={1064} height={534} videoId={videoId} />
        </Flex>
      </Centrator>
    </Section>
  );
};
