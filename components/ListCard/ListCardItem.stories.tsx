import { ListCardItem } from "./ListCard";
import type { ListCardItemProps } from "./ListCard";
import { Meta, Story } from "@storybook/react";

const generateStoryComponent = () => {
  const StoryComponent: Story<ListCardItemProps> = (args) => (
    <ListCardItem {...args} />
  );

  return StoryComponent;
};

const meta: Meta = {
  component: ListCardItem,
  title: "ListCardItem",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  iconColor: "purple",
  children:
    " Multi-factor authentication (MFA). Integrating with company-wide SSO enables two-factor authentication (2FA) for SSH sessions using the same access control plane, simplifying management and audit.",
};
