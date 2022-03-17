import styled, { ThemeProvider } from "styled-components";
import css from "@styled-system/css";

import { Grid, Col, Row } from "react-styled-flexboxgrid";

import Box from "components/Box";
import Image from "components/Image";
import Flex from "components/Flex";
import Bessemer from "./assets/bessemer.png";
import Capital from "./assets/capital.png";
import Insight from "./assets/insight.png";
import KleinerPerkins from "./assets/kleiner-perkins.png";

interface Logo {
  source: string;
  alt: string;
}

const logos: Array<Logo> = [
  { source: KleinerPerkins, alt: "kleiner-perkins logo" },
  { source: Bessemer, alt: "bessemer logo" },
  { source: Insight, alt: "insight logo" },
  { source: Capital, alt: "capital logo" },
];

const theme = {
  flexboxgrid: {
    // Defaults
    gridSize: 12, // column
    gutterWidth: 1, // how much space between cards (32px)
    outerMargin: 0, // rem
    container: {
      // default if not fluid
      sm: 20, // rem
      md: 40, // rem
      lg: 50, // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 48, // em
      md: 64, // em
      lg: 75, // em
    },
  },
};

const LogosGrid = () => {
  return (
    <Outside>
      <ThemeProvider theme={theme}>
        <Grid>
          <StyledRow>
            {logos.map((logo) => (
              <Col key={logo.alt}>
                <Card key={logo.alt}>
                  <Image src={logo.source} alt={logo.alt} />
                </Card>
              </Col>
            ))}
          </StyledRow>
        </Grid>
      </ThemeProvider>
    </Outside>
  );
};

export default LogosGrid;

const StyledRow = styled(Row)(
  css({
    display: "flex",
    justifyContent: "center",
  })
);

const Outside = styled(Flex)(
  css({
    flexDirection: "column",
    // border: "1px solid green",
    // width: "100%",
  })
);

const Card = styled(Flex)(
  css({
    width: "244px",
    height: "112px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "4px",
    boxShadow: "0px 0px 8px rgba(12, 12, 14, 0.24)",
    padding: "20px",
    marginRight: 4,
    marginBottom: 4,
  })
);
