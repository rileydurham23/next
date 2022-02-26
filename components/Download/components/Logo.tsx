import { styled } from "@stitches/react";

import { Flex } from "./Flex";
import LogoSvg from "./assets/logo.svg?react";

const Logo = () => (
  <LogoContainer>
    <LogoSvg width="100%" height="100%" />
  </LogoContainer>
);

export default Logo;

const LogoContainer = styled(Flex, {
  lineHeight: 0,
  width: "128px",
  height: "27px",
  color: "$dark-purple",
});
