import { Meta, Story } from "@storybook/react";
import { NewsItem, NewsItemProps } from "./NewsItem";

const generateStoryComponent = () => {
  const StoryComponent: Story<NewsItemProps> = (args) => <NewsItem {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: NewsItem,
  title: "Site/NewsItem",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  children: `Teleport 7 Brings Identity-based Access to MongoDB`,
};
