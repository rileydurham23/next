import { Plan } from "components/PlanCard";
import { meta } from "./plans.mdx";

let plans: Plan[] = [];

if (isPlans(meta?.plans)) {
  plans = meta.plans;
}

export const ENTERPRISE_LIMIT = Number(meta.enterprise_limit ?? 0);

export function getPlanByPrice(price: number): Plan {
  let predicate: (plan: Plan) => boolean;
  if (price < ENTERPRISE_LIMIT) {
    predicate = ({ defaultRecommended }) => defaultRecommended;
  } else {
    predicate = ({ enterpriseRecommended }) => enterpriseRecommended;
  }

  return plans.find(predicate);
}

function isPlans(maybyPlans: unknown): maybyPlans is Plan[] {
  if (!Array.isArray(maybyPlans)) {
    throw new Error("PlanCalculator:plans is not a list");
  }

  // we should add an accurate validation here if applicable

  return true;
}

export default plans;
