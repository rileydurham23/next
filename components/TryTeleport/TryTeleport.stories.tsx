import type { ComponentProps } from "react";
import { Meta, Story } from "@storybook/react";
import TryTeleport from "./TryTeleport";

const generateStoryComponent = () => {
  const StoryComponent: Story<ComponentProps<typeof TryTeleport>> = (args) => (
    <TryTeleport {...args} />
  );

  return StoryComponent;
};

const meta: Meta = {
  component: TryTeleport,
  title: "Site/TryTeleport",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {};
