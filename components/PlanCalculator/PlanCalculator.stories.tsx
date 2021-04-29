import Flex from "../Flex";
import Component from "./PlanCalculator";

export default {
  component: Component,
  title: "PlanCalculator",
};

export const PlanCalculator = () => (
  <Flex
    bg="white"
    width="100%"
    display="inline-flex"
    p="2"
    alignItems="center"
    justifyContent="center"
  >
    <Component />
  </Flex>
);
