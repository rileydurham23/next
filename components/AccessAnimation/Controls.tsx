import css from "@styled-system/css";
import styled from "styled-components";

import Flex from "components/Flex";
import Image from "components/Image";

const fingerprint = require("./assets/fingerprint.svg");
import Connect from "./assets/connect.svg?react";
import Authorize from "./assets/authorize.svg?react";
import Audit from "./assets/audit.svg?react";
import Authenticate from "./assets/authenticate.svg?react";

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
          <Connect />
        </PieSliceButton>
        <PieSliceButton id="authenticate" onClick={handleChange}>
          <Authenticate />
        </PieSliceButton>
      </Row>

      <Row>
        <PieSliceButton id="audit" onClick={handleChange}>
          <Audit />
        </PieSliceButton>
        <PieSliceButton id="authorize" onClick={handleChange}>
          <Authorize />
        </PieSliceButton>
      </Row>
    </ControlsContainer>
  );
};

const PieSliceButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  flex: 1;
  transform-origin: ${({ id }) => determineTransformOrigin(id)};
  transition: 0.2s all;
  z-index: 100;
  outline: none;

  svg {
    width: 100%;
    height: 100%;

    // CONTAINER SHAPE
    .connect_svg__cls-1,
    .audit_svg__cls-1,
    .authorize_svg__cls-1,
    .authenticate_svg__cls-1 {
      fill: #fff;
      filter: drop-shadow(0 1px 3px rgba(101, 31, 255, 0.24));
    }

    // BORDER, TEXT, LOGO
    .connect_svg__cls-2,
    .connect_svg__cls-3,
    .connect_svg__cls-6,
    .connect_svg__cls-4,
    .audit_svg__cls-2,
    .audit_svg__cls-3,
    .audit_svg__cls-6,
    .audit_svg__cls-4,
    .authorize_svg__cls-2,
    .authorize_svg__cls-3,
    .authorize_svg__cls-6,
    .authorize_svg__cls-4,
    .authorize_svg__cls-8,
    .authenticate_svg__cls-2,
    .authenticate_svg__cls-3,
    .authenticate_svg__cls-4 {
      fill: #cdd8dd;
      transition: all 0.3s;
    }

    // ICON WRAPPER
    .connect_svg__cls-5,
    .authorize_svg__cls-5,
    .authenticate_svg__cls-5,
    .audit_svg__cls-5 {
      fill: #f6f8fa;
    }

    // ICON
    .connect_svg__cls-7,
    .connect_svg__cls-8,
    .connect_svg__cls-9,
    .authenticate_svg__cls-6,
    .authenticate_svg__cls-8,
    .authenticate_svg__cls-9,
    .authenticate_svg__cls-10,
    .audit_svg__cls-7,
    .audit_svg__cls-8,
    .authorize_svg__cls-6,
    .authorize_svg__cls-8 {
      fill: #cdd8dd;
      transition: all 0.3s;
    }
  }

  // HOVER & FOCUS STATE CHANGES
  &:hover,
  &:focus {
    cursor: pointer;
    filter: grayscale(0%);

    .connect_svg__cls-2,
    .connect_svg__cls-3,
    .connect_svg__cls-6,
    .connect_svg__cls-4,
    .audit_svg__cls-2,
    .audit_svg__cls-3,
    .audit_svg__cls-6,
    .audit_svg__cls-4,
    .authorize_svg__cls-2,
    .authorize_svg__cls-3,
    .authorize_svg__cls-4,
    .authenticate_svg__cls-2,
    .authenticate_svg__cls-3,
    .authenticate_svg__cls-4 {
      fill: #572fcf;
    }

    // ICON
    .connect_svg__cls-7,
    .connect_svg__cls-8,
    .connect_svg__cls-9,
    .authenticate_svg__cls-6,
    .authenticate_svg__cls-8,
    .authenticate_svg__cls-9,
    .authenticate_svg__cls-10,
    .audit_svg__cls-7,
    .audit_svg__cls-8,
    .authorize_svg__cls-6,
    .authorize_svg__cls-8 {
      fill: #651fff;
    }
  }

  // FOCUS STATE INCREASE SCALE
  &:focus {
    transform: scale(1.15);
  }
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
