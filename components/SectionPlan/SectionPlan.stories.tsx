import data from "../../pages/pricing/data.yaml";
import { Meta, Story } from "@storybook/react";
import SectionPlan, { PlanProps } from "./SectionPlan";

const generateStoryComponent = () => {
  const StoryComponent: Story<PlanProps> = (args) => <SectionPlan {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: SectionPlan,
  title: "Site/Section/SectionPlan",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  title: "Get Started with Teleport",
  plans: data.plans,
};
