import { Meta, Story } from "@storybook/react";
import Search, { SearchProps } from "./Search";

const generateStoryComponent = () => {
  const StoryComponent: Story<SearchProps> = (args) => <Search {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: Search,
  title: "Search",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  id: "mobile",
};
