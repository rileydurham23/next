import css from "@styled-system/css";
import Box from "components/Box";

export const UL = (props) => {
  return <Box as="ul" mt={0} mb={2} pl={4} {...props} />;
};

export const OL = (props) => {
  return (
    <Box as="ol" text={["text-md", "text-lg"]} t={0} mb={2} pl={4} {...props} />
  );
};

export const LI = (props) => {
  return (
    <Box
      as="li"
      text={["text-md", "text-lg"]}
      css={css({
        "& + &": {
          mt: [1, 2],
        },
      })}
      {...props}
    />
  );
};
