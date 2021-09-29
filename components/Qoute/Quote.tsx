import styled from "styled-components";
import { css, all } from "components/system";
import Box from "components/Box";
import Link from "components/Link";

interface QouteProps {
  children: React.ReactNode;
  title?: string;
  linkTextTitle: string;
  linkSrc: string;
}

export default function Qoute({
  children,
  title,
  linkTextTitle,
  linkSrc,
  ...props
}: QouteProps) {
  return (
    <StyledQoute {...props}>
      {title && !linkSrc && (
        <Box as="p" fontWeight="700" mb="3">
          {title}
        </Box>
      )}
      {title && linkSrc && (
        <Box as="p" fontWeight="700" mb="3">
          {title}
          <Link scheme="site" href={linkSrc} ml="1">
            {linkTextTitle}
          </Link>
        </Box>
      )}
      {children}
    </StyledQoute>
  );
}

const StyledQoute = styled("blockquote")(
  css({
    boxSizing: "border-box",
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    p: 6,
    borderLeftWidth: "8px",
    borderLeftStyle: "solid",
    borderLeftColor: "dark-purple",
    boxShadow: "0 8px 64px rgb(0 0 0 / 12%)",
    my: 3,
    mx: 0,
    "&::before": {
      content: '"“"',
      position: "absolute",
      top: 4,
      left: 4,
      color: "lighter-gray",
      fontSize: "140px",
      opacity: "0.87",
    },
  }),
  all
);
