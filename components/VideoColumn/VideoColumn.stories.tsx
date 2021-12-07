import { Meta, Story } from "@storybook/react";
import { VideoColumn, VideoColumnProps } from "./VideoColumn";

const generateStoryComponent = () => {
  const StoryComponent: Story<VideoColumnProps> = (args) => (
    <VideoColumn {...args} />
  );

  return StoryComponent;
};

const meta: Meta = {
  component: VideoColumn,
  title: "Site/VideoColumn",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {};
