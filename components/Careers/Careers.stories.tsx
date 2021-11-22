import Careers from "./Careers";
import { Meta, Story } from "@storybook/react";

const generateStoryComponent = () => {
  const StoryComponent: Story = (args) => <Careers {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: Careers,
  title: "Site/Careers",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {};
