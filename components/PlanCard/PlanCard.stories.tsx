import { Story } from "@storybook/react";
import Flex from "../Flex";
import { PlanCard as Component, PlanCardProps } from "./PlanCard";
import { PlanIcon, BillingKind, Plan } from "./types";

const PLANS: Plan[] = [
  {
    id: "p1",
    icon: PlanIcon.DOWNLOAD,
    title: "Open Source",
    description:
      "For engineers who prefer to build and run their own software.",
    features: [
      { id: "1", title: "Self-hosted" },
      { id: "2", title: "All OSS features" },
      { id: "3", title: "Github SSO integration" },
      { id: "4", title: "Community support" },
    ],
    action: { title: "Download", url: "/teleport/download/" },
    billing: { kind: BillingKind.FREE },
  },
  {
    id: "p2",
    icon: PlanIcon.SHIELD,
    title: "Pro",
    description:
      "For teams that require easy and secure access to their computing environments.",
    features: [
      { id: "1", title: "Cloud hosted" },
      { id: "2", title: "Access Workflows" },
      { id: "3", title: "Enterprise SSO" },
      { id: "4", title: "8x5 support" },
      { id: "5", title: "Usage-based pricing" },
    ],
    action: { title: "Try It Free", url: "/signup/" },
    billing: { kind: BillingKind.MONTHLY, defaultCharge: 5 },
  },
  {
    id: "p3",
    icon: PlanIcon.BUSINESS,
    title: "Enterprise",
    description:
      "For larger organizations that require more flexibility and complete control.",
    features: [
      { id: "1", title: "Cloud and self-hosted options" },
      { id: "2", title: "Volume discounts" },
      { id: "3", title: "24x7 support with premium SLAs & account managers" },
      { id: "4", title: "Annual or Multi-Year contracts" },
      { id: "5", title: "FedRAMP compliance package" },
      { id: "6", title: "Multi-region deployments" },
    ],
    action: { title: "Contact Sales", url: "/signup/enterprise" },
    billing: { kind: BillingKind.CUSTOM },
  },
];

const StoryComponent: Story<PlanCardProps> = (args) => (
  <Flex
    bg="white"
    width="100%"
    display="inline-flex"
    p="2"
    alignItems="center"
    justifyContent="center"
  >
    <Component width={["100%", "33%"]} {...args} />
  </Flex>
);

export default {
  component: Component,
  title: "PlanCard",
};

export const Plain = StoryComponent.bind({});

Plain.args = {
  data: PLANS[0],
};

export const Accented = StoryComponent.bind({});

Accented.args = {
  data: PLANS[1],
  accented: true,
};

export const Enterprise = StoryComponent.bind({});

Enterprise.args = {
  data: PLANS[2],
};

export const WithCharge = StoryComponent.bind({});

WithCharge.args = {
  data: PLANS[1],
  charge: 1800,
};
