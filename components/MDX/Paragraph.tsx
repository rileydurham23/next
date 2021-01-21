import Box from "components/Image";

const Paragraph = (props) => {
  return (
    <Box
      as="p"
      mt={0}
      mb={[2, 3]}
      fontSize={["text-md", "text-lg"]}
      lineHeight="md"
      {...props}
    />
  );
};

export default Paragraph;
