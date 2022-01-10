import css from "@styled-system/css";
import Box, { BoxProps } from "components/Box";
import Flex from "components/Flex";
import Centrator from "components/Centrator";
import SectionPlanCard from "./SectionPlanCard";

export type PlanProps = {
  plans: React.ComponentProps<typeof SectionPlanCard>[];
} & BoxProps;

export default function Plan({ plans, title, ...props }: PlanProps) {
  return (
    <Box as="section" {...props}>
      <Centrator listStyle="none" flexDirection="column" alignItems="center">
        <Box
          as="h1"
          fontSize={["header-1", "hero-header"]}
          lineHeight={["xxl", "hero-header"]}
          mt={[4]}
          mb={[4, 8]}
          fontWeight="black"
        >
          {title}
        </Box>
        <Flex
          as="ul"
          alignItems="stretch"
          flexDirection={["column", "row"]}
          mt="0"
          mb={[4, 9]}
          maxWidth="910px"
          p="0"
        >
          {plans.map((plan, index) => (
            <Flex
              key={index}
              as="li"
              alignItems="stretch"
              mt={[3, 0]}
              justifyContent="stretch"
              py={plan.large ? 0 : [0, 4]}
              flex={plan.large ? ["1 0 0", "2 0 0"] : "1 0 0"}
              css={css({
                "&:first-child": {
                  mt: 0,
                },
              })}
            >
              <SectionPlanCard {...plan} />
            </Flex>
          ))}
        </Flex>
      </Centrator>
    </Box>
  );
}
