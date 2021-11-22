import { Meta, Story } from "@storybook/react";
import { ApplicationAnimation } from "./ApplicationAnimation";

const generateStoryComponent = () => {
  const StoryComponent: Story = (args) => <ApplicationAnimation {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: ApplicationAnimation,
  title: "Site/ApplicationAnimation",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {};
