import History, { Props } from "./History";
import { Meta, Story } from "@storybook/react";

const generateStoryComponent = () => {
  const StoryComponent: Story<Props> = (args) => <History {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: History,
  title: "Site/History",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  children: (
    <History.Milestone icon="pc">
      Teleport founders fell in love with programming by giving a computer some
      instructions and watching the magic happen. The close relationship between
      a programmer, a machine, and code felt special.
    </History.Milestone>
  ),
};
