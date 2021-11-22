import { Meta, Story } from "@storybook/react";
import Tile, { TileProps } from "./Tile";

const generateStoryComponent = () => {
  const StoryComponent: Story<TileProps> = (args) => <Tile {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: Tile,
  title: "Site/Tile/Tile",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  icon: "stack",
  title: "Step by Step Guides",
  href: "./getting-started.mdx",
  children:
    "Learn the fundamental of Teleport for SSH using these step by step guides.",
};
