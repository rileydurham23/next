import Box, { BoxProps } from "components/Box";

type Props = {
  videoId?: string;
  src?: string;
} & BoxProps;

const toSrc = (id: string): string => `https://www.youtube.com/embed/${id}`;

export default function Video({ src: rawSrc, videoId, ...props }: Props) {
  const src = videoId ? toSrc(videoId) : rawSrc;
  return (
    <Box
      width="640px"
      height="336px"
      maxWidth="100%"
      borderRadius="md"
      overflow="hidden"
      {...props}
    >
      <Box
        as="iframe"
        width="100%"
        height="100%"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Box>
  );
}
