import { Meta, Story } from "@storybook/react";
import Props from "./Video";
import Video from "./Video";

const generateStoryComponent = () => {
  const StoryComponent: Story<typeof Props> = (args) => <Video {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: Video,
  title: "Site/Video",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  videoId: "2diX_UAmJ1c",
};
