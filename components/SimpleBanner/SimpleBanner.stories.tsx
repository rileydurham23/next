import { Meta, Story } from "@storybook/react";
import { SimpleBanner, SimpleBannerProps } from "./SimpleBanner";

const generateStoryComponent = () => {
  const StoryComponent: Story<SimpleBannerProps> = (args) => (
    <SimpleBanner {...args} />
  );

  return StoryComponent;
};

const meta: Meta = {
  component: SimpleBanner,
  title: "Site/SimpleBanner",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  children: (
    <>
      <SimpleBanner.Item isBadge src="card" title="Tied Access to Identity">
        Identity attributes are interpreted by the Kubernetes API, letting
        developers keep one contiguous identity from OneLogin to infrastructure.
      </SimpleBanner.Item>
      <SimpleBanner.Item isBadge src="shieldCheck" title="Met SOC 2 Compliance">
        In 2020, thredUP updated their security best practices for an upcoming
        SOC 2 certification. Detailed audit logging and RBAC let them pass well
        above the minimum requirements
      </SimpleBanner.Item>
      <SimpleBanner.Item isBadge src="clock" title="Freed Up Time">
        Using an in-house solution meant long setup times for developers and a
        dedicated employee for support. Teleport freed up resources with
        out-of-the-box setup.
      </SimpleBanner.Item>
    </>
  ),
};
