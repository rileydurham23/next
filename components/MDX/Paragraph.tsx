import Box from "components/Image";

const Paragraph = (props) => {
  return (
    <Box as="p" mt={0} mb={3} fontSize="text-lg" lineHeight="md" {...props} />
  );
};

export default Paragraph;
