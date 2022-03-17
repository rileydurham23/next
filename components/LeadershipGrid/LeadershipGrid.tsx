import styled, { ThemeProvider } from "styled-components";
import css from "@styled-system/css";

import Box from "components/Box";
import Centrator from "components/Centrator";
import Flex from "components/Flex";
import Image from "components/Image";
import SectionSimple from "components/Section";
import { H1 } from "components/Text";
import { Grid, Col, Row } from "react-styled-flexboxgrid";

import BardiaShahali from "./assets/bardia-shahali.jpg";
import EvKontsevoy from "./assets/ev-kontsevoy.jpg";
import SashaKlizentas from "./assets/sasha-klizentas.jpg";
import MichaelFerranti from "./assets/michael-ferranti.jpg";
import HectorHernandez from "./assets/hector-hernandez.png";
import XinDing from "./assets/xin-ding.png";
import PhilSimpson from "./assets/phil-simpson.png";
import ReedLodan from "./assets/reed-lodan.png";
import TaylorWakefield from "./assets/taylor-wakefield.jpg";

import NextImage from "next/image";

interface LeaderEntry {
  name: string;
  title: string;
  source: string;
}

const leadershipList: Array<LeaderEntry> = [
  {
    name: "Ev Kontsevoy",
    title: "Co-founder and CEO",
    source: EvKontsevoy,
  },
  {
    name: "Alexander Klizentas",
    title: "Co-founder and CTO",
    source: SashaKlizentas,
  },
  {
    name: "Taylor Wakefield",
    title: "Co-founder and COO",
    source: TaylorWakefield,
  },
  {
    name: "Michael Ferranti",
    title: "CMO",
    source: MichaelFerranti,
  },
  {
    name: "Hector Hernandez",
    title: "CRO",
    source: HectorHernandez,
  },
  {
    name: "Xin Ding",
    title: "VP Products",
    source: XinDing,
  },
  {
    name: "Bardia Shahali",
    title: "VP Sales",
    source: BardiaShahali,
  },
  {
    name: "Phil Simpson",
    title: "VP Alliances",
    source: PhilSimpson,
  },
  {
    name: "Reed Lodan",
    title: "VP Security",
    source: ReedLodan,
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

interface LeadershipCard {
  name: string;
  title: string;
  source: string;
}

export const LeadershipCard = ({ source, title, description }) => {
  return (
    <LeadershipCardContainer>
      <Top>{/* <StyledImage src={source} alt={title} /> */}</Top>
      <Bottom>
        <NameH1>{title}</NameH1>
        <Description>{description}</Description>
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
                {leadershipList.map((item) => (
                  <Col key={item.name}>
                    <LeadershipCard
                      title={item.name}
                      description={item.title}
                      source={item.source}
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

const Bottom = styled(Flex)(
  css({
    flexDirection: "column",
    my: "24px",
    mx: 3,
    zIndex: "9999",
  })
);

const Top = styled(Box)(
  css({
    backgroundColor: "black",
    height: "50%",
    width: "100%",
    border: "5px solid green",
    zIndex: "50",
  })
);

const StyledImage = styled(Image)(
  css({
    zIndex: -50,
  })
);

const Description = styled("p")(
  css({
    fontSize: "16px",
    lineHeight: "32px",
    color: "#455a64",
  })
);

const NameH1 = styled(H1)(
  css({
    fontSize: "18px",
    lineHeight: "32px",
    fontWeight: "700",
  })
);

const BlankCard = styled(Box)(
  css({
    width: [0, "255px"],
  })
);

const OuterContainer = styled(Box)(
  css({
    pt: [2, 11],
    pb: [2, 8],
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
