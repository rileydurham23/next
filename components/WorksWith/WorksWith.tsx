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
  comingSoon?: boolean;
  children: React.ReactNode;
}

const LogoBoxImage = ({ name, comingSoon, children }: LogoBoxImageProps) => {
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
      {comingSoon && <ComingSoon>coming soon</ComingSoon>}
    </Flex>
  );
};

const ComingSoon = styled("p")(
  css({
    position: "absolute",
    bottom: "8px",
    color: "gray",
    fontSize: "9px",
    textTransform: "uppercase",
  })
);

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
  const rows = [logos.slice(0, 4), logos.slice(4, 8), logos.slice(8, 12)];

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
          {rows.map((row, ix) => {
            return (
              <LogoBoxRow key={ix}>
                {row.map((_, i) => {
                  return (
                    <LogoBoxImage
                      key={i}
                      comingSoon={row[i][2]}
                      name={row[i][0]}
                    >
                      {row[i][1]}
                    </LogoBoxImage>
                  );
                })}
              </LogoBoxRow>
            );
          })}
        </Flex>
      </Flex>
    </StyledBG>
  );
};
