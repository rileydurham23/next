import { Story } from "@storybook/react";
import Icon, { IconProps } from "./Icon";
import Flex from "../Flex";

const Component: Story<IconProps> = (args) => (
  <Flex
    bg="white"
    color="purple"
    borderRadius="default"
    display="inline-flex"
    p="2"
    alignItems="center"
    justifyContent="center"
  >
    <Icon {...args} />
  </Flex>
);

export default {
  component: Icon,
  title: "Icon",
};

export const Small = Component.bind({});

Small.args = {
  name: "bolt",
  size: "sm",
};

export const Medium = Component.bind({});

Medium.args = {
  name: "bolt",
  size: "md",
};

export const Large = Component.bind({});

Large.args = {
  name: "bolt",
  size: "lg",
};

export const ExtraLarge = Component.bind({});

ExtraLarge.args = {
  name: "bolt",
  size: "xl",
};
