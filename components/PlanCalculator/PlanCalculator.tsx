import { useState } from "react";
import css from "@styled-system/css";
import styled from "styled-components";
import wavePngUrl from "sharedAssets/images/wave-light.png";
import Flex from "components/Flex";
import Box, { BoxProps } from "components/Box";
import PlanCard from "components/PlanCard";
import { Centrator } from "components/Layout";
import theme from "components/theme";
import { formatMoney } from "utils/formatMoney";
import plans, { ENTERPRISE_LIMIT, getPlanByPrice } from "./plans";
import Calculator from "./Calculator";

export default function PlanCalculator(props: BoxProps) {
  const [price, setPrice] = useState(0);
  const plan = getPlanByPrice(price);
  const partition = 100 / plans.length;

  const background = [
    `url(${wavePngUrl}) 0 0 no-repeat`,
    theme.gradients.grayToWhite.background,
  ].join(",");

  return (
    <Box {...props}>
      {renderPlanList(plans.indexOf(plan))}
      <Box
        background={background}
        py={[3, 5]}
        mt={[5, 7]}
        borderTop="1px solid"
        borderTopColor="lightest-gray"
      >
        <Centrator flexDirection="column">
          <Box as="h2" text={["header-3", "header-1"]} fontWeight="black">
            Calculate Your Pricing
          </Box>
          <Box as="p" text="text-md" color="darkest" mt="3">
            {`Select the type of access you need, adjust the values to calculate
            pricing based on the footprint of your computing environments. If
            the usage-based price exceeds $${formatMoney(
              ENTERPRISE_LIMIT
            )}/month we recommend our
            Enterprise offering.`}
          </Box>
          <Flex
            alignItems="center"
            flexDirection={["column", "row"]}
            mt={[3, 7]}
          >
            <Calculator
              onChange={setPrice}
              width={["100%", `${100 - partition}%`]}
            />
            {plan && (
              <PlanCard
                plan={plan}
                ml={[0, "-1px"]}
                mt={[3, 0]}
                width={["100%", `${partition}%`]}
                charge={plan.defaultRecommended ? price : 0}
                hideBadge
                accented
              />
            )}
          </Flex>
        </Centrator>
      </Box>
    </Box>
  );
}

function renderPlanList(selectedIndex: number) {
  return (
    <Centrator
      as="ul"
      listStyle="none"
      m="0"
      p="0"
      flexDirection={["column", "row"]}
      alignItems="center"
    >
      {plans.map((plan, index) => {
        const accented = index === selectedIndex;
        return (
          <StyledPlanListItem
            as="li"
            key={index}
            zIndex={accented ? 1 : "initial"}
          >
            <PlanCard plan={plan} accented={accented} />
          </StyledPlanListItem>
        );
      })}
    </Centrator>
  );
}

const StyledPlanListItem = styled(Box)(
  css({
    width: ["100%", `${100 / plans.length}%`],
    ml: [0, "-1px"],
    mt: [3, 0],
    "&:first-child": {
      ml: [0, 0],
      mt: [0, 0],
    },
  })
);
