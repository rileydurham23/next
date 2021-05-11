import { Story } from "@storybook/react";
import Flex from "../Flex";
import HeadingComponent, { Props } from "./Heading";

const StoryComponent: Story<Props> = (args) => (
  <Flex
    bg="white"
    width="100%"
    display="inline-flex"
    p="2"
    alignItems="center"
    justifyContent="center"
  >
    <HeadingComponent {...args} />
  </Flex>
);

export default {
  component: HeadingComponent,
  title: "Heading",
};

export const LeftHeading = StoryComponent.bind({});

LeftHeading.args = {
  title: "Lorem ipsum dolor",
  subtitle: "Lorem ipsum dolor",
};

export const CenterHeading = StoryComponent.bind({});

CenterHeading.args = {
  title: "Lorem ipsum dolor",
  subtitle: "Lorem ipsum dolor",
  align: "center",
};
