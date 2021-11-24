import Button, { ButtonProps } from "./Button";
import { Meta, Story } from "@storybook/react";

const generateStoryComponent = () => {
  // @ts-expect-error for some reason, there's a type collision for 'color'
  const StoryComponent: Story<ButtonProps> = (args) => <Button {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: Button,
  title: "Button",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  variant: "primary",
  shape: "lg",
  children: "Submit",
};
