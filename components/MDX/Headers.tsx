import Box from "components/Box";

export const H1 = (props) => {
  return <Box as="h1" text="header-1" mt={6} mb={2} {...props} />;
};

export const H2 = (props) => {
  return <Box as="h2" text="header-3" mt={5} mb={2} {...props} />;
};

export const H3 = (props) => {
  return <Box as="h3" text="header-4" mt={4} mb={2} {...props} />;
};

export const H4 = (props) => {
  return <Box as="h4" text="header-4" mt={4} mb={2} {...props} />;
};

export const H5 = (props) => {
  return <Box as="h5" text="header-4" mt={4} mb={2} {...props} />;
};
