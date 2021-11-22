import { Meta, Story } from "@storybook/react";
import { Sidebar, SidebarProps } from "./Sidebar";

const generateStoryComponent = () => {
  const StoryComponent: Story<SidebarProps> = (args) => <Sidebar {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: Sidebar,
  title: "Sidebar",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  title: "What is Login?",
  hiddenOnMobile: false,
  children: `When we talk about "logging into" a Teleport cluster, this means receiving a freshly issued certificate from a certificate authority (CA), such as from the Teleport Auth Service.`,
};
