import { Meta, Story } from "@storybook/react";
import { TextArea } from "./TextArea";

const generateStoryComponent = () => {
  const StoryComponent: Story = (args) => <TextArea {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: TextArea,
  title: "TextArea",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  disabled: true,
  value: "Some value",
};
