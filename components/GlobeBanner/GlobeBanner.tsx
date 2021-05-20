import { ReactNode } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import Flex, { FlexProps } from "components/Flex";
import { css } from "components/system";

const SSRLessGlob = dynamic(() => import("components/Globe"), {
  ssr: false,
});

type Props = {
  children: ReactNode;
} & FlexProps;

export default function GlobeBanner({ children }: Props) {
  return (
    <Flex
      as="section"
      bg="lightest-gray"
      minHeight="600px"
      position="relative"
      overflow="hidden"
      justifyContent="center"
      alignItems="flex-end"
    >
      <StyledHeading>{children}</StyledHeading>
      <SSRLessGlob height={450} width={450} />
    </Flex>
  );
}

const StyledHeading = styled("div")(
  css({
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    top: "30px",
    left: 0,
    width: "100%",
    textAlign: "center",
    bg: "rgba(240, 242, 244, 90%)",
    py: 4,
    zIndex: 2,
    h2: {
      fontSize: "header-1",
      lineHeight: "xxl",
      fontWeight: "black",
      px: "3",
      "> a": {
        display: "none !important",
      },
    },
    p: {
      m: 0,
      mt: 3,
      px: 3,
      fontSize: "header-4",
      lineHeight: "lg",
      maxWidth: ["100%", "40%"],
    },
  })
);
