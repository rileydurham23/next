import { Story } from "@storybook/react";
import Icon, { IconProps } from "./Icon";
import { IconName } from "./types";
import * as icons from "./icons";
import Flex from "../Flex";
import Box from "../Box";
import { useState } from "react";
import { transition } from "components/system";

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

const AllIconsComponent: Story = () => {
  const [search, setSearch] = useState("");
  const iconsList = Object.keys(icons) as IconName[];
  return (
    <Flex
      bg="white"
      p="9"
      width="100%"
      height="100vh"
      alignItems="center"
      flexDirection="column"
    >
      <Box
        as="input"
        type="text"
        value={search}
        placeholder="finder"
        p="2"
        onChange={(event) => setSearch(event.target.value.toLowerCase())}
      />
      <Flex
        color="purple"
        width="100%"
        height="100%"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
      >
        {iconsList.map((icon) => (
          <Flex
            key={icon}
            p="4"
            flexDirection="column"
            alignItems="center"
            opacity={icon.toLowerCase().match(search) ? 1 : 0.15}
            transition={transition([["opacity", "interaction"]])}
          >
            <Icon name={icon} />
            <Box as="span" color="darkest" mt="2">
              {icon}
            </Box>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export const AllIcons = AllIconsComponent.bind({});

AllIcons.args = {};
