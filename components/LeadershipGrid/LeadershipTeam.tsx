import NewGridDisplay, { NewGridDisplayCard } from "components/NewGridDisplay";
import Section from "components/Section";
import { Grid, Col, Row } from "react-styled-flexboxgrid";

const LeadershipRow1 = [
  {
    name: "Ev Kontsevoy",
    title: "Co-founder and CEO",
  },
  {
    name: "Alexander Klizentas",
    title: "Co-founder and CTO",
  },
  {
    name: "Taylor Wakefield",
    title: "Co-founder and COO",
  },
];

const LeadershipRow2 = [
  {
    name: "Michael Ferranti",
    title: "CMO",
  },
  {
    name: "Hector Hernandez",
    title: "CRO",
  },
  {
    name: "Xin Ding",
    title: "VP Products",
  },
];

const LeadershipRow3 = [
  {
    name: "Bardia Shahali",
    title: "VP Sales",
  },
  {
    name: "Phil Simpson",
    title: "VP Alliances",
  },
  {
    name: "Reed Lodan",
    title: "VP Security",
  },
];

const leadershipList = [
  {
    name: "Ev Kontsevoy",
    title: "Co-founder and CEO",
  },
  {
    name: "Alexander Klizentas",
    title: "Co-founder and CTO",
  },
  {
    name: "Taylor Wakefield",
    title: "Co-founder and COO",
  },
  {
    name: "Michael Ferranti",
    title: "CMO",
  },
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

const LeadershipGrid = () => {
  return (
    <Section bg="lines">
      <NewGridDisplay sectionTitle="Leadership Team">
        {LeadershipRow1.map((item) => (
          <Row key={item.name}>
            <NewGridDisplayCard
              title={item.name}
              description={item.title}
              key={item.name}
            />
          </Row>
        ))}
      </NewGridDisplay>
    </Section>
  );
};

export default LeadershipGrid;
