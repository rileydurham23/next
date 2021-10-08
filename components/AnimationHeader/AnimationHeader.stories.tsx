import { Story } from "@storybook/react";
import { AnimationHeader, AnimationHeaderProps } from "./AnimationHeader";

export default {
  component: AnimationHeader,
  title: "Site/AnimationHeader",
};

const StoryComponent: Story<AnimationHeaderProps> = (args) => (
  <AnimationHeader {...args} />
);

export const Default = StoryComponent.bind({});

Default.args = {
  subtitle: "Teleport Access Plane",
  title: "Teleport Server Access",
  terminalText: "server",
  description: (
    <>
      Consolidate identity-based server access across all environments, meet
      compliance requirements, and have complete visibility into access and
      behavior.
    </>
  ),
};
