import { Story } from "@storybook/react";
import Notice, { NoticeProps } from "./Notice";

const Component: Story<NoticeProps> = (args) => <Notice {...args} />;

export default {
  component: Notice,
  title: "Notice",
};

export const Success = Component.bind({});

Success.args = {
  type: "success",
  children: "Success content",
};

export const Warning = Component.bind({});

Warning.args = {
  type: "warning",
  children: "Warning content",
};

export const Note = Component.bind({});

Note.args = {
  type: "note",
  children: "Note content",
};

export const Danger = Component.bind({});

Danger.args = {
  type: "danger",
  children: "Danger content",
};

export const NoIcon = Component.bind({});

NoIcon.args = {
  icon: false,
  type: "danger",
  children: "Content without icon",
};
