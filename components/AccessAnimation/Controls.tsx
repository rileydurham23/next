import css from "@styled-system/css";
import styled from "styled-components";

import Flex from "components/Flex";
import Image from "components/Image";

const audit = require("./assets/audit.svg");
const authenticate = require("./assets/authenticate.svg");
const authorize = require("./assets/authorize.svg");
const connect = require("./assets/connect.svg");
const fingerprint = require("./assets/fingerprint.svg");

// each pie slice needed its own transform_origin depending on where they were located
const determineTransformOrigin = (id) => {
  switch (id) {
    case "default":
      return "center";
    case "connect":
      return "bottom right";
    case "authenticate":
      return "bottom left";
    case "audit":
      return "top right";
    case "authorize":
      return "top left";
  }
};

interface ControlsProps {
  onChange: (id) => void;
}

export const Controls: React.FC<ControlsProps> = ({ onChange }) => {
  const handleChange = (event) => {
    const id = event.currentTarget.id;
    onChange(id);
  };

  return (
    <ControlsContainer>
      <FingerprintContainer
        cursor="pointer"
        id="default"
        onClick={handleChange}
      >
        <Fingerprint alt="fingerprint button" role="button" src={fingerprint} />
      </FingerprintContainer>

      <Row>
        <PieSliceButton id="connect" onClick={handleChange}>
          <Image alt="connected rings" src={connect} />
        </PieSliceButton>
        <PieSliceButton id="authenticate" onClick={handleChange}>
          <Image alt="shield with check on it" src={authenticate} />
        </PieSliceButton>
      </Row>

      <Row>
        <PieSliceButton id="audit" onClick={handleChange}>
          <Image alt="check mark on clipboard" src={audit} />
        </PieSliceButton>
        <PieSliceButton id="authorize" onClick={handleChange}>
          <Image alt="secure password" src={authorize} />
        </PieSliceButton>
      </Row>
    </ControlsContainer>
  );
};

const PieSliceButton = styled.button`
  background-color: transparent;
  border: none;
  filter: grayscale(100%);
  flex: 1;
  transform-origin: ${({ id }) => determineTransformOrigin(id)};
  transition: .2s all;
  z-index: 100;

  &:hover {
    cursor: pointer;
    filter: grayscale(0%);
  };

  &:focus {
    filter: grayscale(0%) drop-shadow(3px 5px 12px rgb(0 0 0 / 0.4));
    transform: scale(1.15);
  };
  
  &:active {
    filter: grayscale(0%);
  },
`;

const Fingerprint = styled(Image)(
  css({
    transition: "all .3s",
    width: "25%",
    zIndex: "105",

    "&:focus": {
      filter: "grayscale(0%)",
      transform: "scale(1.25)",
    },
    "&:hover": {
      filter: "grayscale(0%)",
    },
    "&:active": {
      transform: "scale(1.25)",
    },
  })
);

const FingerprintContainer = styled(Flex)(
  css({
    bottom: 0,
    justifyContent: "center",
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  })
);

const Row = styled(Flex)(
  css({
    flex: 1,
  })
);

const ControlsContainer = styled(Flex)(
  css({
    flexDirection: "column",
    width: "100%",
  })
);
