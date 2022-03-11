import React, { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import css from "@styled-system/css";

import Box from "components/Box";
import Button from "components/Button";
import Flex from "components/Flex";
import Icon from "components/Icon";

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
      {/* @ts-expect-error fix type later */}
      <ModalContainer ref={modalRef}>
        <Title>
          SHA256 Checksum
          <CloseButton onClick={handleCloseClick}>
            <Icon name="close" size="sm" />
          </CloseButton>
        </Title>
        <CodeBlock>{children}</CodeBlock>
        <Flex>
          <StyledButton
            onClick={handleCopyClick}
            variant="primary"
            marginRight={2}
          >
            {copyButtonText}
          </StyledButton>
          <StyledButton
            onClick={handleCloseClick}
            variant="secondary"
            style={{ border: "1px solid red" }}
          >
            Close
          </StyledButton>
        </Flex>
      </ModalContainer>
    </ToolTipModalContainer>
  );
};

const ArrowUp = styled(Box)(
  css({
    borderLeft: "10px solid transparent",
    borderRight: "10px solid transparent",
    borderBottom: "10px solid #fff",
    marginLeft: "18px",
    backgroundColor: "red",
  })
);

const CloseButton = styled("button")(
  css({
    border: "none",
    borderRadius: "circle",
    cursor: "pointer",
    fontSize: "text-lg",
    height: "30px",
    width: "30px",
    color: "gray",
    transition: "all .3s",
    backgroundColor: "transparent",

    "&:hover": {
      backgroundColor: "lightest-gray",
    },
  })
);

const CodeBlock = styled(Flex)(
  css({
    backgroundColor: "black",
    color: "white",
    marginBottom: "4",
    paddingLeft: "10px",
    paddingRight: "10px",
    height: "40px", // theming not working
    borderRadius: "5px",
    alignItems: "center",
  })
);

const ModalContainer = styled(Flex)(
  css({
    position: "absolute",
    backgroundColor: "white",
    borderRadius: "8px", // fix theming
    padding: "16px", // fix theming
    zIndex: 50,
    left: "-190px",
    flexDirection: "column",
  })
);

const StyledButton = styled(Button)(
  css({
    border: 0,
    borderRadius: "circle",
    cursor: "pointer",
    fontWeight: 700,
    textTransform: "uppercase",
    lineHeight: "md",
    fontSize: "text-xs",
    padding: "0px 24px",
    transition: "all 0.3s ease 0s",
    // boxShadow: "rgb(0 0 0 / 24%) 0px 4px 16px",

    "&:hover": {
      boxShadow: "rgb(0 0 0 / 24%) 0px 8px 32px",
    },
  })
);

const Title = styled(Flex)(
  css({
    fontSize: "text-md",
    justifyContent: "space-between",
    marginBottom: "10px",
  })
);

const ToolTipModalContainer = styled(Flex)(
  css({
    filter: "drop-shadow(#D2DBDF 0px 8px 32px)",
    position: "absolute",
    zIndex: 100,
  })
);

export default ToolTipModal;
