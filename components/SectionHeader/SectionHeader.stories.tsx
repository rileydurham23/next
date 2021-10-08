import { Story } from "@storybook/react";
import { MDXProvider } from "@mdx-js/react";
import { components } from "layouts/SitePage";
import { SectionHeader, SectionHeaderProps } from "./SectionHeader";
import imageSrc from "./fixtures/red.png";

const StoryComponent: Story<SectionHeaderProps> = (args) => (
  <MDXProvider components={components}>
    <SectionHeader {...args} />
  </MDXProvider>
);

export default {
  component: StoryComponent,
  title: "Site/SectionHeader",
};

export const Default = StoryComponent.bind({});

Default.args = {
  subtitle: "Access Plane",
  title: "Multi-Factor Authentication",
  description:
    "Easily implement Multi-Factor Authentication across your organization  without relying on device management systems. Teleport MFA is designed for distributed teams and comes with a self-enrollment MFA portal.",
  children: (
    <img alt="" src={imageSrc} style={{ maxWidth: "300px", width: "100%" }} />
  ),
};
