import { Meta, Story } from "@storybook/react";
import { VideoBanner, VideoBannerProps } from "./VideoBanner";

const generateStoryComponent = () => {
  const StoryComponent: Story<VideoBannerProps> = (args) => (
    <VideoBanner {...args} />
  );

  return StoryComponent;
};

const meta: Meta = {
  component: VideoBanner,
  title: "Site/VideoBanner",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  title: "Demo Video",
  subtitle: "Teleport Kubernetes Access",
  videoId: "2diX_UAmJ1c",
};
