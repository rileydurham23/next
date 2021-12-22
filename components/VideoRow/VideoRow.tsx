import styled from "styled-components";

import Box from "components/Box";
import { css } from "components/system";
import Flex from "components/Flex";
import Link from "components/Link";
import Video from "components/Video";
import { Videos } from "./constants";

export interface VideoItem {
  author: string;
  date: string;
  href: string;
  labels: Array<string>;
  title: string;
  videoId: string;
}

export interface VideoRowProps {
  associatedLabels?: Array<string>;
  mainVideoId?: string;
  videos?: Array<VideoItem>;
}

const getSortedVideos = () => Videos.sort((a, b) => (a.date < b.date ? 1 : -1));

const getNVideos = (count: number, initialKeys: Array<string>) => {
  const keySet = new Set(initialKeys);
  const videosToReturn = [];
  const allVideos = getSortedVideos();
  let currentIndex = 0;

  while (videosToReturn.length < count && currentIndex < allVideos.length) {
    const { videoId } = allVideos[currentIndex];

    if (!keySet.has(videoId)) {
      videosToReturn.push(videoId);
      keySet.add(videoId);
    }

    currentIndex++;
  }

  return videosToReturn;
};

const getVideoIdsWithLabelCounts = (associatedLabels) => {
  const associatedLabelsSet = new Set(associatedLabels);

  return Videos.reduce((labelCountsAccumulator, video) => {
    const count = video.labels.reduce(
      (countAccumulator, label) =>
        associatedLabelsSet.has(label)
          ? countAccumulator + 1
          : countAccumulator,
      0
    );

    if (count > 0) {
      labelCountsAccumulator[video.videoId] = count;
    }

    return labelCountsAccumulator;
  }, {});
};

const getAssociatedVideos = (
  associatedLabels: Array<string>,
  mainVideoId: string
) => {
  if (associatedLabels.length === 0)
    return getSortedVideos()
      .filter((video) => video.videoId !== mainVideoId)
      .slice(0, 4);

  const matchingLabelsCounts = getVideoIdsWithLabelCounts(associatedLabels);
  const countKeys = Object.keys(matchingLabelsCounts).sort(
    (a, b) => matchingLabelsCounts[b] - matchingLabelsCounts[a]
  );
  const selectedKeys = countKeys
    .filter((videoId) => videoId !== mainVideoId)
    .slice(0, 4);
  const videoRemainder = 4 - selectedKeys.length;

  if (videoRemainder) {
    selectedKeys.push(...getNVideos(videoRemainder, selectedKeys));
  }

  const mappedVideos = Videos.reduce((acc, video) => {
    acc[video.videoId] = video;
    return acc;
  }, {});

  return selectedKeys.map((key) => mappedVideos[key]);
};

export const VideoItem = ({ author, href, title, videoId }: VideoItem) => {
  return (
    <Link
      href={href}
      mr={5}
      textDecoration="none"
      css={css({
        "&:last-child": {
          mr: [null, 0],
        },
      })}
    >
      <StyledVideoItemContainer>
        <Flex justifyContent={["center", null]}>
          <Video videoId={videoId} />
        </Flex>
        <Flex
          flexDirection="column"
          height="75px"
          justifyContent="space-between"
        >
          <StyledTitleContainer>{title}</StyledTitleContainer>
          <Box color="gray" fontSize="text-sm" mt={1}>
            By {author}
          </Box>
        </Flex>
      </StyledVideoItemContainer>
    </Link>
  );
};

export const VideoRow = ({ associatedLabels, mainVideoId }: VideoRowProps) => {
  const selectedVideos = getAssociatedVideos(associatedLabels, mainVideoId);

  return (
    <StyledRow>
      {selectedVideos.map((video, index) => {
        return (
          <VideoItem
            author={video.author}
            date={video.date}
            href={video.href}
            key={index}
            labels={video.labels}
            title={video.title}
            videoId={video.videoId}
          />
        );
      })}
    </StyledRow>
  );
};

const StyledRow = styled(Flex)(
  css({
    justifyContent: ["center", "center", "flex-start"],
    mb: [1, 11],
    flexFlow: ["row wrap", null],
    mt: [2, null],
  })
);

const StyledTitleContainer = styled(Flex)(
  css({
    fontSize: "text-lg",
    fontWeight: "bold",
    justifyContent: "left",
    lineHeight: "sm",
    mt: 3,
  })
);

const StyledVideoItemContainer = styled(Box)(
  css({
    borderRadius: "sm",
    color: "darkest",
    fontSize: "text-md",
    height: "100%",
    lineHeight: "md",
    mb: ["20px", null],
    transition: "all .3s",
    width: "236px",
    "&:hover": {
      transform: "translateY(-4px)",
    },
  })
);
