import { Story } from "@storybook/react";
import Box from "../Box";
import { BookBlock, BookBlockProps } from "./BookBlock";
import cover from "./fixtures/cover.png";

const Component: Story<BookBlockProps> = (args) => (
  <Box border="1px solid" borderColor="light-gray">
    <BookBlock {...args} />
  </Box>
);

export default {
  component: BookBlock,
  title: "BookBlock",
};

export const Main = Component.bind({});

Main.args = {
  formId: "1103",
  children:
    "In 1971, when employees booted up their PDP-10 mainframe computers, they found a peculiar message waiting for them at the teletype console. “I’m the creeper: catch me if you can.” This mysterious message was found at multiple stations throughout the BBN Technologies headquarters. What researchers were witnessing was the spread of the very first computer virus, a worm called Creeper.",
  src: cover,
  title: "Top 10 Hacks of the Past Decade",
};
