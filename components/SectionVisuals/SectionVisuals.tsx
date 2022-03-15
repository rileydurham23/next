import Centrator from "components/Centrator";
import styled from "styled-components";
import Box from "components/Box";
import Flex from "components/Flex";
import Heading from "components/Heading";
import { P } from "components/MDX";
import { variant } from "components/system";

export type BoxStyleVariant = "default" | "secondary";

export interface SectionVisualsProps {
  subtitle?: string;
  title: string;
  contentWidth?: string;
  children: React.ReactNode;
  description: React.ReactNode;
  titleFontSize?: string | string[];
  flexStyle?: string | string[];
  imageLocation?: string;
  boxStyle?: BoxStyleVariant;
  textColor?: string;
}

export const SectionVisuals = ({
  children,
  subtitle,
  title,
  contentWidth = "600px",
  description,
  titleFontSize = ["header-1", "48px"],
  flexStyle = ["column", "row"],
  imageLocation = "flex-start",
  boxStyle = "default",
  textColor,
}: SectionVisualsProps) => {
  return (
    <Centrator
      alignItems="stretch"
      justifyContent="space-between"
      flexDirection={flexStyle}
    >
      <Box flex="1 1 auto" maxWidth={contentWidth} pt={[4, 11]} pb={[0, 11]}>
        <Heading
          title={title}
          subtitle={subtitle}
          titleFontSize={titleFontSize}
          titleLineHeight={["xl", "xxl"]}
          titleFontWeight="black"
          dark={textColor === "white" ? true : false}
        />
        <StyledBox variant={boxStyle} color={textColor || "darkest"}>
          {description}
        </StyledBox>
      </Box>
      <Flex
        flex="0 0 auto"
        alignItems="center"
        justifyContent={imageLocation}
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

const StyledBox = styled(Box)<{ variant: BoxStyleVariant }>(
  variant({
    variants: {
      default: {
        lineHeight: ["md", "lg"],
        fontSize: ["text-md", "text-xl"],
        mt: [3, 4],
        color: "dark-gray",
        [`& > ${P}`]: {
          fontSize: "inherit",
          lineHeight: "inherit",
        },
        li: {
          color: "black",
          fontSize: "text-md",
          lineHeight: "md",
        },
      },
      secondary: {
        flexShrink: 2,
        boxSizing: "border-box",
        width: ["95vw", "100%", "480px"],
        mx: "auto",
        mt: [4, 4, 4],
        p: {
          fontSize: ["text-lg", "text-xl"],
          fontFamily: "body",
          fontWeight: "regular",
          letterSpacing: "0.0015em",
          lineHeight: "lg",
          textAlign: "left",
          color: "darkest",
        },
      },
    },
  })
);
