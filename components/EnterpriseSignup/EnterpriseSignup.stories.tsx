import EnterpriseSignup from "./EnterpriseSignup";
import { Meta, Story } from "@storybook/react";

const generateStoryComponent = () => {
  const StoryComponent: Story = (args) => <EnterpriseSignup {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: EnterpriseSignup,
  title: "Site/EnterpriseSignup",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {};
