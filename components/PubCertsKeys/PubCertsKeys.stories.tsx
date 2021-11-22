import { Meta, Story } from "@storybook/react";
import { PubCertsKeys } from "./PubCertsKeys";

const generateStoryComponent = () => {
  const StoryComponent: Story = (args) => <PubCertsKeys {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: PubCertsKeys,
  title: "Site/PubCertsKeys",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {};
