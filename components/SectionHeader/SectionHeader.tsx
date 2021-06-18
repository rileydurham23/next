import { Centrator } from "components/Layout";
import Box from "components/Box";
import Flex from "components/Flex";
import Heading from "components/Heading";

export interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  children: React.ReactNode;
  description: React.ReactNode;
}

export const SectionHeader = ({
  children,
  subtitle,
  title,
  description,
}: SectionHeaderProps) => {
  return (
    <Flex
      pt={[7, 11]}
      backgroundImage="linear-gradient(180deg, #ffffff 0%, #f0f2f4 100%)"
    >
      <Centrator
        justifyContent={["auto", "space-between"]}
        alignItems="stretch"
        flexDirection={["column", "row"]}
      >
        <Box flex="1 1 auto" py={[4, 11]} order={[1, 0]}>
          <Heading
            title={title}
            subtitle={subtitle}
            titleFontSize="56px"
            titleLineHeight="xxl"
            titleFontWeight="black"
          />
          <Box
            mt={[3, 4]}
            fontSize="text-xl"
            lineHeight="lg"
            color="dark-gray"
            maxWidth="600px"
          >
            {description}
          </Box>
        </Box>
        <Flex
          flex="0 0 auto"
          justifyContent="center"
          alignItems="center"
          ml={[0, 11]}
          pt={[3, 2]}
          pb={[0, 2]}
          px={[3, 0]}
          maxWidth="100%"
        >
          {children}
        </Flex>
      </Centrator>
    </Flex>
  );
};
