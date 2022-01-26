import React from "react";
import css from "@styled-system/css";
import styled from "styled-components";

import Box from "../Box";
import IconButton from "../IconButton";

interface PopoverType {
  children: Array<Node>;
  Node;
  placement: "top" | "right" | "bottom" | "left";
  positionTop: number | string;
  positionLeft: number | string;
  arrowOffsetTop: number | string;
  arrowOffsetLeft: number | string;
  title: Node;
  onClose: func;
  style: string;
}

const TextTitle = ({ small, nowrap, color, children }) => {
  return (
    <StyledTextTitle small={small} nowrap={nowrap} color={color}>
      {children}
    </StyledTextTitle>
  );
};

const defaultProps = {
  placement: "right",
};

const Popover = ({
  placement,
  positionTop,
  positionLeft,
  arrowOffsetTop,
  arrowOffsetLeft,
  title,
  style,
  children,
  onClose,
}: PopoverType) => {
  const outerStyle = {
    display: "block",
    top: positionTop,
    left: positionLeft,
    style,
  };

  const arrowStyle = {
    top: arrowOffsetTop,
    left: arrowOffsetLeft,
  };

  const renderTitle = (title) => {
    if (!title) {
      return null;
    }

    return (
      <Box display="flex" justifyContent="space-between">
        <TextTitle>{title}</TextTitle>
        <IconButton
          size="small"
          onClick={onClose}
          name="cross-circle"
          color="grey"
        />
      </Box>
    );
  };

  const styledTitle = renderTitle(title);

  // const onClose = () => {
  //   if (onClose) {
  //     onClose();
  //   }
  //   return (
  //     <Box layout="flex" justify="space-between">
  //       <TextTitle>{title}</TextTitle>
  //       <IconButton
  //         size="small"
  //         onClick={onClose}
  //         name="cross-circle"
  //         color="grey"
  //       />
  //     </Box>
  //   );
  // };

  return (
    <StyledPopover
      className={`${placement}`}
      role="tooltip"
      style={outerStyle}
      onClose={onClose}
      onClick={(e) => e.stopPropagation()}
      id="popover"
    >
      <StyledArrow style={arrowStyle} placement={placement} />
      {styledTitle}
      <Box>{children}</Box>
    </StyledPopover>
  );
};

export default Popover;

const popoverPlacement = (props) => {
  const { placement } = props;
  switch (placement) {
    case "bottom":
      return {
        marginTop: "16px",
      };

    case "left":
      return {
        marginLeft: "-16px",
      };

    case "right":
      return {
        marginLeft: "16px",
      };

    case "top":
      return {
        marginTop: "-16px",
      };

    default:
      return {
        boxShadow: "0 1px 4px rgba(0, 0, 0, .12)",
      };
  }
};

const StyledPopover = styled("div")(
  css({
    backgroundColor: "white",
    boxShadow: "0 16px 64px rgba(0, 0, 0, 0.24) !important",
    border: "none !important",
    borderRadius: "8px !important",
    color: "grey",
    left: "50%",
    padding: `${unit * 2}px !important`,
    position: "absolute",
    width: "500px",
    maxWidth: "none",
    marginLeft: "-266px",
    top: "32px",
    zIndex: `${z.zMax1}`,
  })
);

const StyledArrow = styled.div`
  width: 0,
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid ${colors.white};
  left: 50%;
  top: -8px;
  margin-left: -8px;
  position: absolute;
  z-index: ${z.z1};
`;

const StyledTextTitle = styled.h4`
  color: ${colors.blueDark};
  font-family: ${baseFont};
  font-size: ${(small) => (small ? "12px" : ["12px", "14px"])};
  font-weight: 600;
  line-height: ${(small) => (small ? "24px" : "32px")};
  margin: 0;
  whitespace: ${(small) => (nowrap ? "nowrap" : "normal")};
`;
