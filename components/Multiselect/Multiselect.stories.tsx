import { Story } from "@storybook/react";
import Multiselect, { MultiselectProps } from "./Multiselect";
import Icon from "../Icon";
import Flex from "../Flex";

const Component: Story = (args: MultiselectProps<string>) => (
  <Flex
    bg={args.variant === "light" ? "dark-gray" : "white"}
    color="purple"
    width="100%"
    height="100vh"
    borderRadius="default"
    display="inline-flex"
    p="2"
    alignItems="center"
    justifyContent="center"
  >
    <Multiselect icon={<Icon name="arrow" size="sm" />} {...args} />
  </Flex>
);

export default {
  component: Multiselect,
  title: "Multiselect",
  argTypes: { onChange: { action: "change" } },
};

export const Simple = Component.bind({});

Simple.args = {
  value: {},
  label: "Choose your options",
  variant: "dark",
  icon: <Icon name="arrow" size="sm" />,
  options: ["dark side", "light side"],
};
