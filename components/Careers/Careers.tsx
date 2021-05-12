import styled, { keyframes, css as styledCss } from "styled-components";
import css from "@styled-system/css";
import { all, StyledSystemProps } from "components/system";
import Box from "components/Box";
import Heading from "components/Heading";
import { Centrator } from "components/Layout";
import Button from "components/Button";
import Image from "components/Image";
import Link from "components/Link";
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

export default function Careers() {
  const [group1, group2] = getGroups();
  return (
    <StyledWrapper gradient="lightGrayToDark">
      <Centrator flexDirection="column" alignItems="center">
        <Heading
          title="Careers at Teleport"
          subtitle="Join Us"
          align="center"
        />
        <Box as="p" mt="5" color="darkest" text="text-xl" textAlign="center">
          We are growing quickly. Join us to help move cloud computing into a
          brighter, and more secure, future.
        </Box>
        <Button
          as={Link}
          href="https://jobs.lever.co/teleport"
          variant="primary"
          mt="6"
          shape="lg"
        >
          Get Started
        </Button>
      </Centrator>
      <Box mt={[5, 10]} overflow="hidden">
        <StyledRowWrapper>
          <StyledRow
            height={["250px", "250px", "500px"]}
            animationDuration={["140s", "140s", "100s"]}
          >
            {group1.map((photo, index) => (
              <Photo key={index} photo={photo} />
            ))}
          </StyledRow>
          <StyledRow
            height={["190px", "190px", "380px"]}
            animationDuration={["180s", "180s", "120s"]}
            mt="3"
          >
            {group2.map((photo, index) => (
              <Photo key={index} photo={photo} />
            ))}
          </StyledRow>
        </StyledRowWrapper>
      </Box>
    </StyledWrapper>
  );
}

interface PhotoProps {
  photo: Photo;
}

function Photo({ photo }: PhotoProps) {
  return (
    <StyledLI>
      <Image
        src={photo.url}
        alt={photo.title}
        title={photo.title}
        loading="lazy"
        width="auto"
        height="100%"
      />
      <StyledCaption>{photo.title}</StyledCaption>
    </StyledLI>
  );
}

const StyledWrapper = styled("section")<StyledSystemProps>(
  css({
    boxSizing: "border-box",
    width: "100%",
    pt: [5, 10],
    pb: "4",
  }),
  all
);

const shiftAnimation = keyframes`
  0% {
    transform: translateX(0%);
  }

  50% {
    transform: translateX(calc(-100% + 100vw))
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
