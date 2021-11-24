import { Story } from "@storybook/react";
import PromoPointsBlock, { PromoPointsBlockProps } from "./PromoPointsBlock";
import cover from "./fixtures/cover.png";

const Component: Story<PromoPointsBlockProps> = (args) => (
  <PromoPointsBlock {...args} />
);

export default {
  component: PromoPointsBlock,
  subcomponent: [PromoPointsBlock.Item],
  title: "Site/PromoPointsBlock",
};

export const Main = Component.bind({});

Main.args = {
  title: "Download the PDF to learn:",
  src: cover,
  children: (
    <>
      <PromoPointsBlock.Item icon="bolt">
        The implications of the top 10 security hacks
      </PromoPointsBlock.Item>
      <PromoPointsBlock.Item icon="card">
        The role of the cybersecurity industry
      </PromoPointsBlock.Item>
      <PromoPointsBlock.Item icon="shieldCheck">
        How Teleport could have changed the results
      </PromoPointsBlock.Item>
    </>
  ),
};
