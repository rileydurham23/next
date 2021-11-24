import { ReactNode } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import css from "@styled-system/css";
import { all, StyledSystemProps } from "components/system";
import Box from "components/Box";
import Flex from "components/Flex";
import { Centrator } from "components/Layout";
import Heading from "components/Heading";
import theme from "components/theme";

const SSRLessGlob = dynamic(() => import("components/Globe"), {
  ssr: false,
});

export interface Props {
  children: ReactNode;
}

export default function Manifesto({ children }: Props) {
  let renderGlobe = false;
  if (typeof window !== "undefined") {
    const desktopBreakpoint = theme.breakpoints[theme.breakpoints.length - 1];
    const value = parseInt(desktopBreakpoint, 10);
    renderGlobe = window.innerWidth >= value;
  }
  return (
    <Box as="section" overflow="hidden" mb="-164px">
      <Box gradient="purpleToBlack" py="10">
        <Centrator flexDirection="column" color="white">
          <Heading title="Teleport Manifesto" dark />
          <StyledContentContainer mt="3">{children}</StyledContentContainer>
        </Centrator>
      </Box>
      <Flex justifyContent="flex-end" minHeight="164px">
        <Box mt="-700px" mr="-250px" display={["none", "none", "block"]}>
          {renderGlobe ? <SSRLessGlob width={864} height={864} /> : null}
        </Box>
      </Flex>
    </Box>
  );
}

const StyledContentContainer = styled("div")<StyledSystemProps>(
  css({
    fontSize: "header-4",
    lineHeight: "lg",
    width: ["100%", "100%", "50%"],
    "> p": {
      fontSize: "text-lg",
      lineHeight: "28px",
      m: 0,
    },
  }),
  all
);
