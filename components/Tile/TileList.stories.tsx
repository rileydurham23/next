import { Meta, Story } from "@storybook/react";
import TileList, { TileListProps } from "./TileList";

const generateStoryComponent = () => {
  const StoryComponent: Story<TileListProps> = (args) => <TileList {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: TileList,
  title: "Site/Tile/TileList",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  title: "Reach out",
  icon: "question",
};
