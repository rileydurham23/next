import styled from "styled-components";
import css from "@styled-system/css";
import NextImage from "next/image";
import Flex from "components/Flex";
import Box from "components/Box";
import * as logos from "./logos";
import { DATA, DataEntry } from "./DATA";

const StyledBG = styled(Box)(
  css({
    display: "flex",
    justifyContent: "center",
    backgroundImage: `url(${logos.waveLight}), linear-gradient(125deg, #F0F2F4, #fff)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top left",
    backgroundSize: "cover",
  })
);

interface LogoBoxImageProps {
  name: string;
  children: React.ReactNode;
}

const LogoBoxImage = ({ name, children }: LogoBoxImageProps) => {
  return (
    <Flex
      borderTopStyle={["none", "dashed"]}
      borderTopColor={["none", "light-gray"]}
      borderTopWidth={["none", "1px"]}
      borderLeftStyle={["none", "dashed"]}
      borderLeftColor={["none", "light-gray"]}
      borderLeftWidth={["none", "1px"]}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      flexBasis="25%"
      color="gray"
      position="relative"
      fontSize="text-sm"
      lineHeight="md"
      textAlign="center"
      height="160px"
      width="25%"
      css={css({
        "&:last-child": {
          borderRightStyle: ["none", "dashed"],
          borderRightColor: ["none", "light-gray"],
          borderRightWidth: ["none", "1px"],
        },
      })}
    >
      <Flex justifyContent="center" alignItems="center" pb={2}>
        <NextImage src={logos[name]} alt={name} width="55px" height="55px" />
      </Flex>
      {children}
    </Flex>
  );
};

interface LogoBoxRowProps {
  children: React.ReactNode;
}

const LogoBoxRow = ({ children }: LogoBoxRowProps) => {
  return (
    <Flex
      flexDirection="row"
      css={css({
        "&:last-child": {
          borderBottomStyle: ["none", "dashed"],
          borderBottomColor: ["none", "light-gray"],
          borderBottomWidth: ["none", "1px"],
        },
      })}
    >
      {children}
    </Flex>
  );
};

export interface WorksWithProps {
  variant: DataEntry;
  title: string;
  children: React.ReactNode;
}

export const WorksWith = ({
  variant = "default",
  title,
  children,
}: WorksWithProps) => {
  const logos = DATA[variant];

  return (
    <StyledBG as="section" px={[0, 3]}>
      <Flex
        flexDirection={["column", "row"]}
        maxWidth={1240}
        justifyContent="space-between"
      >
        {/* Text component */}
        <Flex
          flexDirection="column"
          maxWidth={["auto", "50%"]}
          justifyContent="center"
          mx={[3, 5]}
          py={[3, 0]}
        >
          <Box
            as="h2"
            fontSize={["header-2", "header-1"]}
            fontWeight="black"
            color="black"
            lineHeight="xxl"
            mb={3}
          >
            {title}
          </Box>
          <Box fontSize="text-xl" lineHeight="lg" color="darkest" mb={3}>
            {children}
          </Box>
        </Flex>
        {/* Graphic component */}
        <Flex flexDirection="column" width={["auto", "100%"]}>
          <LogoBoxRow>
            <LogoBoxImage name={logos[0][0]}>{logos[0][1]}</LogoBoxImage>
            <LogoBoxImage name={logos[1][0]}>{logos[1][1]}</LogoBoxImage>
            <LogoBoxImage name={logos[2][0]}>{logos[2][1]}</LogoBoxImage>
            <LogoBoxImage name={logos[3][0]}>{logos[3][1]}</LogoBoxImage>
          </LogoBoxRow>
          <LogoBoxRow>
            <LogoBoxImage name={logos[4][0]}>{logos[4][1]}</LogoBoxImage>
            <LogoBoxImage name={logos[5][0]}>{logos[5][1]}</LogoBoxImage>
            <LogoBoxImage name={logos[6][0]}>{logos[6][1]}</LogoBoxImage>
            <LogoBoxImage name={logos[7][0]}>{logos[7][1]}</LogoBoxImage>
          </LogoBoxRow>
          <LogoBoxRow>
            <LogoBoxImage name={logos[8][0]}>{logos[8][1]}</LogoBoxImage>
            <LogoBoxImage name={logos[9][0]}>{logos[9][1]}</LogoBoxImage>
            <LogoBoxImage name={logos[10][0]}>{logos[10][1]}</LogoBoxImage>
            <LogoBoxImage name={logos[11][0]}>{logos[11][1]}</LogoBoxImage>
          </LogoBoxRow>
        </Flex>
      </Flex>
    </StyledBG>
  );
};
