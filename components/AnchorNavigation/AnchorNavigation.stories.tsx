import AnchorNavigation from "./AnchorNavigation";
import { AnchorNavigationProps } from "./AnchorNavigation";
import { Meta, Story } from "@storybook/react";

const generateStoryComponent = () => {
  const StoryComponent: Story<AnchorNavigationProps> = (args) => (
    <AnchorNavigation {...args} />
  );

  return StoryComponent;
};

const meta: Meta = {
  component: AnchorNavigation,
  title: "AnchorNavigation",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  headers: [
    { rank: 1, id: "1", title: "Title 1" },
    { rank: 2, id: "2", title: "Title 2" },
    { rank: 3, id: "3", title: "Title 3" },
  ],
};
