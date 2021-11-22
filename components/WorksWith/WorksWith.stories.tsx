import { Story } from "@storybook/react";

import { WorksWith, WorksWithProps } from "./WorksWith";

const StoryComponent: Story<WorksWithProps> = (args) => <WorksWith {...args} />;

export default {
  component: StoryComponent,
  title: "Site/WorksWith",
};

export const Default = StoryComponent.bind({});

Default.args = {
  title: "Works with everything you have",
  children:
    "Teleport Server Access is open source and it relies on open standards such as X.509 certificates, HTTPS, SAML, OpenID connect and others. Deployed as a single-binary, it seamlessly integrates with the rest of your stack.",
};
