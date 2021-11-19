import { Story } from "@storybook/react";
import { Badge, BadgeProps } from "./Badge";

const Component: Story<BadgeProps> = (args) => <Badge {...args} />;

export default {
  component: Badge,
  title: "Badge",
};

export const Card = Component.bind({});

Card.args = {
  name: "card",
  size: "lg",
};
