import Flex from "../Flex";
import { Table, Row, Cell, Separator, HorizontalHeader } from "./index";

export default {
  component: Table,
  subcomponents: {
    Row,
    Cell,
    SeparatorRow: Separator.Row,
    SeparatorCell: Separator.Cell,
  },
  title: "Table",
};

export const SimpleTable = () => (
  <Flex
    bg="white"
    width="100%"
    display="inline-flex"
    p="2"
    alignItems="center"
    justifyContent="center"
  >
    <Table>
      <Row>
        <HorizontalHeader>Question</HorizontalHeader>
        <Cell>How are you?</Cell>
        <Cell>Hey! How are you?</Cell>
      </Row>
      <Row>
        <HorizontalHeader>Answer</HorizontalHeader>
        <Cell>{"I'm okey"}</Cell>
        <Cell>How are you?</Cell>
      </Row>
      <Separator.Row>
        <Separator.Cell>Left Section</Separator.Cell>
        <Separator.Cell>Middle Section</Separator.Cell>
        <Separator.Cell>Right Section</Separator.Cell>
      </Separator.Row>
      <Row>
        <HorizontalHeader>Another Question</HorizontalHeader>
        <Cell>Fine, thanks</Cell>
        <Cell>{"It's ok to have a rest. Do you have some?"}</Cell>
      </Row>
      <Row>
        <HorizontalHeader>Another Answert</HorizontalHeader>
        <Cell>{"Yep, it's true"}</Cell>
        <Cell>Bye</Cell>
      </Row>
    </Table>
  </Flex>
);
