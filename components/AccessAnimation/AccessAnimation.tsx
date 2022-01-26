import css from "@styled-system/css";
import styled from "styled-components";

import { BackgroundAnimation } from "components/AccessAnimation";
import { Controls } from "components/AccessAnimation";
import Flex from "components/Flex";

interface AccessAnimationProps {
  onChange: (id) => void;
}

const AccessAnimation: React.FC<AccessAnimationProps> = ({ onChange }) => {
  return (
    <AnimationContainer>
      <Controls onChange={onChange} />
      <BackgroundAnimation />
    </AnimationContainer>
  );
};

export default AccessAnimation;

const AnimationContainer = styled(Flex)(
  css({
    height: "400px",
    position: "relative",
    width: "400px",
  })
);
