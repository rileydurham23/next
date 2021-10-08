import { Story } from "@storybook/react";
import { VideoBanner, VideoBannerProps } from "./VideoBanner";

const StoryComponent: Story<VideoBannerProps> = (args) => (
  <VideoBanner {...args} />
);

export default {
  component: VideoBanner,
  title: "Site/VideoBanner",
};

export const Default = StoryComponent.bind({});

Default.args = {
  title: "Demo Video",
  subtitle: "Teleport Kubernetes Access",
  videoId: "2diX_UAmJ1c",
};
