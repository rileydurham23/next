import styled, { keyframes, css as styledCss } from "styled-components";
import css from "@styled-system/css";
import { all, StyledSystemProps } from "components/system";
import Box, { BoxProps } from "components/Box";
import Flex from "components/Flex";
import Image from "components/Image";
import NextImage from "next/image";
import crew from "./data";

interface Photo {
  title: string;
  url: string;
}

function getGroups(): [Photo[], Photo[]] {
  const queue: Photo[] = [];
  const group1: Photo[] = [];
  const group2: Photo[] = [];

  for (const member of crew) {
    if (member.photos.length) {
      const photos = member.photos.map((photo) => ({
        title: `${member.firstName}, ${member.role}`,
        url: photo,
      }));

      queue.push(...photos);
      const group = group1.length < crew.length / 2 ? group1 : group2;
      group.push(queue.pop());
    }
  }

  for (let i = 0; i < queue.length; i++) {
    if (i % 2) {
      group2.unshift(queue[i]);
    } else {
      group2.push(queue[i]);
    }
  }

  return [group1, group2];
}

export default function CrewGallery(props: BoxProps) {
  const [group1, group2] = getGroups();
  return (
    <Box overflow="hidden" {...props}>
      <StyledRowWrapper>
        <StyledRow
          height={["250px", "250px", "500px"]}
          animationDuration={["200s", "200s", "150s"]}
        >
          {group1.map((photo, index) => (
            <Photo key={index} photo={photo} imgHeight="topRow" />
          ))}
        </StyledRow>
        <StyledRow
          height={["190px", "190px", "380px"]}
          animationDuration={["250s", "250s", "200s"]}
          mt="3"
        >
          {group2.map((photo, index) => (
            <Photo key={index} photo={photo} imgHeight="bottomRow" />
          ))}
        </StyledRow>
      </StyledRowWrapper>
    </Box>
  );
}

interface PhotoProps {
  photo: Photo;
  imgHeight: "topRow" | "bottomRow";
  // width: number;
}

function Photo({ photo, imgHeight }: PhotoProps) {
  const heightValue =
    imgHeight === "topRow"
      ? ["250px", "250px", "500px"]
      : ["190px", "190px", "380px"];

  const StyledImgContainer = styled(Flex)(
    css({
      height: heightValue,
      width: "500",
      // display: "block",
      position: "relative",
    })
  );
  return (
    <>
      {/* // <StyledLI> */}
      {/* <Image
        src={photo.url}
        alt={photo.title}
        title={photo.title}
        width="auto"
        height="100%"
      /> */}
      {/* <Flex position="relative"> */}
      {/* <StyledLogoShell> */}
      <StyledImgContainer>
        <NextImage
          src={photo.url}
          alt={photo.title}
          title={photo.title}
          layout="fill"
          objectFit="contain"
          // width="400"
          // height="500"
        />
      </StyledImgContainer>

      {/* </StyledLogoShell> */}
      {/* </Flex> */}
      <StyledCaption>{photo.title}</StyledCaption>
      {/* // </StyledLI> */}
    </>
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
  })
);

const StyledLogoShell = styled(Flex)(
  css({
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#273264",
    height: "700px",
    width: "500px",
    // height: "100%",
    // width: "auto",
    borderRadius: "md",
    m: 3,
  })
);
