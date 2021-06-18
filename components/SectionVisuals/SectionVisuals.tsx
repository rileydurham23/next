import css from "@styled-system/css";
import { Centrator } from "components/Layout";
import Box from "components/Box";
import Flex from "components/Flex";
import Heading from "components/Heading";

export interface SectionVisualsProps {
  subtitle?: string;
  title: string;
  children: React.ReactNode;
  description: React.ReactNode;
}

export const SectionVisuals = ({
  children,
  subtitle,
  title,
  description,
}: SectionVisualsProps) => {
  return (
    <Centrator
      alignItems="stretch"
      flexDirection={["column", "row"]}
      justifyContent="space-between"
    >
      <Box flex="1 1 auto" maxWidth="600px" pt={[4, 11]} pb={[0, 11]}>
        <Heading
          title={title}
          subtitle={subtitle}
          titleFontSize="48px"
          titleLineHeight="xxl"
          titleFontWeight="black"
        />
        <Box
          mt={[3, 4]}
          fontSize="text-xl"
          lineHeight="lg"
          color="dark-gray"
          css={css({
            "&& > *:first-child": { mt: 0 },
            "&& > *:last-child": { mb: 0 },
          })}
        >
          {description}
        </Box>
      </Box>
      <Flex
        flex="0 0 auto"
        alignItems="center"
        ml={[0, 5]}
        pt={[5, 8]}
        pb={[3, 8]}
        maxWidth="100%"
      >
        {children}
      </Flex>
    </Centrator>
  );
};
