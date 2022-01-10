import { Meta, Story } from "@storybook/react";
import { VideoRow, VideoRowProps } from "./VideoRow";

const generateStoryComponent = () => {
  const StoryComponent: Story<VideoRowProps> = (args) => <VideoRow {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: VideoRow,
  title: "Site/VideoRow",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {};
