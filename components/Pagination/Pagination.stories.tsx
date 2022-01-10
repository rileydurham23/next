import { Meta, Story } from "@storybook/react";
import { Pagination, PaginationProps } from "./Pagination";

const generateStoryComponent = () => {
  const StoryComponent: Story<PaginationProps> = (args) => (
    <Pagination {...args} />
  );

  return StoryComponent;
};

const meta: Meta = {
  component: Pagination,
  title: "Site/Pagination",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  currentPage: "8",
  maxPage: 25,
  baseUrl: "/blog",
};
