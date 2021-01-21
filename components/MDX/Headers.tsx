import css from "@styled-system/css";
import Box from "components/Box";

export const H1 = (props) => {
  return (
    <Box
      as="h1"
      text={["header-2", "header-1"]}
      fontWeight="black"
      mt={[3, 4]}
      mb={[2, 3]}
      {...props}
    />
  );
};

export const H2 = (props) => {
  return (
    <Box
      as="h2"
      text={["header-4", "header-3"]}
      fontWeight="black"
      mb={[2, 3]}
      {...props}
    />
  );
};

export const H3 = (props) => {
  return (
    <Box
      as="h3"
      text={["text-xl", "header-4"]}
      fontWeight="black"
      mb={[2, 3]}
      {...props}
    />
  );
};

export const H4 = (props) => {
  return (
    <Box
      as="h4"
      fontSize={["text-lg", "text-xl"]}
      lineHeight="lg"
      fontWeight="black"
      mb={[2, 3]}
      {...props}
    />
  );
};

export const H5 = (props) => {
  return (
    <Box
      as="h5"
      fontSize="text-md"
      lineHeight="lg"
      mb={[2, 3]}
      css={css({
        textTransform: "uppercase",
      })}
      {...props}
    />
  );
};
