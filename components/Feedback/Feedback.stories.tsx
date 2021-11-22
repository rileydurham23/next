import { Story } from "@storybook/react";
import Flex from "../Flex";
import Feedback, { Props } from "./Feedback";

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
    <Feedback {...args} />
  </Flex>
);

export default {
  component: Feedback,
  title: "Site/Feedback",
};

export const FeedbackList = StoryComponent.bind({});

FeedbackList.args = {
  reviews: ["mulesoft", "nasdaq", "sumologic", "anaconda"],
};
