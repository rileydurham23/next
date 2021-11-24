import { Meta, Story } from "@storybook/react";
import ForkRibbon, { ForkRibbonProps } from "./ForkRibbon";

const generateStoryComponent = () => {
  const StoryComponent: Story<ForkRibbonProps> = (args) => (
    <ForkRibbon {...args} />
  );

  return StoryComponent;
};

const meta: Meta = {
  component: ForkRibbon,
  title: "ForkRibbon",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  repoLink: "https://github.com/gravitational/teleport",
};
