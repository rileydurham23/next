import { Story } from "@storybook/react";
import TileListComponent, { TileListItem, TileListProps } from "./TileList";
import TileSet from "./TileSet";

export default {
  component: TileListComponent,
  subcomponents: { TileSet },
  title: "Tile/TileList",
};

const TileListComponentWrapper: Story<TileListProps> = (args) => (
  <TileListComponent {...args} />
);

export const TileList = TileListComponentWrapper.bind({});

TileList.args = {
  children: (
    <>
      <TileListItem href="http://goteleport.com">Workflows</TileListItem>
      <TileListItem href="http://goteleport.com">SIEMs</TileListItem>
      <TileListItem href="http://goteleport.com">IDE</TileListItem>
      <TileListItem href="http://goteleport.com">Automation</TileListItem>
    </>
  ),
  icon: "stack",
  title: "Step by Step Guides",
  href: "http://goteleport.com",
};

export const TileListGroup = () => {
  return (
    <TileSet>
      <TileList title="Step by Step Guides" icon="stack">
        <TileListItem href="http://goteleport.com">Workflows</TileListItem>
        <TileListItem href="http://goteleport.com">SIEMs</TileListItem>
        <TileListItem href="http://goteleport.com">IDE</TileListItem>
        <TileListItem href="http://goteleport.com">Automation</TileListItem>
      </TileList>
      <TileList title="FAQ" icon="question">
        <TileListItem href="http://goteleport.com">Question</TileListItem>
      </TileList>
      <TileList
        title="Long title to show how it will be cut on large displays"
        icon="stack"
        href="http://goteleport.com"
      >
        <TileListItem href="http://goteleport.com">
          Long link text to show how it will be wrapped on large displays
        </TileListItem>
        <TileListItem href="http://goteleport.com">Another link</TileListItem>
      </TileList>
    </TileSet>
  );
};
