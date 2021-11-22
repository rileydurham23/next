import Manifesto, { Props } from "./Manifesto";
import { Meta, Story } from "@storybook/react";

const generateStoryComponent = () => {
  const StoryComponent: Story<Props> = (args) => <Manifesto {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: Manifesto,
  title: "Site/Manifesto",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  children: ` Today's computing environments have too much complexity, too many network
  boundaries, and too little trust. Complexity slows engineers down and leads to
  human errors. Complex systems can’t be secure despite the red tape of
  bureaucracy. We make trusted computing simple. This gives engineers
  freedom to move and freedom to build a better future.`,
};
