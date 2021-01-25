import Box from "components/Box";
import Flex from "components/Flex";
import landscapeSvgUrl from "./assets/landscape.svg";

interface FooterProps {
  children: React.ReactNode;
}

const Footer = ({ children }: FooterProps) => {
  return (
    <Flex width="100%" flexDirection="column" alignItems="center" mt={6}>
      {children}
      <Box
        width="100%"
        height={["50px", "280px"]}
        mt={3}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundImage={`url(${landscapeSvgUrl})`}
      ></Box>
    </Flex>
  );
};

export default Footer;
