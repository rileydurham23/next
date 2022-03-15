import styled from "styled-components";
import css from "@styled-system/css";

import Box from "components/Box";
import Centrator from "components/Centrator";
import type { BGColor } from "components/Section/Section";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import Flex from "components/Flex";
import SimpleSection from "components/Section";
import { H1 } from "components/Text";

interface NewGridDisplay {
  bg?: BGColor;
  description: string;
  title: string;
}

const NewGridDisplay = ({ children, sectionTitle }) => {
  return (
    <Centrator flexDirection="column">
      <StyledH1>{sectionTitle}</StyledH1>
      {children}
    </Centrator>
  );
};

export default NewGridDisplay;

const StyledH1 = styled(H1)(
  css({
    fontSize: "32px",
  })
);

const CardContainer = styled(Flex)(
  css({
    // border: "2px solid green",
  })
);
