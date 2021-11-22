import JobList, { Props } from "./JobList";
import { Meta, Story } from "@storybook/react";

const generateStoryComponent = () => {
  const StoryComponent: Story<Props> = (args) => <JobList {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: JobList,
  title: "Site/JobList",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  jobs: [
    {
      commitment: "365/24/7",
      department: "engineering",
      location: "remote",
      team: "ux",
      id: "best-team-ever",
      text: "frontend-engineer",
      hostedUrl: "https://goteleport.com",
      createdAt: 0,
    },
  ],
  id: "jobs",
};
