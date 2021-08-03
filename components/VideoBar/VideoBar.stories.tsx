import { Story } from "@storybook/react";
import VideoBar from "./VideoBar";
import { VideoBarProps } from "./types";
import Img from "./fixture/video-bar.png";

const StoryComponent: Story<VideoBarProps> = (args) => (
  <VideoBar mb={1} boxShadow="0 1px 4px rgba(0, 0, 0, 0.24)" {...args} />
);

export default {
  component: StoryComponent,
  title: "VideoBar",
};

export const Default = StoryComponent.bind({});

Default.args = {
  thumbnail: Img,
  href: "#",
  title:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  duration: "03:25",
};
