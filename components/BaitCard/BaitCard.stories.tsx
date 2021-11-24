import BaitCard, { BaitCardProps } from "./BaitCard";
import { Meta, Story } from "@storybook/react";

const generateStoryComponent = () => {
  const StoryComponent: Story<BaitCardProps> = (args) => <BaitCard {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: BaitCard,
  title: "Site/BaitCard",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  img: "../../pages/case-study/assets/city-tile.jpg",
  imgBG: "#7da6d3",
  logo: "../Company/assets/logo-accenture.svg",
  link: "/case-study/ecmwf/",
  textLink: "Read the Case Study",
  description: "How third parties securely access supercomputing clusters",
  side: "right",
};
