import Box from "components/Box";
import { Centrator } from "./Centrator";
import { Meta } from "@storybook/react";

const meta: Meta = {
  component: Centrator,
  title: "Site/Centrator",
};

export default meta;

export const Default = () => {
  return (
    <Centrator>
      <Box width="100%" bg="red" color="white" p={5} textAlign="center">
        Centred content
      </Box>
    </Centrator>
  );
};
