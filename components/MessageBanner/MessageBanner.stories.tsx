import { Story } from "@storybook/react";
import { MessageBanner, MessageBannerProps } from "./MessageBanner";

const StoryComponent: Story<MessageBannerProps> = (args) => (
  <MessageBanner {...args} />
);

export default {
  component: MessageBanner,
  title: "Site/MessageBanner",
};

export const Default = StoryComponent.bind({});

Default.args = {
  title: "Our vision for the future",
  children:
    "We are trying to solve the problem every company has - how to run and access software running anywhere in a secure and compliant manner. We call this environment-free computing.",
  href: "https://goteleport.com/resources/white-papers/environment-free-computing/",
  linkText: "Learn more",
};
