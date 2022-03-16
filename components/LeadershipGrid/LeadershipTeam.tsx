import styled from "styled-components";
import css from "@styled-system/css";

import Flex from "components/Flex";
import Box from "components/Box";

// import NewGridDisplay, { NewGridDisplayCard } from "components/NewGridDisplay";
import Section from "components/Section";
import { Grid, Col, Row } from "react-styled-flexboxgrid";

const leadershipList = [
  // {
  //   name: "Ev Kontsevoy",
  //   title: "Co-founder and CEO",
  // },
  // {
  //   name: "Alexander Klizentas",
  //   title: "Co-founder and CTO",
  // },
  // {
  //   name: "Taylor Wakefield",
  //   title: "Co-founder and COO",
  // },
  // {
  //   name: "Michael Ferranti",
  //   title: "CMO",
  // },
  // {
  //   name: "Hector Hernandez",
  //   title: "CRO",
  // },
  // {
  //   name: "Xin Ding",
  //   title: "VP Products",
  // },
  // {
  //   name: "Bardia Shahali",
  //   title: "VP Sales",
  // },
  // {
  //   name: "Phil Simpson",
  //   title: "VP Alliances",
  // },
  // {
  //   name: "Reed Lodan",
  //   title: "VP Security",
  // },
];

const mockList = [
  {
    name: "1",
    title: "one",
  },
  {
    name: "2",
    title: "two",
  },
  {
    name: "3",
    title: "three",
  },
  {
    name: "4",
    title: "four",
  },
  {
    name: "5",
    title: "five",
  },
  {
    name: "6",
    title: "Six",
  },
  {
    name: "7",
    title: "Seven",
  },
  {
    name: "8",
    title: "Eight",
  },
  {
    name: "9",
    title: "Nine",
  },
];

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

const LeadershipGrid = () => {
  return (
    <Section bg="lines">
      <StyledGrid>
        <Row>
          {mockList.map((item) => (
            <Col key={item.name} xs>
              <NewGridDisplayCard title={item.name} description={item.title} />
            </Col>
          ))}
        </Row>
      </StyledGrid>
    </Section>
  );
};

export default LeadershipGrid;

const StyledGrid = styled(Grid)(
  css({
    // maxWidth: "1700px",
  })
);

const Container = styled(Flex)(
  css({
    backgroundColor: "white",
    border: "2px solid grey",
    borderRadius: "8px",
    flexDirection: "column",
    width: "230px",
    height: "304px",
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
