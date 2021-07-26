// theme taken from https://github.com/highlightjs/highlight.js/blob/master/src/styles/monokai.css

import { useRef, useState, useCallback, ReactNode } from "react";
import css from "@styled-system/css";
import Box from "components/Box";
import Code from "components/Code";
import Icon from "components/Icon";
import HeadlessButton from "components/HeadlessButton";

import DeselectChar from "../../utils/deselect-character";

interface CodeProps {
  children: ReactNode;
}

const Pre = ({ children }: CodeProps) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const codeRef = useRef<HTMLDivElement>();
  const buttonRef = useRef<HTMLButtonElement>();

  const handleCopy = useCallback(() => {
    if (!navigator.clipboard) {
      return;
    }

    if (codeRef.current) {
      navigator.clipboard.writeText(
        DeselectChar("$", codeRef.current.innerText)
      );
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
        "&:hover button": {
          display: "flex",
        },
        "&:last-child": {
          mb: 0,
        },
      })}
    >
      <HeadlessButton
        onClick={handleCopy}
        ref={buttonRef}
        display="none"
        alignItems="center"
        position="absolute"
        top={0}
        right={0}
        p={2}
        color="dark-gray"
        bg="code"
        cursor="pointer"
        css={css({
          "&:hover, &:focus, &:active": {
            color: "lightest-gray",
            outline: "none",
          },
        })}
      >
        <Icon name="copy" />
        {isCopied && <Box ml={2}>Copied!</Box>}
      </HeadlessButton>
      <Box ref={codeRef}>
        <Code borderRadius="default">{children}</Code>
      </Box>
    </Box>
  );
};

export default Pre;
