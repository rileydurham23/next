import { Story } from "@storybook/react";
import Flex from "../Flex";
import Banner, { Props } from "./Banner";

const StoryComponent: Story<Props> = (args) => {
  return (
    <Flex
      bg="white"
      width="100%"
      display="inline-flex"
      p="2"
      alignItems="center"
      justifyContent="center"
    >
      <Banner {...args} />
    </Flex>
  );
};

export default {
  component: Banner,
  title: "Banner",
};

export const Simple = StoryComponent.bind({});

Simple.args = {
  title:
    "Our mission is to enable engineers to quickly access any resource anywhere.",
  subtitle: "Mission",
};
