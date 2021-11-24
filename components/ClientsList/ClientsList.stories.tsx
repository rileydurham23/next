import ClientsList, { Props } from "./ClientsList";
import { Meta, Story } from "@storybook/react";

const generateStoryComponent = () => {
  const StoryComponent: Story<Props> = (args) => <ClientsList {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: ClientsList,
  title: "Site/ClientsList",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  clients: [
    "absolute",
    "accenture",
    "acquia",
    "aenetworks",
    "anaconda",
    "asapp",
  ],
};
