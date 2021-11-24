import { MDXProvider } from "@mdx-js/react";
import { Story } from "@storybook/react";
import Image from "next/image";
import { components } from "layouts/SitePage";
import { SectionVisuals, SectionVisualsProps } from "./SectionVisuals";
import imageSrc from "./fixtures/red.png";

const StoryComponent: Story<SectionVisualsProps> = (args) => (
  <MDXProvider components={components}>
    <SectionVisuals {...args} />
  </MDXProvider>
);

export default {
  component: StoryComponent,
  title: "Site/Section/SectionVisuals",
};

export const Default = StoryComponent.bind({});

Default.args = {
  subtitle: "Approve Access",
  title: "Leverage Existing Tools",
  description: (
    <>
      <p>
        Approve access requests using the tools you already have, such as Slack,
        PagerDuty, and others. This allows security teams to approve or deny
        requests quickly and avoids frustration for engineers who need to get
        the job done.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s.
      </p>
    </>
  ),
  children: (
    <Image src={imageSrc} width={400} height={400} layout="intrinsic" alt="" />
  ),
};
