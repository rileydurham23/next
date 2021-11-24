import css from "@styled-system/css";
import { Centrator } from "components/Layout";
import Box from "components/Box";
import Flex from "components/Flex";
import Heading from "components/Heading";
import { P } from "components/MDX";

export interface SectionVisualsProps {
  subtitle?: string;
  title: string;
  contentWidth?: string;
  children: React.ReactNode;
  description: React.ReactNode;
}

export const SectionVisuals = ({
  children,
  subtitle,
  title,
  contentWidth = "600px",
  description,
}: SectionVisualsProps) => {
  return (
    <Centrator
      alignItems="stretch"
      flexDirection={["column", "row"]}
      justifyContent="space-between"
    >
      <Box flex="1 1 auto" maxWidth={contentWidth} pt={[4, 11]} pb={[0, 11]}>
        <Heading
          title={title}
          subtitle={subtitle}
          titleFontSize={["header-1", "48px"]}
          titleLineHeight={["xl", "xxl"]}
          titleFontWeight="black"
        />
        <Box
          mt={[3, 4]}
          fontSize={["text-md", "text-xl"]}
          lineHeight={["md", "lg"]}
          color="dark-gray"
          css={css({
            [`& > ${P}`]: {
              fontSize: "inherit",
              lineHeight: "inherit",
            },
            li: {
              color: "black",
              fontSize: "text-md",
              lineHeight: "md",
            },
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
