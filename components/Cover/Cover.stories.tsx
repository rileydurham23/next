import { Story } from "@storybook/react";
import Flex from "../Flex";
import Cover, { Props } from "./Cover";

const StoryComponent: Story<Props> = (args) => (
  <Flex
    bg="white"
    width="100%"
    height="100vh"
    display="inline-flex"
    p="2"
    alignItems="center"
    justifyContent="center"
  >
    <Cover {...args} />
  </Flex>
);

export default {
  component: Cover,
  title: "Cover",
};

export const Simple = StoryComponent.bind({});

Simple.args = {
  title: "Teleport",
  subject: "About Us",
  description:
    "Teleport is a remote-first technology company with offices in Oakland and Seattle. We enable engineers to quickly access any computing resource anywhere on the planet.",
};
