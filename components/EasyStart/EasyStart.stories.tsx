import { Story } from "@storybook/react";
import { MDXProvider } from "@mdx-js/react";
import { components } from "layouts/SitePage";
import { EasyStart, EasyStartProps } from "./EasyStart";
import Terminal from "../Terminal";

const StoryComponent: Story<EasyStartProps> = (args) => (
  <MDXProvider components={components}>
    <EasyStart {...args} />
  </MDXProvider>
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
