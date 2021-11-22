import { HowItWorksItems } from "components/TOC/TOCs/ItemsLists";
import { HowItWorksTOC } from "components/TOC/TOCs/HowItWorksTOC";
import { Meta, Story } from "@storybook/react";
import { TOCLayout } from "./TOCLayout";
import { TOCLayoutProps } from "./TOCLayout";

const generateStoryComponent: () => Story<TOCLayoutProps> = () => {
  const StoryComponent: Story<TOCLayoutProps> = (args) => (
    <TOCLayout {...args} />
  );

  return StoryComponent;
};

const meta: Meta = {
  component: TOCLayout,
  title: "Site/TOCLayout",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  TOC1: <HowItWorksTOC title="TABLE OF CONTENTS" itemList={HowItWorksItems} />,
  TOC2: (
    <HowItWorksTOC
      title="HOW TELEPORT WORKS"
      header="What's Next"
      footer={true}
      itemList={HowItWorksItems}
    />
  ),
};
