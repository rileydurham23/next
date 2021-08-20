import { Story } from "@storybook/react";
import { useState } from "react";
import { TextArea as Component } from "./TextArea";

const StoryComponent: Story<React.HTMLProps<HTMLTextAreaElement>> = (args) => {
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
  title: "Base/TextArea",
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
