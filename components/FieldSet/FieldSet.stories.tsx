import { Story } from "@storybook/react";
import { useState } from "react";
import Input from "../Input";
import { FieldSet as Component, FieldSetProps } from "./FieldSet";

const StoryComponent: Story<FieldSetProps> = (args) => {
  const [value, setValue] = useState("");

  return (
    <Component {...args}>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        id={args.id}
      />
    </Component>
  );
};

export default {
  component: Component,
  title: "Base/FieldSet",
};

export const Base = StoryComponent.bind({});

Base.args = {
  id: "id",
  label: "Label",
};

export const Required = StoryComponent.bind({});

Required.args = {
  id: "id",
  label: "Label",
  required: true,
};

export const Error = StoryComponent.bind({});

Error.args = {
  error: "This is error.",
  id: "id",
  label: "Label",
};

export const Description = StoryComponent.bind({});

Description.args = {
  description: "This is description.",
  id: "id",
  label: "Label",
};

export const Full = StoryComponent.bind({});

Full.args = {
  description: "This is description.",
  error: "This is error.",
  id: "id",
  label: "Label",
  required: true,
};
