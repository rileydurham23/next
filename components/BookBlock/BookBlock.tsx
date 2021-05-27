import Box from "components/Box";
import Flex from "components/Flex";
import Image from "components/Image";
import Marketo from "components/Marketo";
import shadowBg from "./assets/shadow.png";

export interface BookBlockProps {
  children: React.ReactNode;
  formId: string;
  src: string;
  title: string;
}

export const BookBlock = ({ children, title, src, formId }: BookBlockProps) => {
  return (
    <Flex borderBottom="1px solid" borderColor="lightest-gray">
      <Box pt={[5, 11]} px={[5, 11]} pb={6}>
        <Box
          as="h1"
          fontSize={["header-1", "hero-header"]}
          lineHeight={["xl", "hero-header"]}
          fontWeight="black"
        >
          {title}
        </Box>
        <Box
          fontSize={["text-lg", "text-xl"]}
          lineHeight={["md", "lg"]}
          color="dark-gray"
          my={2}
        >
          {children}
        </Box>
        <Box width={["auto", "240px"]}>
          <Marketo id={formId} />
        </Box>
      </Box>

      <Flex
        flexShrink={0}
        pt={6}
        pr="160px"
        display={["none", "flex"]}
        flexDirection="column"
        alignItems="center"
      >
        <Image
          src={src}
          width="344px"
          height="auto"
          boxShadow="0 4px 16px rgba(0, 0, 0, 0.24)"
          position="relative"
          zIndex={2}
        />
        <Box
          backgroundImage={`url(${shadowBg})`}
          width="496px"
          height="113px"
          backgroundSize="496px 113px"
          position="relative"
          zIndex={1}
          top="-56px"
        />
      </Flex>
    </Flex>
  );
};
