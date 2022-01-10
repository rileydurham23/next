import Box from "components/Box";
import Button from "components/Button";
import Centrator from "components/Centrator";
import Flex from "components/Flex";
import Image from "components/Image";
import Link from "components/Link";
import { MarketoBrowserForm } from "components/MarketoForm";
import shadowBg from "./assets/shadow.png";

export interface BookBlockProps {
  children: React.ReactNode;
  formId?: string;
  pdfSource?: string;
  emailNotRequiredForDownload: boolean;
  src: string;
  title: string;
}

export const BookBlock = ({
  children,
  emailNotRequiredForDownload,
  pdfSource,
  title,
  src,
  formId,
}: BookBlockProps) => {
  return (
    <Flex
      borderBottom="1px solid"
      borderColor="lightest-gray"
      overflow="hidden"
    >
      <Centrator>
        <Box pt={[0, 6]} pb={[4, 6]}>
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
          {emailNotRequiredForDownload ? (
            <Box pt={4}>
              <Button
                as={Link}
                fontSize="text-xl"
                height="50px"
                href={pdfSource}
                shape="lg"
                width={["100%", "300px"]}
                variant="primary"
              >
                Download
              </Button>
            </Box>
          ) : (
            <Box maxWidth={["auto", "300px"]}>
              <MarketoBrowserForm id={formId} minHeight="258px" />
            </Box>
          )}
        </Box>

        <Flex
          flexShrink={0}
          mr="-76px"
          pt={6}
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
            alt=""
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
      </Centrator>
    </Flex>
  );
};
