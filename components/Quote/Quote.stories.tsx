import { Meta, Story } from "@storybook/react";
import { Quote, QuoteProps } from "./Quote";

const generateStoryComponent = () => {
  const StoryComponent: Story<QuoteProps> = (args) => <Quote {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: Quote,
  title: "Site/Quote",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  title: "About Anaconda",
  children: `Elastic is a search company built on a free and open heritage. Everyone can
  get started with Elastic products and solutions quickly and frictionlessly.
  Elastic offers three solutions for enterprise search, observability, and
  security built on one technology stack that can be deployed anywhere. From
  finding documents to monitoring infrastructure to hunting for threats, Elastic
  makes data usable in real time and at scale.`,
};
