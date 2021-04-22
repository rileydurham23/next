interface Feature {
  id: string;
  title: string;
}

export enum PlanIcon {
  DOWNLOAD = "download",
  SHIELD = "shieldCheck",
  BUSINESS = "apartment",
}

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
  id: string;
  icon: PlanIcon;
  title: string;
  description: string;
  features: Feature[];
  action: {
    title: string;
    url: string;
  };
  billing: Billing;
  defaultRecommended?: boolean;
  enterpriseRecommended?: boolean;
}
