import CrewGallery from "./CrewGallery";
import { Meta, Story } from "@storybook/react";

const generateStoryComponent = () => {
  const StoryComponent: Story = (args) => <CrewGallery {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: CrewGallery,
  title: "Site/CrewGallery",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {};
