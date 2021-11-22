import Menu from "./Menu";
import { Meta, Story } from "@storybook/react";

const generateStoryComponent = () => {
  const StoryComponent: Story = (args) => <Menu {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: Menu,
  title: "Site/Menu",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {};
