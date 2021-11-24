import Grid, { GridProps } from "./Grid";
import { Meta, Story } from "@storybook/react";

const generateStoryComponent = () => {
  const StoryComponent: Story<GridProps> = (args) => <Grid {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: Grid,
  title: "Grid",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  children: (
    <>
      <h1>1</h1>
      <h1>2</h1>
      <h1>3</h1>
    </>
  ),
};
