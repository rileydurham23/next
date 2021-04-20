import { Story } from "@storybook/react";
import Flex from "../Flex";
import { PageIntro as Component, PageIntroProps } from "./PageIntro";

const StoryComponent: Story<PageIntroProps> = (args) => (
  <Flex
    bg="white"
    width="100%"
    display="inline-flex"
    p="2"
    alignItems="center"
    justifyContent="center"
  >
    <Component {...args} />
  </Flex>
);

export default {
  component: Component,
  title: "PageIntro",
};

export const PageIntro = StoryComponent.bind({});

PageIntro.args = {
  data: {
    title: "Get Started",
    subject: "Long journey begins here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
};
