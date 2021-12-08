import { useState } from "react";
import styled from "styled-components";
import css from "@styled-system/css";
import Flex from "components/Flex";
import Box from "components/Box";
import Icon from "components/Icon";

interface AvatarDropdownProps {
  children: React.ReactNode;
  brief?: string;
}

const AvatarDropdown = ({ children, brief }: AvatarDropdownProps) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledContentWrapper>
      <DescContainer maxHeight={open ? ["600px", "none"] : ["150px", "200px"]}>
        {open ? children : brief}
      </DescContainer>
      <StyledIcon
        name="arrow"
        transform={
          open ? "translateY(-50%) rotate(180deg)" : "translateY(-50%)"
        }
        onClick={() => setOpen(!open)}
      />
    </StyledContentWrapper>
  );
};

const DescContainer = styled(Box)({
  overflow: "hidden",
  flexDirection: "column",
});

const StyledIcon = styled(Icon)({
  fontSize: "30px",
  color: "darkest",
  flexShrink: 0,
  position: "relative",
  top: 12,
  left: 10,
  transition: "transform 300ms",
});

const StyledContentWrapper = styled(Flex)(
  css({
    flexDirection: "row",
    fontSize: "text-lg",
    lineHeight: "28px",
    color: "darkest",
  })
);

export default AvatarDropdown;
