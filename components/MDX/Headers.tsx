import styled from "styled-components";
import css from "@styled-system/css";
import Box from "components/Box";

interface HeaderProps {
  id: string;
  children: React.ReactNode;
}

const Anchor = styled("a")(
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

const nestingStyles = {
  [`&:hover ${Anchor}`]: {
    display: "inline",
  },
};

export const H1 = ({ children, ...props }: HeaderProps) => {
  return (
    <Box
      as="h1"
      text={["header-2", "header-1"]}
      fontWeight="black"
      mt={[3, 4]}
      mb={[2, 3]}
      css={css(nestingStyles)}
      {...props}
    >
      {children} <Anchor href={`#${props.id}`} />
    </Box>
  );
};

export const H2 = ({ children, ...props }: HeaderProps) => {
  return (
    <Box
      as="h2"
      text={["header-4", "header-3"]}
      fontWeight="black"
      mb={[2, 3]}
      css={css(nestingStyles)}
      {...props}
    >
      {children} <Anchor href={`#${props.id}`} />
    </Box>
  );
};

export const H3 = ({ children, ...props }: HeaderProps) => {
  return (
    <Box
      as="h3"
      text={["text-xl", "header-4"]}
      fontWeight="black"
      mb={[2, 3]}
      css={css(nestingStyles)}
      {...props}
    >
      {children} <Anchor href={`#${props.id}`} />
    </Box>
  );
};

export const H4 = ({ children, ...props }: HeaderProps) => {
  return (
    <Box
      as="h4"
      fontSize={["text-lg", "text-xl"]}
      lineHeight="lg"
      fontWeight="black"
      mb={[2, 3]}
      css={css(nestingStyles)}
      {...props}
    >
      {children} <Anchor href={`#${props.id}`} />
    </Box>
  );
};

export const H5 = ({ children, ...props }: HeaderProps) => {
  return (
    <Box
      as="h5"
      fontSize="text-md"
      lineHeight="lg"
      mb={[2, 3]}
      css={css({
        textTransform: "uppercase",
        ...nestingStyles,
      })}
      {...props}
    >
      {children} <Anchor href={`#${props.id}`} />
    </Box>
  );
};
