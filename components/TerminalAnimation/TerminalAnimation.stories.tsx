import { Meta, Story } from "@storybook/react";
import { TerminalAnimation, TerminalAnimationProps } from "./TerminalAnimation";

const generateStoryComponent = () => {
  const StoryComponent: Story<TerminalAnimationProps> = (args) => (
    <TerminalAnimation {...args} />
  );

  return StoryComponent;
};

const meta: Meta = {
  component: TerminalAnimation,
  title: "Site/TerminalAnimation",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  text: "homepage",
};
