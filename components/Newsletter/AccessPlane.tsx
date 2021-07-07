import { ComponentProps } from "react";
import styled from "styled-components";
import Flex from "components/Flex";
import { all, css, StyledSystemProps } from "components/system";

const AccessPlane = styled(Flex)<StyledSystemProps>(
  css({
    backgroundImage: "linear-gradient(141deg, #eff1fe 0%, #ffffff 100%)",
    flexDirection: "column",
    justifyContent: "center",
    width: [343, 504],
    height: [326, 544],
    borderRadius: ["8px", "8px 0 0 8px"],
  }),
  all
);

export type AccessPlaneProps = ComponentProps<typeof AccessPlane>;

export default AccessPlane;
