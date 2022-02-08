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
        <Outside role="tooltip">
          <ArrowUp />
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
        </Outside>
      ) : null}
    </>
  );
};

// const Outside = styled("div", {
//   height: "200px",
//   width: "300px",
//   position: "absolute",
//   top: " 50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   background: "white",
// });

// const ArrowUp = styled("div", {
//   width: "50px",
//   height: "25px",
//   position: "absolute",
//   left: "50%",
//   transform: "translateX(-50%)",
//   overflow: "hidden",

//   "&::after": {
//     content: "",
//     position: "absolute",
//     width: "20px",
//     height: "20px",
//     background: "white",
//     transform: "translateX(-50%) translateY(-50%) rotate(45deg)",
//     top: 0,
//     left: "50%",
//     boxShadow: "1px 1px 20px 0px rgba(0,0,0,0.6)",
//   },
// });

const Outside = styled("div", {
  position: "absolute",
  filter: "drop-shadow(#D2DBDF 0px 8px 32px)",
  zIndex: 100,
});

const ArrowUp = styled("div", {
  width: 0,
  height: 0,
  borderLeft: "10px solid transparent",
  borderRight: "10px solid transparent",
  borderBottom: "10px solid #fff",
  marginLeft: "18px",
});

const ModalContainer = styled("div", {
  position: "absolute",
  backgroundColor: "white",
  borderRadius: "8px",
  padding: "16px",
  zIndex: 50,
  marginTop: "0px",
  left: "-190px",
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
  paddingRight: "10px",
  height: "40px",
  borderRadius: "5px",
  alignItems: "center",
  display: "flex",
});

const CloseButton = styled("button", {
  border: "none",
  borderRadius: "1000px",
  cursor: "pointer",
  fontSize: "16px",
  height: "25px",
  width: "25px",
  color: "rgb(96, 125, 139)",
  transition: "all .3s",

  "&:hover": {
    backgroundColor: "rgb(189, 202, 208)",
  },
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
