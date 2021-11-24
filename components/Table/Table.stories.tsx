import { Table, Row, Cell, Separator, HorizontalHeader } from "./index";
import { TableProps } from "./Table";
import { Meta, Story } from "@storybook/react";

const generateStoryComponent = () => {
  const StoryComponent: Story<TableProps> = (args) => <Table {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: Table,
  title: "Table",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  children: (
    <>
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
    </>
  ),
};
