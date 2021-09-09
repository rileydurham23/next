import Image from "next/image";
import { Centrator } from "components/Layout";
import Flex from "components/Flex";
import Box from "components/Box";

interface ProductBannerItemProps {
  title: string;
  src?: string;
  children: React.ReactNode;
}

const ProductBannerItem = ({
  title,
  src,
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
    >
      {src && (
        <Flex alignItems="center" flexGrow={1} mb={1}>
          <Image src={src} width={32} height={32} layout="intrinsic" alt="" />
        </Flex>
      )}
      <Box
        fontSize={src ? "text-md" : "text-lg"}
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
        mb={[3, 0]}
        mr={[0, 3]}
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
    <Flex flexDirection="column" alignItems="center" py={[5, 11]}>
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
            maxWidth={
              imgPosition === "right" ? ["auto", "40%"] : ["auto", "33%"]
            }
            order={imgPosition === "right" ? 0 : 1}
          >
            <Box
              color="dark-purple"
              fontSize={["text-lg", "text-xl"]}
              lineHeight="lg"
              fontWeight="bold"
              mb={[2, 4]}
            >
              {subtitle}
            </Box>
            <Box
              as="h2"
              fontSize={["header-3", "header-1"]}
              lineHeight={["xl", "xxl"]}
              fontWeight="black"
              color="black"
              mb={2}
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
            minWidth={
              imgPosition === "right" ? ["auto", "60%"] : ["auto", "66.6%"]
            }
            minHeight={["330px", "400px"]}
            position="relative"
            // border="1px solid red"
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
