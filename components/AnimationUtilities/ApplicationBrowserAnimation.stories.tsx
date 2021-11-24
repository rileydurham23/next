import { ApplicationBrowser } from "./ApplicationBrowserAnimation";
import { Meta, Story } from "@storybook/react";

const generateStoryComponent = () => {
  const StoryComponent: Story = (args) => <ApplicationBrowser {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: ApplicationBrowser,
  title: "Site/AnimationUtilities/ApplicationBrowserAnimation",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {};
