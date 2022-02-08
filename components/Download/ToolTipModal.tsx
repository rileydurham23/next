import React, { useEffect, useRef, useState } from "react";

import { styled } from "@stitches/react";

// interface ToolTipModalProps {
//   children: React.ReactNode;
//   setShowModal: () => void;
//   showModal: boolean;
// }

// const useModalClickoutStatus = ({ setShowModal, showModal }) => {
//   const modalRef = useRef();

//   useEffect(() => {
//     const checkIfClickedOutside = (event) => {
//       if (
//         showModal &&
//         modalRef.current &&
//         !modalRef.current.contains(event.target)
//       ) {
//         setShowModal(false);
//       }
//     };

//     document.addEventListener("click", checkIfClickedOutside);

//     // cleanup event listener
//     return () => {
//       document.removeEventListener("click", checkIfClickedOutside);
//     };
//   }, [setShowModal, showModal]);
// };

const ToolTipModal = ({ children, onClose }) => {
  const [isCopied, setIsCopied] = useState(false);
  const copyButtonText = isCopied ? "Copied!" : "Copy";
  const modalRef = useRef<HTMLLinkElement>(null);

  const handleCloseClick = () => {
    onClose(false);
  };

  const copyToClipboard = (sha: string) => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
      setIsCopied(true);
    return navigator.clipboard.writeText(sha);
  };

  const handleCopyClick = () => {
    const sha = children;
    copyToClipboard(sha);
  };

  useEffect(() => {
    const handleClick = (event) => {
      const { target } = event;

      if (!modalRef.current?.contains(target)) {
        onClose();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <Outside role="tooltip">
      <ArrowUp />
      <ModalContainer ref={modalRef}>
        <Title>
          SHA256 Checksum
          <CloseButton onClick={handleCloseClick}>x</CloseButton>
        </Title>
        <CodeBlock>{children}</CodeBlock>
        <Bottom>
          <StyledButton onClick={handleCopyClick} type="primary">
            {copyButtonText}
          </StyledButton>
          <StyledButton onClick={handleCloseClick} type="secondary">
            Close
          </StyledButton>
        </Bottom>
      </ModalContainer>
    </Outside>
  );
};

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
  height: "30px",
  width: "30px",
  color: "rgb(96, 125, 139)",
  transition: "all .3s",
  backgroundColor: "transparent",

  "&:hover": {
    backgroundColor: "rgb(240, 242, 244)",
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
