import Box from "../Box";
import { Meta, Story } from "@storybook/react";

import { Section, SectionProps } from "./Section";

const generateStoryComponent = () => {
  const StoryComponent: Story<SectionProps> = (args) => <Section {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: Section,
  title: "Site/Section/Section",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  children: (
    <>
      <Box border="1px solid" borderColor="light-gray">
        <Section>
          <Box height="400px" />
        </Section>
      </Box>
      <Box border="1px solid" borderColor="light-gray" mt={3}>
        <Section bg="grayGradient">
          <Box height="400px" />
        </Section>
      </Box>
      <Box border="1px solid" borderColor="light-gray" mt={3}>
        <Section bg="purple">
          <Box height="400px" />
        </Section>
      </Box>
      <Box border="1px solid" borderColor="light-gray" mt={3}>
        <Section bg="squares">
          <Box height="400px" />
        </Section>
      </Box>
    </>
  ),
};
