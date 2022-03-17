import styled, { ThemeProvider } from "styled-components";
import css from "@styled-system/css";

import { Grid, Col, Row } from "react-styled-flexboxgrid";

import Box from "components/Box";
import Centrator from "components/Centrator";
import Flex from "components/Flex";
import NewGridDisplay from "components/NewGridDisplay";
import SectionSimple from "components/Section";
import { H3, P } from "components/Text";

const theme = {
  flexboxgrid: {
    // Defaults
    gridSize: 12, // column
    gutterWidth: 1, // rem
    outerMargin: 0, // rem
    mediaQuery: "only screen",
    container: {
      // default if not fluid
      sm: 46, // rem
      md: 61, // rem
      lg: 76, // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 48, // em
      md: 64, // em
      lg: 75, // em
    },
  },
};

const items = [
  {
    title: "Remote-first culture",
    description:
      "Teleport is headquartered in Oakland, California but we have employees all over the world.",
  },
  {
    title: "Great benefits",
    description:
      "Medical, Dental, Paid-time off. Yes. 401K match. Of course. How about a $10,000/year Wellness benefit to use on anything that will keep you happy and productive? We’ve got that too.",
  },
  {
    title: "A piece of the pie",
    description:
      "Every employee receives equity, so joining our Teleport team is to be part of a promising future.",
  },
];

export const CareerCard = ({ title, description }) => {
  return (
    <CareerCardContainer>
      <Top>
        <StyledH3>{title}</StyledH3>
      </Top>
      <Bottom>
        <StyledP>{description}</StyledP>
      </Bottom>
    </CareerCardContainer>
  );
};

const CareersGrid = () => {
  return (
    <Centrator>
      <Container>
        <ThemeProvider theme={theme}>
          <Grid>
            <Row>
              {items.map((item) => (
                <Col key={item.title} xs>
                  <CareerCard
                    title={item.title}
                    description={item.description}
                  />
                </Col>
              ))}
            </Row>
          </Grid>
        </ThemeProvider>
      </Container>
    </Centrator>
  );
};

export default CareersGrid;

const StyledP = styled(P)(
  css({
    fontSize: "14px",
    lineHeight: "24px",
    color: "darkest",
  })
);

const StyledH3 = styled(H3)(
  css({
    color: "darkest",
    margin: 0,
    fontSize: "14px",
    lineHeight: "32px",
    marginBottom: 1,
  })
);

const Container = styled(Flex)(
  css({
    flexDirection: "column",
  })
);

const Bottom = styled(Flex)(
  css({
    flexDirection: "column",
  })
);

const Top = styled(Box)(
  css({
    height: "50%",
    width: "100%",
  })
);

const CareerCardContainer = styled(Flex)(
  css({
    flexDirection: "column",
    fontSize: "12px",
    fontWeight: "regular",
    marginBottom: 11,
    color: "darkest",
    minWidth: ["284px", "100%"],
    maxWidth: "284px",
    width: ["100%", "284px"],
    padding: 0,
  })
);
