import { Meta, Story } from "@storybook/react";
import JoinTheCommunity from "./JoinTheCommunity";

const generateStoryComponent = () => {
  const StoryComponent: Story = (args) => <JoinTheCommunity {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: JoinTheCommunity,
  title: "JoinTheCommunity",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {};
