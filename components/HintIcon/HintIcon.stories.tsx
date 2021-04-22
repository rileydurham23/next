import { Story } from "@storybook/react";
import Flex from "../Flex";
import { HintIcon as Component, HintIconProps } from "./HintIcon";

const StoryComponent: Story<HintIconProps> = (args) => (
  <Flex
    bg="white"
    width="100%"
    height="100vh"
    display="inline-flex"
    p="2"
    alignItems="center"
    justifyContent="center"
  >
    <Component {...args} />
  </Flex>
);

export default {
  component: Component,
  title: "HintIcon",
};

export const Hint = StoryComponent.bind({});

Hint.args = {
  icon: "helpCircle",
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
};
