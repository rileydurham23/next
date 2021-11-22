import Globe, { Props } from "./Globe";
import { Meta, Story } from "@storybook/react";

const generateStoryComponent = () => {
  const StoryComponent: Story<Props> = (args) => <Globe {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: Globe,
  title: "Site/Globe",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {};
