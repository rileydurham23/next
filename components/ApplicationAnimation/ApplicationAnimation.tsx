import { useState } from "react";
import { AnimatedResetButton } from "components/AnimationUtilities/AnimationUtilities";
import { ApplicationBrowser } from "components/AnimationUtilities/ApplicationBrowserAnimation";
import Flex from "components/Flex";

export interface AnimationProps {
  animationType: "application" | "desktop";
}

export const ApplicationAnimation = ({ animationType }: AnimationProps) => {
  const [containerState, setContainerState] = useState(0);

  return (
    <Flex
      key={containerState}
      position="relative"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      mx={[3, 5]}
      my={[1, 2]}
      pt={[4, 5]}
    >
      <AnimatedResetButton
        position="absolute"
        top={["50px", "35px"]}
        variant="secondary"
        shape="outline"
        onClick={() => {
          setContainerState(Math.random());
        }}
      >
        Replay Animation
      </AnimatedResetButton>
      <Flex
        flexDirection="column"
        justifyContent="flex-end"
        alignItems="center"
        height={410}
        overflowY="hidden"
        position="relative"
        width="100%"
        maxWidth="588px"
        borderRadius="0 0 8px 8px"
      >
        <ApplicationBrowser animationType={animationType} />
      </Flex>
    </Flex>
  );
};
