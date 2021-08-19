// theme taken from https://github.com/highlightjs/highlight.js/blob/master/src/styles/monokai.css

import { useRef, useState, useCallback, ReactNode } from "react";
import styled, { keyframes, css as styledCss } from "styled-components";
import css from "@styled-system/css";
import { transition } from "components/system";
import Box from "components/Box";
import Code from "components/Code";
import Icon from "components/Icon";
import HeadlessButton from "components/HeadlessButton";

interface CodeProps {
  children: ReactNode;
}

const Pre = ({ children, ...props }: CodeProps) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const codeRef = useRef<HTMLDivElement>();
  const buttonRef = useRef<HTMLButtonElement>();

  const handleCopy = useCallback(() => {
    if (!navigator.clipboard) {
      return;
    }

    if (codeRef.current) {
      navigator.clipboard.writeText(codeRef.current.innerText);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
        buttonRef.current?.blur();
      }, 1000);
    }
  }, []);

  return (
    <Box
      position="relative"
      bg="code"
      borderRadius="default"
      mb={4}
      mt={-1}
      boxShadow="0 1px 4px rgba(0, 0, 0, .24)"
      css={css({
        "&:hover > button": {
          display: "flex",
        },
        "&:last-child": {
          mb: 0,
        },
      })}
      {...props}
    >
      <StyledHeadlessButton onClick={handleCopy} ref={buttonRef}>
        <Icon name="copy" />
        {isCopied && <Box ml={2}>Copied!</Box>}
      </StyledHeadlessButton>
      <Box ref={codeRef}>
        <Code borderRadius="default" whiteSpace="break-spaces">
          {children}
        </Code>
      </Box>
    </Box>
  );
};

export default Pre;

const buttonAppearance = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledHeadlessButton = styled(HeadlessButton)(
  css({
    display: "none",
    alignItems: "center",
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: "2",
    p: 2,
    color: "light-gray",
    cursor: "pointer",
    borderTopRightRadius: "default",
    borderBottomRightRadius: "default",
    opacity: 0,
    animationDuration: "0.3s",
    animationFillMode: "forwards",
    transition: transition([["color", "interaction"]]),

    "&:hover, &:focus, &:active": {
      color: "white",
      outline: "none",
    },
  }),
  styledCss`animation-name: ${buttonAppearance};`
);
