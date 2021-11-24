import Header, { HeaderProps } from "./Header";
import { Meta, Story } from "@storybook/react";

const generateStoryComponent = () => {
  const StoryComponent: Story<HeaderProps> = (args) => <Header {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: Header,
  title: "Site/Header",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {};
