import React, { useEffect, useRef, useState } from "react";
import { styled } from "../stitches.config";

import { Box } from "./Box";
import { Flex } from "./Flex";

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
  }, [onClose]);

  return (
    <ToolTipModalContainer role="tooltip">
      <ArrowUp />
      {/* @ts-expect-error issue passing props to stitches */}
      <ModalContainer ref={modalRef}>
        <Title>
          SHA256 Checksum
          <CloseButton onClick={handleCloseClick}>x</CloseButton>
        </Title>
        <CodeBlock>{children}</CodeBlock>
        <Flex>
          <StyledButton onClick={handleCopyClick} type="primary">
            {copyButtonText}
          </StyledButton>
          <StyledButton onClick={handleCloseClick} type="secondary">
            Close
          </StyledButton>
        </Flex>
      </ModalContainer>
    </ToolTipModalContainer>
  );
};

const ArrowUp = styled(Box, {
  borderLeft: "10px solid transparent",
  borderRight: "10px solid transparent",
  borderBottom: "10px solid #fff",
  marginLeft: "18px",
});

const CloseButton = styled("button", {
  border: "none",
  borderRadius: "$circle",
  cursor: "pointer",
  fontSize: "$text-lg",
  height: "30px",
  width: "30px",
  color: "$gray",
  transition: "all .3s",
  backgroundColor: "transparent",

  "&:hover": {
    backgroundColor: "$lightest-gray",
  },
});

const CodeBlock = styled(Flex, {
  backgroundColor: "black",
  color: "white",
  marginBottom: "$4",
  paddingLeft: "10px",
  paddingRight: "10px",
  height: "40px", // theming not working
  borderRadius: "5px",
  alignItems: "center",
});

const ModalContainer = styled(Box, {
  position: "absolute",
  backgroundColor: "white",
  borderRadius: "8px", // fix theming
  padding: "16px", // fix theming
  zIndex: 50,
  left: "-190px",
});

const StyledButton = styled("button", {
  border: 0,
  borderRadius: "$circle",
  cursor: "pointer",
  fontWeight: 700,
  textTransform: "uppercase",
  lineHeight: "$md",
  fontSize: "$text-xs",
  padding: "0px 24px",
  transition: "all 0.3s ease 0s",
  "&:hover": {
    boxShadow: "rgb(0 0 0 / 24%) 0px 8px 32px",
  },

  variants: {
    type: {
      primary: {
        color: "white",
        backgroundColor: "$light-purple",
        boxShadow: "rgb(0 0 0 / 24%) 0px 4px 16px",
      },
      secondary: {
        backgroundColor: "white",
        border: "2px solid $blue-gray",
        color: "$blue-gray",
        marginLeft: "$2",
      },
    },
  },
});

const Title = styled(Flex, {
  fontSize: "$text-md",
  justifyContent: "space-between",
  marginBottom: "10px",
});

const ToolTipModalContainer = styled(Box, {
  filter: "drop-shadow(#D2DBDF 0px 8px 32px)",
  position: "absolute",
  zIndex: 100,
});

export default ToolTipModal;
