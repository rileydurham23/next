import { Story } from "@storybook/react";
import imageSrc from "./fixtures/image.png";
import { Figure, FigureProps, Image } from "./Image";

const Component: Story<FigureProps> = (args) => <Figure {...args} />;

export default {
  component: Figure,
  subcomponent: [Image],
  title: "Docs/Figure",
};

export const Center = Component.bind({});

Center.args = {
  align: "center",
  caption: "Caption example",
  children: (
    <Image src={imageSrc} width="581" height="265" alt="" unoptimized />
  ),
};

export const Left = Component.bind({});

Left.args = {
  align: "left",
  caption: "Caption example",
  children: (
    <Image src={imageSrc} width="581" height="265" alt="" unoptimized />
  ),
};

export const Right = Component.bind({});

Right.args = {
  align: "right",
  caption: "Caption example",
  children: (
    <Image src={imageSrc} width="581" height="265" alt="" unoptimized />
  ),
};

export const Bordered = Component.bind({});

Bordered.args = {
  align: "center",
  bordered: true,
  caption: "Caption example",
  children: (
    <Image src={imageSrc} width="581" height="265" alt="" unoptimized />
  ),
};
