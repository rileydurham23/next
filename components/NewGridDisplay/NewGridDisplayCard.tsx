import styled from "styled-components";
import css from "@styled-system/css";

import Flex from "components/Flex";
import Box from "components/Box";

import { Grid, Col, Row } from "react-styled-flexboxgrid";

interface NewGridDisplayCard {
  title: string;
  description: string;
}

export const NewGridDisplayCard = ({
  title,
  description,
}: NewGridDisplayCard) => {
  return (
    <Container xs={6} sm={6} md={3}>
      <Top></Top>
      <Bottom>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </Bottom>
    </Container>
  );
};

const Container = styled(Col)(
  css({
    backgroundColor: "white",
    border: "2px solid purple",
    borderRadius: "8px",
    flexDirection: "row",
    // flexDirection: "column",
    width: "230px",
    height: "304px",
    // mx: 5,
    flexGrow: 1,
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
  })
);
