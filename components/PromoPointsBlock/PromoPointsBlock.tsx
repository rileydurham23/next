import styled from "styled-components";
import css from "@styled-system/css";
import Box from "components/Box";
import Flex from "components/Flex";
import Icon, { IconName } from "components/Icon";
import Image, { ImageProps } from "next/image";

export interface PromoPointsBlockItemProps {
  icon: IconName;
  children: React.ReactNode;
}

const PromoPointsBlockItem = ({
  icon,
  children,
}: PromoPointsBlockItemProps) => {
  return (
    <Flex css={css({ "& + &": { mt: [3, 6] } })}>
      <Icon
        width={["24px", "32px"]}
        height={["24px", "32px"]}
        name={icon}
        mr={[3, 4]}
        my={[0, 1]}
      />
      <Box fontSize={["text-lg", "header-3"]} lineHeight={["md", "xl"]}>
        {children}
      </Box>
    </Flex>
  );
};

export interface PromoPointsBlockProps {
  title: string;
  src: string;
  children: React.ReactNode;
}

const PromoPointsBlock = ({ title, src, children }: PromoPointsBlockProps) => {
  return (
    <Flex backgroundImage="linear-gradient(180deg, #ffffff 0%, #fafafb 100%)">
      <Box bg="light-purple" color="white" flex="1 1 50%" p={[5, 11]}>
        <Box
          as="h2"
          fontSize={["header-3", "36px"]}
          lineHeight={["lg", "xxl"]}
          fontWeight="black"
          mb={[4, 6]}
        >
          {title}
        </Box>
        <Box>{children}</Box>
      </Box>
      <Box flex="1 1 50%" display={["none", "block"]} position="relative">
        <StyledImage src={src} layout="fill" />
      </Box>
    </Flex>
  );
};

PromoPointsBlock.Item = PromoPointsBlockItem;

export default PromoPointsBlock;

const StyledImage = styled(Image)<ImageProps>(
  css({
    width: "100%",
    height: "100%",
    objectFit: "contain",
  })
);
