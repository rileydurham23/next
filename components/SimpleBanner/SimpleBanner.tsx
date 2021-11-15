import styled from "styled-components";
import css from "@styled-system/css";

import Badge from "components/Badge";
import Box from "components/Box";
import { Centrator } from "components/Layout";
import Flex from "components/Flex";
import Icon from "components/Icon";
import { isIconName } from "components/Icon";
import NextImage from "next/image";

interface SimpleBannerItemProps {
  children: React.ReactNode;
  isBadge?: boolean;
  src: string;
  title: string;
}

const SimpleBannerItem = ({
  children,
  isBadge = false,
  src,
  title,
}: SimpleBannerItemProps) => {
  return (
    <Flex
      alignItems="flex-start"
      flex="0 1 auto"
      flexDirection="column"
      pb={2}
      pl={3}
      width="100%"
    >
      {isIconName(src) ? (
        isBadge ? (
          <Badge name={src} size="md" />
        ) : (
          <Icon name={src} size="xl" />
        )
      ) : (
        <StyledIcon>
          <NextImage
            alt="miniature diagram"
            height={32}
            layout="intrinsic"
            src={src}
            width={32}
          />
        </StyledIcon>
      )}
      <Box
        color="black"
        fontSize={src ? "text-md" : "text-lg"}
        fontWeight="bold"
        lineHeight="lg"
        mt={3}
      >
        {title}
      </Box>
      <Box
        alignItems="flex-start"
        color="darkest"
        fontSize="text-md"
        lineHeight="md"
        mb={[3, 0]}
        mr={[0, 3]}
      >
        {children}
      </Box>
    </Flex>
  );
};

export interface SimpleBannerProps {
  children: React.ReactNode;
}

export const SimpleBanner = ({ children }: SimpleBannerProps) => {
  return (
    <Flex flexDirection="column" alignItems="center" py={[5, 11]}>
      <Centrator
        alignItems={["center", "flex-start"]}
        flexDirection="column"
        textAlign="left"
      >
        <Flex
          alignItems="flex-start"
          flexDirection={["column", "row"]}
          justifyContent="space-between"
          mt={[3, 5]}
          width="100%"
        >
          {children}
        </Flex>
      </Centrator>
    </Flex>
  );
};

const StyledIcon = styled(Flex)(
  css({
    alignItems: "center",
    bg: "dark-purple",
    border: "1px solid white",
    borderRadius: "circle",
    boxShadow: "0px 8px 16px rgba(12, 12, 14, 0.24)",
    height: 48,
    justifyContent: "center",
    mb: 2,
    width: 48,
  })
);

SimpleBanner.Item = SimpleBannerItem;
