import Box from "components/Box";
import { formatMoney } from "utils/formatMoney";
import { Billing, BillingKind } from "./types";
import { MonthlyLabel } from "./MonthlyLabel";

const BILLING_LABELS = {
  [BillingKind.CUSTOM]: "Custom",
  [BillingKind.FREE]: "Free",
};

interface PriceProps {
  billing: Billing;
  charge?: number;
  isTemplate?: boolean;
}

export function Price({ billing, charge, isTemplate }: PriceProps) {
  const showLabel = Boolean(charge) || isTemplate;
  let value;

  switch (billing.kind) {
    case BillingKind.MONTHLY: {
      value = `$${formatMoney(charge || billing.defaultCharge)}`;
      break;
    }
    default: {
      value = BILLING_LABELS[billing.kind];
    }
  }

  return (
    <>
      <Box
        as="span"
        fontSize={["header-3", "header-1"]}
        lineHeight={["md", "lg"]}
        fontWeight="black"
      >
        {value}
      </Box>
      {showLabel && <MonthlyLabel charge={charge} />}
    </>
  );
}
