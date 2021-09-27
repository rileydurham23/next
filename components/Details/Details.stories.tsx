import { Story } from "@storybook/react";
import { Details as Component, DetailsProps } from "./Details";

const ComponentStory: Story<DetailsProps> = (args) => <Component {...args} />;

export default {
  component: Component,
  title: "Details",
};

export const Details = ComponentStory.bind({});

Details.args = {
  title: "Details title",
  opened: true,
  children: (
    <>
      <p>Pragraph 1</p>
      <p>Pragraph 2</p>
    </>
  ),
};
