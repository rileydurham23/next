import { Meta, Story } from "@storybook/react";
import { TerminalBrowser } from "./TerminalBrowserAnimation";

const generateStoryComponent = () => {
  const StoryComponent: Story = (args) => <TerminalBrowser {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: TerminalBrowser,
  title: "Site/AnimationUtilities/TerminalBrowserAnimation",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {};
