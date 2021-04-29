import { Story } from "@storybook/react";
import Flex from "../Flex";
import PlanCard, { Props } from "./PlanCard";
import { BillingKind, Plan } from "./types";

const PLANS: Plan[] = [
  {
    icon: "download",
    title: "Open Source",
    description:
      "For engineers who prefer to build and run their own software.",
    features: [
      "Self-hosted",
      "All OSS features",
      "Github SSO integration",
      "Community support",
    ],
    action: { title: "Download", url: "/teleport/download/" },
    billing: { kind: BillingKind.FREE },
  },
  {
    icon: "shieldCheck",
    title: "Pro",
    description:
      "For teams that require easy and secure access to their computing environments.",
    features: [
      "Cloud hosted",
      "Access Workflows",
      "Enterprise SSO",
      "8x5 support",
      "Usage-based pricing",
    ],
    action: { title: "Try It Free", url: "/signup/" },
    billing: { kind: BillingKind.MONTHLY, defaultCharge: 5 },
  },
  {
    icon: "apartment",
    title: "Enterprise",
    description:
      "For larger organizations that require more flexibility and complete control.",
    features: [
      "Cloud and self-hosted options",
      "Volume discounts",
      "24x7 support with premium SLAs & account managers",
      "Annual or Multi-Year contracts",
      "FedRAMP compliance package",
      "Multi-region deployments",
    ],
    action: { title: "Contact Sales", url: "/signup/enterprise" },
    billing: { kind: BillingKind.CUSTOM },
  },
];

const StoryComponent: Story<Props> = (args) => (
  <Flex
    bg="white"
    width="100%"
    display="inline-flex"
    p="2"
    alignItems="center"
    justifyContent="center"
  >
    <PlanCard width={["100%", "33%"]} {...args} />
  </Flex>
);

export default {
  component: PlanCard,
  title: "PlanCard",
};

export const Plain = StoryComponent.bind({});

Plain.args = {
  plan: PLANS[0],
};

export const Accented = StoryComponent.bind({});

Accented.args = {
  plan: PLANS[1],
  accented: true,
};

export const Enterprise = StoryComponent.bind({});

Enterprise.args = {
  plan: PLANS[2],
};

export const WithCharge = StoryComponent.bind({});

WithCharge.args = {
  plan: PLANS[1],
  charge: 1800,
};
