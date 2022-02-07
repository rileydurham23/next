import React from "react";

import { styled } from "@stitches/react";

const ToolTipModal = ({ children, setShowModal, showModal }) => {
  const handleCloseClick = () => {
    setShowModal(!showModal);
  };

  const handleCopyClick = () => {
    return "copied";
  };
  return (
    <>
      {showModal ? (
        <ModalContainer>
          <Title>
            SHA256 Checksum
            <CloseButton onClick={handleCloseClick}>x</CloseButton>
          </Title>
          <CodeBlock>{children}</CodeBlock>
          <Bottom>
            <StyledButton onClick={handleCopyClick} type="primary">
              Copy
            </StyledButton>
            <StyledButton onClick={handleCloseClick} type="secondary">
              Close
            </StyledButton>
          </Bottom>
        </ModalContainer>
      ) : null}
    </>
  );
};

const ModalContainer = styled("div", {
  backgroundColor: "white",
  borderRadius: "8px",
  padding: "16px",
  left: "50%",
  marginLeft: "-266px",
  top: "32px",
  zIndex: 100,
  position: "absolute",
  // top: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "left",
  width: "500px",
  // margin: "10px",

  // backgroundColor: "rgba(1, 1, 1, 0.2)",
  boxShadow: "rgb(0 0 0 / 24%) 0px 16px 64px !important",
});

export default ToolTipModal;

const Bottom = styled("div", {
  display: "flex",
  flexDirection: "row",
});

const CodeBlock = styled("div", {
  backgroundColor: "black",
  color: "white",
  marginBottom: "24px",
  paddingLeft: "10px",
  height: "40px",
  borderRadius: "5px",
  alignItems: "center",
});

const CloseButton = styled("button", {
  border: "none",
  borderRadius: "1000px",
  color: "#607d8b",
  cursor: "pointer",
  fontSize: "16px",
  height: "16px",
  width: "16px",
});

const StyledButton = styled("button", {
  border: 0,
  borderRadius: "1000px",
  cursor: "pointer",
  fontWeight: 700,
  textTransform: "uppercase",
  lineHeight: "24px",
  fontSize: "10px",
  padding: "0px 24px",
  transition: "all 0.3s ease 0s",
  "&:hover": {
    boxShadow: "rgb(0 0 0 / 24%) 0px 8px 32px",
  },

  variants: {
    type: {
      primary: {
        color: "white",
        backgroundColor: "#651fff",
        boxShadow: "rgb(0 0 0 / 24%) 0px 4px 16px",
      },
      secondary: {
        backgroundColor: "white",
        border: "2px solid rgb(189, 202, 208)",
        color: "#bdcad0",
        marginLeft: "8px",
      },
    },
  },
});

const Title = styled("div", {
  fontSize: "14px",
  fontWeight: 600,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: "10px",
});
