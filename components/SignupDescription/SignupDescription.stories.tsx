import { Meta, Story } from "@storybook/react";
import SignupDescription, { Props } from "./SignupDescription";

const generateStoryComponent = () => {
  const StoryComponent: Story<Props> = (args) => (
    <SignupDescription {...args} />
  );

  return StoryComponent;
};

const meta: Meta = {
  component: SignupDescription,
  title: "Site/SignupDescription",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  description:
    "Teleport helps developers & security professionals quickly and securely access servers, applications, Kubernetes clusters, and databases from anywhere, across all environments. Chat with our team of solutions engineers to learn more about Teleport and how it could work for your particular use case.",
  video: "0HlyGk8dihM",
};
