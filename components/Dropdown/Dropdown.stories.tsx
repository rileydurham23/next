import { Story } from "@storybook/react";
import Flex from "../Flex";
import Icon from "../Icon";
import { Dropdown as Component, DropdownProps } from "./Dropdown";

interface Item {
  id: string;
  title: string;
}

const StoryComponent: Story<DropdownProps<string | Item>> = (args) => (
  <Flex
    bg={args.variant === "dark" ? "white" : "dark-purple"}
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
  title: "Dropdown",
  argTypes: { onChange: { action: "change" } },
};

export const DarkDropdown = StoryComponent.bind({});

DarkDropdown.args = {
  options: ["Hey", "How", "Are", "You"],
  variant: "dark",
};

export const LightDropdown = StoryComponent.bind({});

LightDropdown.args = {
  options: ["Hey", "How", "Are", "You"],
  variant: "light",
};

export const OptionsAreObjects = StoryComponent.bind({});

OptionsAreObjects.args = {
  options: [
    {
      id: "1",
      title: "Title 1",
    },
    {
      id: "2",
      title: "Title 2",
    },
    {
      id: "3",
      title: "Title 3",
    },
    {
      id: "4",
      title: "Title 4",
    },
  ],
  variant: "dark",
  pickValue: (item) => item.id,
  renderOption: (item) => item.title,
};

export const WithIcon = StoryComponent.bind({});

WithIcon.args = {
  options: ["Hey", "How", "Are", "You"],
  variant: "dark",
  icon: <Icon name="arrow" size="sm" lineHeight="sm" />,
};
