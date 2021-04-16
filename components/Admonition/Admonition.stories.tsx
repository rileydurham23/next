import { Story } from "@storybook/react";
import Admonition, { AdmonitionProps } from "./Admonition";

const Component: Story<AdmonitionProps> = (args) => <Admonition {...args} />;

export default {
  component: Admonition,
  title: "Admonition",
};

export const Tip = Component.bind({});

Tip.args = {
  type: "tip",
  title: "Tip",
  children: "Tip content",
};

export const Warning = Component.bind({});

Warning.args = {
  type: "warning",
  title: "Warning",
  children: "Warning content",
};

export const Note = Component.bind({});

Note.args = {
  type: "note",
  title: "Note",
  children: "Note content",
};

export const Danger = Component.bind({});

Danger.args = {
  type: "danger",
  title: "Danger",
  children: "Danger content",
};
