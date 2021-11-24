import { Code, CodeProps } from "./Code";
import { Meta, Story } from "@storybook/react";

const generateStoryComponent = () => {
  const StoryComponent: Story<CodeProps> = (args) => <Code {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: Code,
  title: "Code",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  children: <span data-content="$ ">tctl create -f api-role.yaml</span>,
};
