import { Story } from "@storybook/react";
import TileComponent, { TileProps } from "./Tile";
import TileSet from "./TileSet";

export default {
  component: TileComponent,
  subcomponents: { TileSet },
  title: "Tile/Tile",
};

const TileComponentWrapper: Story<TileProps> = (args) => (
  <TileComponent {...args} />
);

export const Tile = TileComponentWrapper.bind({});

Tile.args = {
  children:
    "Learn the fundamental of Teleport for SSH using these step by step guides.",
  href: "https://goteleport.com",
  icon: "stack",
  title: "Step by Step Guides",
};

export const TileGroup = () => {
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
