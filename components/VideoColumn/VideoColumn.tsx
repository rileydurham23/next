import styled from "styled-components";

import Box from "components/Box";
import { css } from "components/system";
import Flex from "components/Flex";
import Link from "components/Link";
import Video from "components/Video";
import { Videos } from "./constants";

interface VideoItem {
  href: string;
  title: string;
  videoId: string;
}

export interface VideoColumnProps {
  videos?: Array<VideoItem>;
}

export const VideoItem = ({ href, title, videoId }: VideoItem) => {
  return (
    <Link href={href} textDecoration="none">
      <StyledVideoItemContainer>
        <Flex height="20%" justifyContent={["center", ""]}>
          <Video
            hasRoundedEdges={false}
            height={112}
            videoId={videoId}
            width={200}
          />
        </Flex>
        <Flex
          justifyContent={["center", ""]}
          lineHeight="md"
          maxWidth="95%"
          pt={1}
        >
          {title}
        </Flex>
      </StyledVideoItemContainer>
    </Link>
  );
};

export const VideoColumn = ({ videos = Videos }: VideoColumnProps) => {
  return (
    <StyledColumn flexDirection="column">
      {videos.map((video, index) => (
        <VideoItem
          href={video.href}
          key={index}
          title={video.title}
          videoId={video.videoId}
        />
      ))}
    </StyledColumn>
  );
};

const StyledColumn = styled(Flex)(
  css({
    pt: 5,
    pb: [3, 5],
    px: 5,
    maxWidth: ["100%", "300px"],
  })
);

const StyledVideoItemContainer = styled(Box)(
  css({
    borderRadius: "sm",
    boxShadow: "0 0 2px rgb(0 0 0 / 12%), 0 2px 2px rgb(0 0 0 / 24%)",
    color: "darkest",
    fontSize: "text-md",
    lineHeight: "md",
    mb: [2, 3],
    padding: 3,
    transition: "all .3s",
    "&:hover": {
      boxShadow: "0 0 8px rgb(0 0 0 / 12%), 0 8px 8px rgb(0 0 0 / 24%)",
      transform: "translateY(-4px)",
    },
  })
);
