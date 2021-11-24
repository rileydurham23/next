import { EmailSubscribe } from "./EmailSubscribe";
import { Meta, Story } from "@storybook/react";

const generateStoryComponent = () => {
  const StoryComponent: Story = (args) => <EmailSubscribe {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: EmailSubscribe,
  title: "Site/EmailSubscribe",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {};
