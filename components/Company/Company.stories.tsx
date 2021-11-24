import Company, { Props } from "./Company";
import { Meta, Story } from "@storybook/react";

const generateStoryComponent = () => {
  const StoryComponent: Story<Props> = (args) => <Company {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: Company,
  title: "Company",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  id: "airtable",
};
