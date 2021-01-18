import Box from "components/Box";
import Button from "components/Button";
import Flex from "components/Flex";
import landscapeSvgUrl from "./assets/landscape.svg";

const Footer = () => {
  return (
    <Flex width="100%" flexDirection="column" alignItems="center" mt={6}>
      <Box fontSize="text-xl" lineHeight="xl" color="gray" mb={3}>
        Have a suggestion or can’t find something?
      </Box>
      <Button
        as="a"
        type="primary"
        shape="md"
        href="https://github.com/gravitational/teleport/tree/master/docs"
        target="_blank"
        rel="noopener noreferrer"
      >
        IMPROVE THE DOCS
      </Button>
      <Box
        width="100%"
        height="280px"
        mt={3}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundImage={`url(${landscapeSvgUrl})`}
      ></Box>
    </Flex>
  );
};

export default Footer;
