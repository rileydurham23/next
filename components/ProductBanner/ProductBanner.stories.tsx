import { Story } from "@storybook/react";
import { ProductBanner, ProductBannerProps } from "./ProductBanner";

import server from "./fixtures/server-access.png";

const StoryComponent: Story<ProductBannerProps> = (args) => (
  <ProductBanner {...args} />
);

export default {
  component: StoryComponent,
  title: "Site/ProductBanner",
};

export const Default = StoryComponent.bind({});

Default.args = {
  imgPosition: "right",
  title: "Secure your servers & meet compliance requirements",
  subtitle: "For DevSecOps",
  src: server,
  alt: "a diagram of server architecture",
  description:
    "Teleport delivers industry best practices for SSH and RDP access with minimal configuration. Easily enforce MFA, RBAC, and SSO using identity-based short-lived certificates and leave SSH keys behind.",
  children: (
    <>
      <ProductBanner.Item title="Access Controls" badgeName="question">
        Teleport offers all required server access controls to implement
        compliance standards such as SOC2, PCI, and FedRAMP.
      </ProductBanner.Item>
      <ProductBanner.Item title="Access Requests" badgeName="check">
        Move away from root accounts with just-in-time privilege escalation for
        administrative tasks.
      </ProductBanner.Item>
      <ProductBanner.Item title="Per Session MFA" badgeName="shieldCheck">
        Easily implement multi-factor authentication across your organization
        without relying on device management systems.
      </ProductBanner.Item>
    </>
  ),
};
