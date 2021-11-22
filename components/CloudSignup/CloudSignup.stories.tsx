import CloudSignup from "./CloudSignup";
import { Meta, Story } from "@storybook/react";

const generateStoryComponent = () => {
  const StoryComponent: Story = (args) => <CloudSignup {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: CloudSignup,
  title: "Site/CloudSignup",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {};
