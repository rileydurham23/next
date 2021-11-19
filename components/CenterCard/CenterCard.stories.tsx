import { Story } from "@storybook/react";
import { CenterCard, CenterCardProps } from "./CenterCard";

const StoryComponent: Story<CenterCardProps> = (args) => (
  <CenterCard {...args} />
);

export default {
  component: StoryComponent,
  title: "Site/CenterCard",
};

export const Default = StoryComponent.bind({});

Default.args = {
  name: "check",
  title: "Why Financial Services Trust Teleport?",
  text: "That’s why financial services providers big and small trust Teleport. Our unique approach is not only more secure, it actually improves developer productivity. By providing an infrastructure access solution that developers love to use, you can easily implement security and compliance without worrying about backdoors that outmoded solutions encourage.",
};
