import Layout, { LayoutProps } from "./Layout";
import { Meta, Story } from "@storybook/react";
import SectionHeader from "components/SectionHeader";

const generateStoryComponent = () => {
  const StoryComponent: Story<LayoutProps> = (args) => <Layout {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: Layout,
  title: "Site/Layout",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  children: (
    <SectionHeader
      subtitle="How Teleport Works"
      title="Certificate-Based Authentication"
      description="All forms of access based on shared secrets are insecure. Certificate-based access is the better option. This section explains how Teleport implements certificate-based authentication for SSH, Kubernetes and other supported protocols"
    />
  ),
};
