import Section from "components/Section";
import Centrator from "components/Centrator";
import Box from "components/Box";
import Video from "components/Video";
import { BGColor } from "components/Section";

export interface VideoBannerProps {
  videoId: string;
  title?: string;
  subtitle?: string;
  bg?: BGColor;
}

export const VideoBanner = ({
  title,
  subtitle,
  videoId,
  bg = "grayWave",
}: VideoBannerProps) => {
  return (
    <Section bg={bg}>
      <Centrator flexDirection="column" py={[5, 11]} alignItems="center">
        {title && (
          <Box
            as="p"
            fontSize={["header-3", "header-1"]}
            fontWeight="black"
            mb={subtitle ? [3, 5] : [5, 7]}
          >
            {title}
          </Box>
        )}
        {subtitle && (
          <Box
            as="p"
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
        <Video width={1064} height={534} videoId={videoId} />
      </Centrator>
    </Section>
  );
};
