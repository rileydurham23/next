import { Meta, Story } from "@storybook/react";
import { Terminal, TerminalProps } from "./Terminal";

const generateStoryComponent = () => {
  const StoryComponent: Story<TerminalProps> = (args) => <Terminal {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: Terminal,
  title: "Site/Terminal",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  children: (
    <pre>
      <code style={{ color: "white" }}>Lorem ipsum dolor</code>
    </pre>
  ),
};
