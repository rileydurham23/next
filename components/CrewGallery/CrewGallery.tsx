import styled, { keyframes, css as styledCss } from "styled-components";
import { css, all, StyledSystemProps } from "components/system";
import Box, { BoxProps } from "components/Box";
import NextImage from "next/image";
import crew, { Photo as DataPhoto } from "./data";

interface Photo {
  title: string;
  url: string;
  width: string[];
  height: string[];
}

interface Portrait extends DataPhoto {
  title: string;
}

const getSizeImages = (
  heights: string[],
  photoWidth: number,
  photoHeight: number
) => {
  const width = [];
  const height = [];

  for (const heightImage of heights) {
    const numberHeight = parseInt(heightImage, 10);
    height.push(heightImage);

    const widthImage = Math.round((numberHeight / photoHeight) * photoWidth);
    width.push(`${widthImage}px`);
  }
  return { height, width };
};

const toFinalPhoto = (photo: Portrait, heights: string[]) => {
  const { width, height } = getSizeImages(heights, photo.width, photo.height);

  return {
    title: photo.title,
    url: photo.src,
    width: width,
    height: height,
  };
};

const GROUPE_ONE_HEIGHT = ["250px", "250px", "500px"];
const GROUPE_TWO_HEIGHT = ["190px", "190px", "380px"];

function getGroups(): [Photo[], Photo[]] {
  const queue: Portrait[] = [];
  const group1: Portrait[] = [];
  const group2: Portrait[] = [];

  for (const member of crew) {
    const groupNumber = group1.length < crew.length / 2 ? 1 : 2;

    if (member.photos.length) {
      queue.push(
        ...member.photos.map((photo) => ({
          ...photo,
          title: `${member.firstName}, ${member.role}`,
        }))
      );
      const group = groupNumber === 1 ? group1 : group2;
      group.push(queue.pop());
    }
  }

  const photosGroup1 = group1.map((photo) =>
    toFinalPhoto(photo, GROUPE_ONE_HEIGHT)
  );

  const photosGroup2 = group2.map((photo) =>
    toFinalPhoto(photo, GROUPE_TWO_HEIGHT)
  );

  for (let i = 0; i < queue.length; i++) {
    if (i % 2) {
      photosGroup2.unshift(toFinalPhoto(queue[i], GROUPE_TWO_HEIGHT));
    } else {
      photosGroup1.push(toFinalPhoto(queue[i], GROUPE_ONE_HEIGHT));
    }
  }

  return [photosGroup1, photosGroup2];
}

export default function CrewGallery(props: BoxProps) {
  const [group1, group2] = getGroups();
  return (
    <Box overflow="hidden" {...props}>
      <StyledRowWrapper>
        <StyledRow
          height={GROUPE_ONE_HEIGHT}
          animationDuration={["200s", "200s", "150s"]}
        >
          {group1.map((photo, index) => (
            <Photo key={index} photo={photo} />
          ))}
        </StyledRow>
        <StyledRow
          height={GROUPE_TWO_HEIGHT}
          animationDuration={["250s", "250s", "200s"]}
          mt="3"
        >
          {group2.map((photo, index) => (
            <Photo key={index} photo={photo} />
          ))}
        </StyledRow>
      </StyledRowWrapper>
    </Box>
  );
}

interface PhotoProps {
  photo: Photo;
}

function Photo({ photo }: PhotoProps) {
  return (
    <StyledLI width={photo.width} height={photo.height}>
      <NextImage
        src={photo.url}
        alt={photo.title}
        title={photo.title}
        layout="fill"
        objectFit="contain"
      />
      <StyledCaption>{photo.title}</StyledCaption>
    </StyledLI>
  );
}

const shiftAnimation = keyframes`
  0% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(calc(min(-150vw, -100%) + 100vw));
  }
  100% {
    transform: translateX(0%);
  }
`;

const StyledRowWrapper = styled("div")<StyledSystemProps>(
  css({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "4000px",
  })
);

const StyledRow = styled("ul")<StyledSystemProps>(
  css({
    display: "inline-flex",
    listStyle: "none",
    minWidth: "100vw",
    m: 0,
    p: 0,
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    willChange: "transform",
  }),
  styledCss`animation-name: ${shiftAnimation};`,
  all
);

const StyledCaption = styled("p")<StyledSystemProps>(
  css({
    position: "absolute",
    bottom: ["8px", "16px"],
    left: "0",
    m: 0,
    maxWidth: "80%",
    padding: "1",
    color: "white",
    fontSize: "text-sm",
    borderTopRightRadius: "default",
    borderBottomRightRadius: "default",
    bg: " rgba(0, 0, 0, 0.64)",
  })
);

const StyledLI = styled("li")<StyledSystemProps>(
  css({
    position: "relative",
    height: "100%",
    flexShrink: 0,
    "& + &": { ml: 3 },
  }),
  all
);
