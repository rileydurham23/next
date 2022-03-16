import styled from "styled-components";
import css from "@styled-system/css";

import Box from "components/Box";
import Centrator from "components/Centrator";
import type { BGColor } from "components/Section/Section";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import Flex from "components/Flex";
import SimpleSection from "components/Section";
import { H1 } from "components/Text";
import { NewGridDisplayCard } from "components/NewGridDisplay";

interface NewGridItem {
  title: string;
  description: string;
}

interface NewGridDisplay {
  items: Array<NewGridItem>;
}

const NewGridDisplay = ({ items }) => {
  console.log("???", items);
  return (
    <Grid>
      <Row>
        {items.map((item) => (
          <Col key={item.name} xs>
            <NewGridDisplayCard title={item.name} description={item.title} />
          </Col>
        ))}
      </Row>
    </Grid>
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
