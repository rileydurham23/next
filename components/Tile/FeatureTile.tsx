import styled from "styled-components";
import css from "@styled-system/css";
import NextImage from "next/image";
import Box from "components/Box";
import Flex from "components/Flex";
import Button from "components/Button";
import enterpriseBG from "pages/features/assets/enterpriseBG.png";
import coreBG from "pages/features/assets/coreBG.png";

export interface FeatureTileProps {
  children: React.ReactNode;
  title: string;
  src: string;
  feature: "enterprise" | "core";
}

const FeatureTile = ({ children, src, title, feature }: FeatureTileProps) => {
  const backgroundImage = feature === "enterprise" ? enterpriseBG : coreBG;
  return (
    <StyledWrapper>
      <Flex
        flexDirection="column"
        alignItems="center"
        py="3"
        px="4"
        backgroundImage={`url("${backgroundImage}")`}
        backgroundPosition="center"
        backgroundSize="cover"
        borderRadius="8px 8px 0 0"
      >
        <NextImage src={src} alt={`${title}`} height={193} width={282} />
      </Flex>
      <Flex
        id="bottomHalf"
        flexDirection="column"
        py="3"
        px="4"
        borderRadius="0 0 8px 8px"
        bg="pink"
      >
        <Box fontSize="text-md" lineHeight="md" color="black" fontWeight="bold">
          {title}
        </Box>
        <Box fontSize="13px" lineHeight="md" color="gray" pb={3}>
          {children}
        </Box>
        <StyledButton variant="secondary" shape="lg">
          Learn More
        </StyledButton>
      </Flex>
    </StyledWrapper>
  );
};

const StyledWrapper = styled(Box)(
  css({
    display: "block",
    position: "relative",
    maxWidth: "calc((100% - 64px) / 4)",
    borderRadius: "8px",
    textDecoration: "none",
    boxShadow: "0 1px 4px rgba(0, 0, 0, 0.24)",
    mb: "4",
    mx: "2",
    bg: "white",
  })
);

const StyledButton = styled(Button)({
  borderWidth: "1px",
  width: "100%",
  fontWeight: "bold",
});

export default FeatureTile;
