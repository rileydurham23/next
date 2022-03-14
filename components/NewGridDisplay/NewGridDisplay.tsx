import styled from "styled-components";
import css from "@styled-system/css";

import Box from "components/Box";
import Centrator from "components/Centrator";
import type { BGColor } from "components/Section/Section";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import Flex from "components/Flex";
import SimpleSection from "components/Section";

interface NewGridDisplay {
  bg?: BGColor;
  description: string;
  title: string;
}

const NewGridDisplay = ({ bg, children, sectionTitle }) => {
  return (
    <SimpleSection bg={bg}>
      <Centrator flexDirection="column">
        <h1>{sectionTitle}</h1>
        <Grid>{children}</Grid>
      </Centrator>
    </SimpleSection>
  );
};

export default NewGridDisplay;
