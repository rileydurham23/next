import { Story } from "@storybook/react";
import Flex from "../Flex";
import { Slider as Component, SliderProps } from "./Slider";

const StoryComponent: Story<SliderProps> = (args) => (
  <Flex
    bg="white"
    width="100%"
    display="inline-flex"
    p="2"
    alignItems="center"
    justifyContent="center"
  >
    <Component width={["100%", "33%"]} {...args} />
  </Flex>
);

export default {
  component: Component,
  title: "NumberPicker",
  argTypes: { onChange: { action: "changed" } },
};

export const Slider = StoryComponent.bind({});

Slider.args = {
  label: "Likes",
  initialValue: 15,
  renderMax: (val) => `${val}++`,
};
