import Box from "../Box";
import { Section } from "./Section";

export default {
  component: Section,
  title: "Section",
};

export const Main = () => {
  return (
    <>
      <Box border="1px solid" borderColor="light-gray">
        <Section bg="white">
          <Box height="400px" />
        </Section>
      </Box>
      <Box border="1px solid" borderColor="light-gray" mt={3}>
        <Section bg="gray">
          <Box height="400px" />
        </Section>
      </Box>
      <Box border="1px solid" borderColor="light-gray" mt={3}>
        <Section bg="purple">
          <Box height="400px" />
        </Section>
      </Box>
    </>
  );
};
