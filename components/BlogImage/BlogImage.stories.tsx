import { Meta, Story } from "@storybook/react";
import BlogImage, { BlogImageProps } from "./BlogImage";

const generateStoryComponent = () => {
  const StoryComponent: Story<BlogImageProps> = (args) => (
    <BlogImage {...args} />
  );

  return StoryComponent;
};

const meta: Meta = {
  component: BlogImage,
  title: "Blog/BlogImage",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  src: "../../pages/blog/choosing-ssh-client-windows/assets/kitty@2x.png",
  alt: "mRemoteNG",
};
