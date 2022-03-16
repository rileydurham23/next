import styled, { ThemeProvider } from "styled-components";
import css from "@styled-system/css";

import Box from "components/Box";
import Centrator from "components/Centrator";
import Flex from "components/Flex";
import SectionSimple from "components/Section";
import { H1 } from "components/Text";
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

const theme = {
  flexboxgrid: {
    // Defaults
    gridSize: 12, // column
    gutterWidth: 2, // how much space between cards (32px)
    outerMargin: 0, // rem
    container: {
      // default if not fluid
      sm: 46, // rem
      md: 57, // rem
      lg: 80, // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 48, // em
      md: 64, // em
      lg: 75, // em
    },
  },
};

export const LeadershipCard = ({ title, description }) => {
  return (
    <LeadershipCardContainer>
      <Top />
      <Bottom>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </Bottom>
    </LeadershipCardContainer>
  );
};

const LeadershipGrid = () => {
  return (
    <SectionSimple bg="grayWave">
      <OuterContainer>
        <Centrator>
          <StyledH1>Leadership Team</StyledH1>
        </Centrator>
        <CardContainer>
          <ThemeProvider theme={theme}>
            <Grid>
              <StyledRow>
                {mockList.map((item) => (
                  <Col key={item.name}>
                    <LeadershipCard
                      title={item.name}
                      description={item.title}
                    />
                  </Col>
                ))}
                <BlankCard />
              </StyledRow>
            </Grid>
          </ThemeProvider>
        </CardContainer>
      </OuterContainer>
    </SectionSimple>
  );
};

export default LeadershipGrid;

const BlankCard = styled(Box)(
  css({
    width: [0, "255px"],
  })
);

const OuterContainer = styled(Box)(
  css({
    pt: [2, 11],
    pb: [2, 7],
  })
);

const StyledRow = styled(Row)(
  css({
    display: "flex",
    justifyContent: "center",
  })
);

const StyledH1 = styled(H1)(
  css({
    fontSize: "header-1",
    marginBottom: 5,
  })
);

const CardContainer = styled(Flex)(
  css({
    flexDirection: "column",
  })
);

const LeadershipCardContainer = styled(Flex)(
  css({
    backgroundColor: "white",
    borderRadius: "8px",
    flexDirection: "column",
    width: ["100%", "230px"],
    minWidth: ["230px", "230px"],

    height: "304px",
    marginBottom: 5,
    overflow: "hidden",
    boxShadow: "0px 0px 8px rgba(12, 12, 14, 0.24)",
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
