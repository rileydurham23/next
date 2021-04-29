import { IconName } from "components/Icon";

export enum BillingKind {
  MONTHLY = "monthly",
  FREE = "free",
  CUSTOM = "custom",
}

export enum CardHeight {
  ACCENT = 512,
  PLAIN = 488,
}

interface MonthlyBilling {
  kind: BillingKind.MONTHLY;
  defaultCharge: number;
}

interface SpecialBilling {
  kind: BillingKind.FREE | BillingKind.CUSTOM;
}

export type Billing = SpecialBilling | MonthlyBilling;

export interface Plan {
  icon: IconName;
  title: string;
  description: string;
  features: string[];
  action: {
    title: string;
    url: string;
  };
  billing: Billing;
  defaultRecommended?: boolean;
  enterpriseRecommended?: boolean;
}
