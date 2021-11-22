import Logo from "./Logo";
import { Meta, Story } from "@storybook/react";

const generateStoryComponent = () => {
  const StoryComponent: Story = (args) => <Logo {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: Logo,
  title: "Logo",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  width: "200px",
  height: "150px",
};
