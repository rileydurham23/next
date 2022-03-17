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
    title: "We Write It Down",
    description:
      "Writing things down helps to preserve and share our thoughts leads to smarter work and more scalable growth.",
  },
  {
    title: "We are professionals",
    description:
      "We treat each other the same way we treat our customers: with respect.",
  },
  {
    title: "We think slow",
    description:
      "Slow, academic, logical, calculating, conscious, even “boring” contemplation leads to better decisions.",
  },
  {
    title: "We are drivers, not passengers",
    description: "Drivers take control, responsibility and influence outcomes.",
  },
  {
    title: "We are builders",
    description:
      "Ideas themselves are useless. Building something new starts with unglamorous, tedious work that sets the foundation for scale later.",
  },
  {
    title: "We lift each other up",
    description: "We never elevate ourselves at someone’s expense.",
  },
  {
    title: "We assume the principle of charity",
    description:
      "When communication is brief and something is unclear, we assume that the other person is just as smart as we are, and is acting in good faith.",
  },
  {
    title: "We value each other’s time",
    description:
      "We put the extra effort into making it easy for others to work with us. We respect being “in the zone” and understand the cost of context shifting.",
  },
];

export const CultureCard = ({ title, description }) => {
  return (
    <CultureCardContainer>
      <Top>
        <StyledH3>{title}</StyledH3>
      </Top>
      <Bottom>
        <StyledP>{description}</StyledP>
      </Bottom>
    </CultureCardContainer>
  );
};

const CultureGrid = () => {
  return (
    <Centrator>
      <Container>
        <ThemeProvider theme={theme}>
          <Grid>
            <Row>
              {items.map((item) => (
                <Col key={item.title} xs>
                  <CultureCard
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

export default CultureGrid;

const StyledP = styled(P)(
  css({
    fontSize: "14px",
    lineHeight: "24px",
    color: "white",
  })
);

const StyledH3 = styled(H3)(
  css({
    color: "white",
    margin: 0,
    fontSize: "14px",
    lineHeight: "32px",
    marginBottom: 3,
  })
);

const Container = styled(Flex)(
  css({
    flexDirection: "column",
    mb: 9,
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

const CultureCardContainer = styled(Flex)(
  css({
    // border: "1px solid green",
    flexDirection: "column",
    fontSize: "12px",
    fontWeight: "regular",
    marginBottom: 7,
    color: "white",
    minWidth: ["284px", "100%"],
    maxWidth: "284px",
    width: ["100%", "284px"],
    padding: 0,
    pr: 7,
  })
);
