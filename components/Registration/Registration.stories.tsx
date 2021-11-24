import { Meta, Story } from "@storybook/react";
import { Registration, RegistrationProps } from "./Registration";
import sonos from "../../archive/sample-raffle/assets/sonos.svg";

const generateStoryComponent = () => {
  const StoryComponent: Story<RegistrationProps> = (args) => (
    <Registration {...args} />
  );

  return StoryComponent;
};

const meta: Meta = {
  component: Registration,
  title: "Site/Registration",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  formID: "1179",
  headTitle: "All Day DevOps Speaker Raffle",
  headDescription: "Register",
  mainImage: sonos,
  title: "Win a Sonos speaker!",
  description: "We'll send you the best of our blog and industry news.",
  CTA: "All Day DevOps Speaker Raffle",
  subCTA: "Please sign up here for your chance to win a Sonos speaker!",
};
