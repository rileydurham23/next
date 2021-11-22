import { Diagram, DiagramProps } from "./Diagram";
import { Meta, Story } from "@storybook/react";

const generateStoryComponent = () => {
  const StoryComponent: Story<DiagramProps> = (args) => <Diagram {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: Diagram,
  title: "Site/Diagram",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  title: "How Teleport Works",
  src: "../../pages/features/assets/access-plane-2600.png",
  alt: "a diagram of Teleport's security functionality",
  width: 1300,
  height: 583,
};
