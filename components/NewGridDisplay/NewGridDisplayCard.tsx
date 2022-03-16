import styled from "styled-components";
import css from "@styled-system/css";

import Box from "components/Box";
import Flex from "components/Flex";

interface NewGridDisplayCard {
  title: string;
  description: string;
}

export const NewGridDisplayCard = ({ title, description }) => {
  return (
    <Container>
      <Top />
      <Bottom>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </Bottom>
    </Container>
  );
};

const Container = styled(Flex)(
  css({
    backgroundColor: "white",
    border: "2px solid grey",
    borderRadius: "8px",
    flexDirection: "column",
    minWidth: ["230px", null],
    width: [null, "230px"],
    height: "304px",
    marginBottom: 5,
    overflow: "hidden",
  })
);

const Bottom = styled(Flex)(
  css({
    flexDirection: "column",
  })
);

const Top = styled(Box)(
  css({
    backgroundColor: "black",
    height: "50%",
    width: "100%",
  })
);
