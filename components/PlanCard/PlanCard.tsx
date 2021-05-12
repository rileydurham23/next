import styled from "styled-components";
import css from "@styled-system/css";
import Button from "components/Button";
import Icon from "components/Icon";
import Box from "components/Box";
import Flex, { FlexProps } from "components/Flex";
import { StyledSystemProps } from "components/system";
import { BillingKind, Plan, CardHeight } from "./types";
import { Price } from "./Price";

export type Props = FlexProps & {
  plan: Plan;
  hideBadge?: boolean;
  charge?: number;
  accented?: boolean;
};

export default function PlanCard({
  plan,
  accented,
  charge,
  hideBadge,
  ...props
}: Props) {
  const { title, billing, features, description, action, icon } = plan;
  const isMontlyTemplate =
    billing.kind === BillingKind.MONTHLY && typeof charge !== "number";
  const zeroMonthlyPayment = billing.kind === BillingKind.MONTHLY && !charge;

  return (
    <Flex
      p={4}
      as="article"
      flexDirection="column"
      borderRadius="md"
      border="1px solid"
      backgroundColor="white"
      borderColor={accented ? "dark-purple" : "light-gray"}
      boxShadow={accented ? "0 8px 32px rgb(0 0 0 / 24%)" : "none"}
      minHeight={accented ? CardHeight.ACCENT : CardHeight.PLAIN}
      {...props}
    >
      <Flex alignItems="center">
        <Icon name={icon} size="lg" color="dark-purple" />
        <Box
          as="h2"
          text={["text-md", "text-xl"]}
          lineHeight="18px"
          color="dark-purple"
          alignSelf="flex-end"
          ml="1"
        >
          {title}
        </Box>
        {!hideBadge && accented && (
          <StyledRecommended>Recommended</StyledRecommended>
        )}
      </Flex>
      <Flex alignItems="flex-end" mt={[2, 4]}>
        <Price
          billing={billing}
          charge={charge}
          isTemplate={isMontlyTemplate || zeroMonthlyPayment}
        />
      </Flex>
      <Box as="p" text={["text-sm", "text-md"]} color="gray" mt="2">
        {description}
      </Box>
      <Box as="ul" mt="3">
        {features.map((feature, index) => (
          <Flex
            as="li"
            key={index}
            mt={index === 0 ? 0 : 2}
            alignItems="baseline"
          >
            <Icon name="checkmarkCircle" size="sm" color="green" />
            <Box as="p" text="text-lg" color="darkest" ml="2">
              {feature}
            </Box>
          </Flex>
        ))}
      </Box>
      {isMontlyTemplate && (
        <Box as="p" text="text-sm" color="gray" fontStyle="italic" mt="auto">
          * Billed monthly. Pricing depends on the type of connected resources.
          See calculator below.
        </Box>
      )}
      <Button
        as="a"
        href={action.url}
        width="100%"
        mt="auto"
        variant={accented ? "primary" : "secondary"}
        shape="lg"
      >
        {action.title}
      </Button>
    </Flex>
  );
}

const StyledRecommended = styled("span")<StyledSystemProps>(
  css({
    fontSize: "text-sm",
    lineHeight: "md",
    textTransform: "uppercase",
    fontWeight: "bold",
    borderRadius: "circle",
    color: "white",
    bg: "green",
    ml: "auto",
    px: "2",
  })
);
