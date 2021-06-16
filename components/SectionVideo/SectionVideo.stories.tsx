import { Story } from "@storybook/react";
import MDX from "../MDX";
import { SectionVideo, SectionVideoProps } from "./SectionVideo";

const StoryComponent: Story<SectionVideoProps> = (args) => (
  <MDX>
    <SectionVideo {...args} />
  </MDX>
);

export default {
  component: StoryComponent,
  title: "SectionVideo",
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
