import { Meta, Story } from "@storybook/react";
import ShareButtons, { ShareButtonsProps } from "./ShareButtons";

const generateStoryComponent = () => {
  const StoryComponent: Story<ShareButtonsProps> = (args) => (
    <ShareButtons {...args} />
  );

  return StoryComponent;
};

const meta: Meta = {
  component: ShareButtons,
  title: "Site/ShareButtons",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {};
