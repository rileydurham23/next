import { Story } from "@storybook/react";
import { useState } from "react";
import { Input as Component } from "./Input";

const StoryComponent: Story<React.HTMLProps<HTMLInputElement>> = (args) => {
  const [value, setValue] = useState(args.value);

  return (
    <Component
      value={value}
      onChange={(e) => setValue(e.target.value)}
      {...args}
    />
  );
};

export default {
  component: Component,
  title: "Base/Input",
};

export const Base = StoryComponent.bind({});

Base.args = {
  placeholder: "Placeholder",
};

export const Disabled = StoryComponent.bind({});

Disabled.args = {
  disabled: true,
  value: "Some value",
};
