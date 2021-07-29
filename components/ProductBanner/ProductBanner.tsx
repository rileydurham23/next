import css from "@styled-system/css";
import Image from "next/image";
import { Centrator } from "components/Layout";
import Flex from "components/Flex";
import Box from "components/Box";

interface ProductBannerItemProps {
  title: string;
  src?: string;
  width?: number;
  height?: number;
  children: React.ReactNode;
}

const ProductBannerItem = ({
  title,
  src,
  width,
  height,
  children,
}: ProductBannerItemProps) => {
  return (
    <Flex
      flex="0 1 auto"
      width="100%"
      flexDirection="column"
      alignItems="flex-start"
      pb={2}
      pl={3}
      css={css({ "& + &": { ml: [0, 6] } })}
    >
      <Flex alignItems="center" maxWidth={width} flexGrow={1} mb={1}>
        <Image
          src={src}
          width={width}
          height={height}
          layout="intrinsic"
          alt=""
        />
      </Flex>
      <Box
        fontSize="text-md"
        fontWeight="bold"
        color="black"
        lineHeight="lg"
        mb={2}
      >
        {title}
      </Box>
      <Box
        alignItems="flex-start"
        fontSize="text-md"
        lineHeight="md"
        color="darkest"
        minHeight={["auto", "72px", "48px"]}
        mb={[3, 0]}
      >
        {children}
      </Box>
    </Flex>
  );
};

export interface ProductBannerProps {
  subtitle: string;
  title: string;
  description: React.ReactNode;
  children: React.ReactNode;
  src: string;
  alt: string;
  imgPosition: "left" | "right";
}

export const ProductBanner = ({
  imgPosition,
  subtitle,
  title,
  description,
  children,
  src,
  alt,
}: ProductBannerProps) => {
  return (
    <Flex flexDirection="column" alignItems="center" py={[3, 5]}>
      <Centrator
        flexDirection="column"
        alignItems={["center", "flex-start"]}
        textAlign="left"
      >
        <Flex flexDirection={["column", "row"]}>
          {/* Text Element */}
          <Flex
            flexDirection="column"
            pb={2}
            pl={3}
            maxWidth={["auto", "40%"]}
            order={imgPosition === "right" ? 0 : 1}
          >
            <Box
              color="dark-purple"
              fontSize="text-md"
              lineHeight="lg"
              fontWeight="bold"
              mb={2}
            >
              {subtitle}
            </Box>
            <Box
              fontSize={["header-3", "header-1"]}
              lineHeight={["xl", "xxl"]}
              fontWeight="black"
              color="black"
              mb={[2, 3]}
            >
              {title}
            </Box>
            <Box
              color="darkest"
              fontSize="text-xl"
              lineHeight="lg"
              mt={[0, 3]}
              mb={3}
            >
              {description}
            </Box>
          </Flex>
          {/* Image Element */}
          <Box
            minWidth={["auto", "60%"]}
            minHeight={["330px", "auto"]}
            position="relative"
          >
            <Image layout="fill" objectFit="contain" src={src} alt={alt} />
          </Box>
        </Flex>
        <Flex
          flexDirection={["column", "row"]}
          justifyContent="space-between"
          alignItems="flex-start"
          mt={[5, 9]}
          width="100%"
        >
          {children}
        </Flex>
      </Centrator>
    </Flex>
  );
};

ProductBanner.Item = ProductBannerItem;
