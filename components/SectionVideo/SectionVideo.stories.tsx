import { Story } from "@storybook/react";
import { MDXProvider } from "@mdx-js/react";
import { components } from "layouts/SitePage";
import { SectionVideo, SectionVideoProps } from "./SectionVideo";

const StoryComponent: Story<SectionVideoProps> = (args) => (
  <MDXProvider components={components}>
    <SectionVideo {...args} />
  </MDXProvider>
);

export default {
  component: StoryComponent,
  title: "Site/Section/SectionVideo",
};

export const Default = StoryComponent.bind({});

Default.args = {
  title: "Demo Video",
  videoId: "j8Ze7HhjFGw",
  children: (
    <>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Dummy text of the printing and typesetting industry. Lorem
        Ipsum is simply dummy text of the printing and typesetting industry.
        Dummy text of the printing and typesetting industry. Lorem Ipsum is
        simply dummy text of the printing and typesetting industry. Dummy text
        of the printing and typesetting industry. Lorem Ipsum is simply dummy
        text of the printing and typesetting industry. Dummy text of the
        printing and typesetting industry.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.Dummy text of the printing and typesetting industry….
      </p>
    </>
  ),
};
