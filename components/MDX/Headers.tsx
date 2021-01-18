import css from "@styled-system/css";
import Box from "components/Box";

export const H1 = (props) => {
  return (
    <Box as="h1" text="header-1" fontWeight="black" mt={4} mb={3} {...props} />
  );
};

export const H2 = (props) => {
  return <Box as="h2" text="header-3" fontWeight="black" mb={3} {...props} />;
};

export const H3 = (props) => {
  return <Box as="h3" text="header-4" fontWeight="black" mb={3} {...props} />;
};

export const H4 = (props) => {
  return (
    <Box
      as="h4"
      fontSize="text-xl"
      lineHeight="lg"
      fontWeight="black"
      mb={3}
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
      mb={3}
      css={css({
        textTransform: "uppercase",
      })}
      {...props}
    />
  );
};
