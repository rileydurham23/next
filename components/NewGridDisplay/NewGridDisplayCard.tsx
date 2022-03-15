import styled from "styled-components";
import css from "@styled-system/css";

import Flex from "components/Flex";
import Box from "components/Box";

interface NewGridDisplayCard {
  title: string;
  description: string;
}

export const NewGridDisplayCard = ({
  title,
  description,
}: NewGridDisplayCard) => {
  return (
    <Container>
      <Top></Top>
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
    border: "2px solid purple",
    borderRadius: "8px",
    flexDirection: "row",
    width: "230px",
    height: "304px",
    // mx: 5,
    // flexGrow: 1,
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
