import Footer, { Props } from "./Footer";
import { Meta, Story } from "@storybook/react";

const generateStoryComponent = () => {
  const StoryComponent: Story<Props> = (args) => <Footer {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: Footer,
  title: "Site/Footer",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  short: false,
};
