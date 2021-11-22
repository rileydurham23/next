import Command, { CommandProps } from "./Command";
import { Meta, Story } from "@storybook/react";

const generateStoryComponent = () => {
  const StoryComponent: Story<CommandProps> = (args) => <Command {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: Command,
  title: "Command",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  children: <span data-content="$ ">tctl create -f api-role.yaml</span>,
};
