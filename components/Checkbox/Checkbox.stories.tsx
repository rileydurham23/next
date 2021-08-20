import { Story } from "@storybook/react";
import { useState } from "react";
import Flex from "../Flex";
import Box from "../Box";
import { Checkbox as Component, CheckboxProps } from "./Checkbox";

const StoryComponent: Story<CheckboxProps> = (args) => {
  const [value, setValue] = useState(args.checked);

  return (
    <Flex
      bg="white"
      width="100%"
      display="inline-flex"
      p="2"
      alignItems="center"
      justifyContent="center"
    >
      <Component
        width={["100%", "33%"]}
        {...args}
        onChange={(val) => {
          args.onChange(val);
          setValue(val);
        }}
        checked={value}
      />
    </Flex>
  );
};

export default {
  component: Component,
  title: "Base/Checkbox",
  argTypes: {
    checked: {
      control: {
        disable: true,
      },
    },
    onChange: { action: "changed" },
  },
};

export const Plain = StoryComponent.bind({});

Plain.args = {
  checked: false,
};

export const Disabled = StoryComponent.bind({});

Disabled.args = {
  disabled: true,
  checked: false,
};

export const DisabledChecked = StoryComponent.bind({});

DisabledChecked.args = {
  disabled: true,
  checked: true,
};

export const WithLabel = StoryComponent.bind({});

WithLabel.args = {
  checked: false,
  children: <Box ml="2">Do you agree with these conserns?</Box>,
};
