import { MainDisplay } from "./MainDisplay";
import { Meta, Story } from "@storybook/react";

const generateStoryComponent = () => {
  const StoryComponent: Story = (args) => <MainDisplay {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: MainDisplay,
  title: "Site/AnimationUtilities/MainDisplay",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {};
