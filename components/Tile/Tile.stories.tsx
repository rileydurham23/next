import { Story } from "@storybook/react";
import { Tile, TileSet, TileProps } from "./Tile";

export default {
  component: Tile,
  subcomponents: { TileSet },
  title: "Tile",
};

const TileComponent: Story<TileProps> = (args) => <Tile {...args} />;

export const Single = TileComponent.bind({});

Single.args = {
  children:
    "Learn the fundamental of Teleport for SSH using these step by step guides.",
  href: "https://goteleport.com",
  icon: "stack",
  title: "Step by Step Guides",
};

export const Group = () => {
  return (
    <TileSet>
      <Tile href="https://goteleport.com" icon="bolt" title="Quickstart Guide">
        Learn the basics of Teleport and get going in about 10-15 minutes.
      </Tile>
      <Tile
        href="https://goteleport.com"
        icon="stack"
        title="Step by Step Guides"
      >
        Learn the fundamental of Teleport for SSH using these step by step
        guides.
      </Tile>
      <Tile href="https://goteleport.com" icon="book" title="Product Manuals">
        Learn the fundamental of Teleport for SSH using these step by step
        guides.
      </Tile>
      <Tile href="https://goteleport.com" icon="question" title="FAQ">
        Some diliberately long text to show how component handles different line
        numbers in different tiles. This one should be three lines of text on
        1440px width screen.
      </Tile>
      <Tile
        href="https://goteleport.com"
        icon="calendar"
        title="Long header to show how it works with two lines on 1440px screen"
      >
        Some short description.
      </Tile>
    </TileSet>
  );
};
