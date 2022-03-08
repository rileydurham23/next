import Box from "components/Box";
import Centrator from "components/Centrator";
import Flex from "components/Flex";
import { MarketoBrowserForm } from "components/MarketoForm";

export interface WebinarTemplateProps {
  children: React.ReactNode;
  formId?: string;
  subtitle?: string;
  title: string;
  date: string;
  time: string;
  speaker: string;
}

export const WebinarTemplate = ({
  children,
  subtitle,
  title,
  formId,
  date,
  time,
  speaker,
}: WebinarTemplateProps) => {
  return (
    <Flex
      borderBottom="1px solid"
      borderColor="lightest-gray"
      overflow="hidden"
    >
      <Centrator flexDirection={["column", "row"]}>
        {/* Title, Description, and Form Side */}
        <Box pt={[0, 6]} pb={[4, 6]} maxWidth={["100%", "60%"]}>
          <Box
            as="p"
            fontSize={["text-lg", "text-xl"]}
            fontWeight="bold"
            lineHeight={["md", "lg"]}
            color="dark-purple"
            my={2}
          >
            {subtitle}
          </Box>
          <Box
            as="h1"
            fontSize={["header-1", "hero-header"]}
            lineHeight={["xl", "hero-header"]}
            fontWeight="black"
            mb={4}
          >
            {title}
          </Box>
          <Flex
            fontSize={["text-lg", "text-xl"]}
            lineHeight={["md", "lg"]}
            color="dark-gray"
            my={2}
            flexWrap="nowrap"
          >
            <Flex pr={2} fontWeight="bold" color="darkest">
              Date:
            </Flex>
            {date}
          </Flex>
          <Flex
            fontSize={["text-lg", "text-xl"]}
            lineHeight={["md", "lg"]}
            color="dark-gray"
            my={2}
            flexWrap="nowrap"
          >
            <Flex pr={2} fontWeight="bold" color="darkest">
              Time:
            </Flex>
            {time}
          </Flex>
          <Flex
            fontSize={["text-lg", "text-xl"]}
            lineHeight={["md", "lg"]}
            color="dark-gray"
            my={2}
          >
            <Flex pr={2} fontWeight="bold" color="darkest">
              Speaker:
            </Flex>
            {speaker}
          </Flex>
          <Box
            fontSize={["text-lg", "text-xl"]}
            lineHeight={["md", "lg"]}
            color="dark-gray"
            my={2}
          >
            {children}
          </Box>
        </Box>

        {/* Form Side */}
        <Flex
          alignItems="center"
          justifyContent="center"
          width={["100%", "40%"]}
          mb={[5, 0]}
        >
          <Box
            maxWidth={["300px", "300px"]}
            background="white"
            borderRadius="md"
            boxShadow="0 0 48px rgba(0, 0, 0, 0.24)"
            p={4}
            ml={[0, 8]}
          >
            <MarketoBrowserForm id={formId} minHeight="258px" />
          </Box>
        </Flex>
      </Centrator>
    </Flex>
  );
};
