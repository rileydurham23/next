import styled from "styled-components";
import css from "@styled-system/css";
import Flex from "components/Flex";

export interface TileWrapperProps {
  children: React.ReactNode;
}

const TileWrapper = ({ children }: TileWrapperProps) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

const StyledWrapper = styled(Flex)(
  css({
    flex: "0 0 100%",
    justifyContent: "stretch",
    alignItems: "stretch",
    maxWidth: ["100%", "calc((100% - 64px) / 3)"],
    mb: [3, 5],
    "&:nth-child(3n+2), &:nth-child(3n)": {
      ml: [0, 5],
    },
  })
);

export default TileWrapper;
