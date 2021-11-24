import { JenkinsScreen } from "./JenkinsScreen";
import { Meta, Story } from "@storybook/react";

const generateStoryComponent = () => {
  const StoryComponent: Story = (args) => <JenkinsScreen {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: JenkinsScreen,
  title: "Site/AnimationUtilities/JenkinsScreen",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {};
