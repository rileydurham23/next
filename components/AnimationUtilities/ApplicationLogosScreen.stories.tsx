import { ApplicationLogosScreen } from "./ApplicationLogosScreen";
import { Meta, Story } from "@storybook/react";

const generateStoryComponent = () => {
  const StoryComponent: Story = (args) => <ApplicationLogosScreen {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: ApplicationLogosScreen,
  title: "Site/AnimationUtilities/ApplicationLogosScreen",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {};
