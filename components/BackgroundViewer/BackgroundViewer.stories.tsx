import { BackgroundViewer, BGVProps } from "./BackgroundViewer";
import { Meta, Story } from "@storybook/react";

const generateStoryComponent = () => {
  const StoryComponent: Story<BGVProps> = (args) => (
    <BackgroundViewer {...args} />
  );

  return StoryComponent;
};

const meta: Meta = {
  component: BackgroundViewer,
  title: "BackgroundViewer",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {};
