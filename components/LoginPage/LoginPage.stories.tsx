import LoginPage from "./LoginPage";
import { Meta, Story } from "@storybook/react";

const generateStoryComponent = () => {
  const StoryComponent: Story = (args) => <LoginPage {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: LoginPage,
  title: "Site/LoginPage",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {};
