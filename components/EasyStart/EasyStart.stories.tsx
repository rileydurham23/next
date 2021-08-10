import { Story } from "@storybook/react";
import { EasyStart, EasyStartProps } from "./EasyStart";
import Terminal from "../Terminal";
import MDX from "../MDX";

const StoryComponent: Story<EasyStartProps> = (args) => (
  <MDX>
    <EasyStart {...args} />
  </MDX>
);

export default {
  component: EasyStart,
  title: "Site/EasyStart",
};

export const Default = StoryComponent.bind({});

Default.args = {
  children: (
    <Terminal>
      ``` # on a client $ tsh login --proxy=example.com # on a server $ apt
      install teleport # in a Kubernetes cluster $ helm install ```
    </Terminal>
  ),
};
