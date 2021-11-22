import { Launchpad, LaunchpadProps } from "./Launchpad";
import { launchpadData } from "components/Footer/structure";
import { Meta, Story } from "@storybook/react";

const generateStoryComponent = () => {
  const StoryComponent: Story<LaunchpadProps> = (args) => (
    <Launchpad {...args} />
  );

  return StoryComponent;
};

const meta: Meta = {
  component: Launchpad,
  title: "Site/Launchpad",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  sections: launchpadData,
};
