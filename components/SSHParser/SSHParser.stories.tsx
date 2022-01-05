import SSHParser from "./SSHParser";
import { Meta, Story } from "@storybook/react";

const generateStoryComponent = () => {
  const StoryComponent: Story = (args) => <SSHParser {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: SSHParser,
  title: "SSHParser",
};

export default meta;

export const Default = generateStoryComponent();
