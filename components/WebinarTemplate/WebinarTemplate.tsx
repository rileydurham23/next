import Box from "components/Box";
import Centrator from "components/Centrator";
import Flex from "components/Flex";
import Image from "next/image";
import { MarketoBrowserForm } from "components/MarketoForm";
// import shadowBg from "./assets/shadow.png";

export interface WebinarTemplateProps {
  children: React.ReactNode;
  formId?: string;
  pdfSource?: string;
  src: string | React.ReactNode;
  imageAlt: string;
  title: string;
  date: string;
  speaker: string;
}

export const WebinarTemplate = ({
  children,
  title,
  src,
  imageAlt,
  formId,
  date,
  speaker,
}: WebinarTemplateProps) => {
  return (
    <Flex
      borderBottom="1px solid"
      borderColor="lightest-gray"
      overflow="hidden"
    >
      <Centrator>
        {/* Title, Description, and Form Side */}
        <Box pt={[0, 6]} pb={[4, 6]} maxWidth={["100%", "55%"]}>
          <Box
            as="h1"
            fontSize={["header-1", "hero-header"]}
            lineHeight={["xl", "hero-header"]}
            fontWeight="black"
            mb={4}
          >
            {title}
          </Box>
          <Box
            fontSize={["text-lg", "text-xl"]}
            lineHeight={["md", "lg"]}
            color="dark-gray"
            my={2}
            display="inline"
          >
            <Box display="inline" fontWeight="bold" color="darkest">
              Date and time:{" "}
            </Box>
            {date}
          </Box>
          <Box
            fontSize={["text-lg", "text-xl"]}
            lineHeight={["md", "lg"]}
            color="dark-gray"
            my={2}
          >
            <Box display="inline" fontWeight="bold" color="darkest">
              Speaker:{" "}
            </Box>
            {speaker}
          </Box>
          <Box
            fontSize={["text-lg", "text-xl"]}
            lineHeight={["md", "lg"]}
            color="dark-gray"
            my={2}
          >
            {children}
          </Box>

          <Box maxWidth={["auto", "300px"]}>
            <MarketoBrowserForm id={formId} minHeight="258px" />
          </Box>
        </Box>

        {/* Image Side */}
        <Box pt={3} display="block" position="relative" width={["0%", "45%"]}>
          <Image
            src={src}
            width="552"
            height="380"
            alt={imageAlt}
            layout="responsive"
          />
        </Box>
      </Centrator>
    </Flex>
  );
};
