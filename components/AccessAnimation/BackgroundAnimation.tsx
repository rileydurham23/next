import css from "@styled-system/css";
import { keyframes } from "styled-components";
import styled from "styled-components";

import Box from "components/Box";
import Flex from "components/Flex";

type OrbitDirection = "clockwise" | "counter-clockwise";

interface OrbitProps {
  direction: OrbitDirection;
  distance: number;
  key: number;
  speed: number;
  timeOffset: string;
}

export const BackgroundAnimation = () => (
  <BackgroundAnimationContainer>
    <Container>
      {[1, 2, 3, 4].map((n) => (
        <Orbit
          direction={n % 2 === 0 ? "clockwise" : "counter-clockwise"}
          distance={n + 1}
          key={n}
          speed={n * 0.2}
          // timeOffset was used to allow for the planets to be staggered on their orbits
          timeOffset={`${n * -13}s`}
        >
          <PlanetContainer>
            <Planet />
            <Planet />
          </PlanetContainer>
        </Orbit>
      ))}
    </Container>
  </BackgroundAnimationContainer>
);

// width and height are set at 100% so the component can be rendered at any arbitrary size
const BackgroundAnimationContainer = styled(Box)(
  css({
    backgroundColor: "white",
    height: "100%",
    position: "absolute",
    width: "100%",
  })
);

const clockwiseRotationAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(360deg);
  }
`;

const counterClockwiseRotationAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(-360deg);
  }
`;

const Container = styled(Flex)(
  css({
    alignItems: "center",
    borderRadius: "50px",
    boxShadow: "0 0 10px 5px #F0F2F4",
    height: "100%",
    justifyContent: "center",
    top: 0,
    width: "100%",
  })
);

const SPACE_BETWEEN_ORBITS = 6;

const Orbit = styled(Flex)<OrbitProps>`
  align-items: center;
  animation-delay: ${({ timeOffset }) => timeOffset};
  animation-duration: 30s;
  animation-iteration-count: infinite;
  animation-name: ${({ direction }) =>
    direction === "clockwise"
      ? clockwiseRotationAnimation
      : counterClockwiseRotationAnimation};
  animation-timing-function: linear;
  border: 1px solid #d2dbdf;
  border-radius: 50%;
  bottom: ${({ distance }) => `${distance * SPACE_BETWEEN_ORBITS}%`};
  justify-content: space-between;
  left: ${({ distance }) => `${distance * SPACE_BETWEEN_ORBITS}%`};
  position: absolute;
  right: ${({ distance }) => `${distance * SPACE_BETWEEN_ORBITS}%`};
  top: ${({ distance }) => `${distance * SPACE_BETWEEN_ORBITS}%`};
`;

const PLANET_SIZE = 12;

const Planet = styled(Box)(
  css({
    width: `${PLANET_SIZE}px`,
    backgroundColor: "#D2DBDF",
    height: `${PLANET_SIZE}px`,
    borderRadius: "circle",
  })
);

const PlanetContainer = styled(Flex)(
  css({
    justifyContent: "space-between",
    marginTop: "-3.6rem",
    marginRight: "-0.2rem",
    marginLeft: "-0.2rem",
    width: "calc(100% + 1.8rem)",
  })
);
