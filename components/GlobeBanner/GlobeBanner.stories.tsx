import GlobeBanner, { Props } from "./GlobeBanner";
import { Meta, Story } from "@storybook/react";

const generateStoryComponent = () => {
  const StoryComponent: Story<Props> = (args) => <GlobeBanner {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: GlobeBanner,
  title: "Site/GlobeBanner",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  children: `Teleport is a remote-first technology company with satellite offices in Oakland and Seattle.
  `,
};
