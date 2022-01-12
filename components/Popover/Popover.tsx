// import React from "react";
// import css from "@styled-system/css";
// import PropTypes from "prop-types";
// import styled from "styled-components";

// import Box from "../Box";
// import IconButton from "components/IconButton";

// const propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node,
//   ]).isRequired,
//   placement: PropTypes.oneOf(["top", "right", "bottom", "left"]),
//   positionTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//   positionLeft: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//   arrowOffsetTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//   arrowOffsetLeft: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//   title: PropTypes.node,
//   onClose: PropTypes.func,
//   style: PropTypes.string,
// };

// const defaultProps = {
//   placement: "right",
// };

// /*
//   Form COMPONENT

//   @type Class
//   @description A popover tool tip used to provide additional informaiton
//   @param {string} placement - Where the popup should appear ('top', 'right', 'bottom', 'left')
//   @param {string} title - The title to display in the popup
// */

// class Popover extends React.Component {
//   constructor(props) {
//     super(props);

//     this.onClose = this.onClose.bind(this);
//   }

//   onClose() {
//     if (this.props.onClose) {
//       this.props.onClose();
//     }
//   }

//   renderTitle(title) {
//     if (!title) {
//       return null;
//     }

//     return (
//       <Box layout="flex" justify="space-between">
//         <TextTitle>{title}</TextTitle>
//         <IconButton
//           size="small"
//           onClick={this.onClose}
//           name="cross-circle"
//           color="grey"
//         />
//       </Box>
//     );
//   }

//   render() {
//     const {
//       placement,
//       positionTop,
//       positionLeft,
//       arrowOffsetTop,
//       arrowOffsetLeft,
//       title,
//       style,
//       children,
//       onClose,
//     } = this.props;

//     const outerStyle = {
//       display: "block",
//       top: positionTop,
//       left: positionLeft,
//       ...style,
//     };

//     const arrowStyle = {
//       top: arrowOffsetTop,
//       left: arrowOffsetLeft,
//     };

//     const $title = this.renderTitle(title);

//     return (
//       <StyledPopover
//         className={`${placement}`}
//         role="tooltip"
//         style={outerStyle}
//         onClose={onClose}
//         onClick={(e) => e.stopPropagation()}
//         id="popover"
//       >
//         <StyledArrow style={arrowStyle} placement={placement} />
//         {$title}
//         <Box>{children}</Box>
//       </StyledPopover>
//     );
//   }
// }

// Popover.propTypes = propTypes;
// Popover.defaultProps = defaultProps;
// export default Popover;

// const popoverPlacement = (props) => {
//   const { placement } = props;
//   switch (placement) {
//     case "bottom":
//       return {
//         marginTop: "16px",
//       };

//     case "left":
//       return {
//         marginLeft: "-16px",
//       };

//     case "right":
//       return {
//         marginLeft: "16px",
//       };

//     case "top":
//       return {
//         marginTop: "-16px",
//       };

//     default:
//       return {
//         boxShadow: "0 1px 4px rgba(0, 0, 0, .12)",
//       };
//   }
// };

// /*
//   Syled Component
//   @description This is the CSS for the styled component.
// */

// const StyledPopover = styled.div`
//   background-color: ${colors.white};
//   box-shadow: 0 16px 64px rgba(0, 0, 0, 0.24) !important;
//   border: none !important;
//   border-radius: 8px !important;
//   color: ${colors.grey};
//   left: 50%;
//   padding: ${unit * 2}px !important;
//   position: absolute;
//   top: 0;
//   width: 500px;
//   max-width: none;
//   margin-left: -266px;
//   top: 32px;
//   z-index: ${z.zMax1};
//   ${popoverPlacement}
// `;

// const StyledArrow = styled.div`
//   width: 0;
//   height: 0;
//   border-left: 8px solid transparent;
//   border-right: 8px solid transparent;
//   border-bottom: 8px solid ${colors.white};
//   left: 50%;
//   top: -8px;
//   margin-left: -8px;
//   position: absolute;
//   z-index: ${z.z1};
// `;
