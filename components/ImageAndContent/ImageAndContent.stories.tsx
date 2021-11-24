import Flex from "components/Flex";
import Icon from "components/Icon";
import ImageAndContent from "./ImageAndContent";
import { ImageAndContentProps } from "./ImageAndContent";
import Link from "components/Link";
import NextImage from "next/image";
import question from "./assets/question.png";
import { Story } from "@storybook/react";

const StoryComponent: Story<ImageAndContentProps> = (args) => (
  <ImageAndContent {...args} />
);

export default {
  component: StoryComponent,
  title: "Site/ImageAndContent",
};

export const Default = StoryComponent.bind({});

Default.args = {
  title: "Community Questions & Answers",
  subtitle: "Engage with the Teleport community on Discourse",
  imagePosition: "left",
  subheader: "Teleport Documentation",
  content: (
    <Flex flexDirection="row" alignItems="center">
      <Icon name="question" size="sm" mr={1} />
      <Link href="#" color="light-purple">
        View all popular Teleport discussions
      </Link>
    </Flex>
  ),
  children: (
    <NextImage src={question} alt="Question picture" height={250} width={250} />
  ),
};
