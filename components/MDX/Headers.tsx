import styled from "styled-components";
import css from "@styled-system/css";
import Box from "components/Box";

interface HeaderProps {
  id: string;
  children: React.ReactNode;
}

const StyledAnchor = styled("a")(
  css({
    display: "none",
    color: "light-gray",
    textDecoration: "none",
    "&:hover": {
      color: "gray",
    },
    "&:before": {
      content: '" \\B6"',
    },
  })
);

export const StyledHeader = styled(Box)(
  css({
    "& code": {
      fontSize: "0.875em",
    },
    [`&:hover ${StyledAnchor}`]: {
      display: "inline",
    },
  })
);

export const Header = ({ children, ...props }: HeaderProps) => {
  return (
    <StyledHeader {...props}>
      {children} <StyledAnchor href={`#${props.id}`} />
    </StyledHeader>
  );
};
