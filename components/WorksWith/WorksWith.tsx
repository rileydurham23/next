import styled from "styled-components";
import css from "@styled-system/css";
import NextImage from "next/image";
import Flex from "components/Flex";
import Box from "components/Box";
import * as logos from "./logos";

export interface WorksWithProps {
  AWS?: boolean;
  title: string;
  children: React.ReactNode;
}

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

//should be refactored ASAP
const WWDefault = (
  <>
    <LogoBoxRow>
      <LogoBoxImage name="puppet">Puppet</LogoBoxImage>
      <LogoBoxImage name="gcloud">Google Cloud</LogoBoxImage>
      <LogoBoxImage name="aws">Amazon</LogoBoxImage>
      <LogoBoxImage name="linux">Linux</LogoBoxImage>
    </LogoBoxRow>
    <LogoBoxRow>
      <LogoBoxImage name="azure">Azure</LogoBoxImage>
      <LogoBoxImage name="chef">Chef</LogoBoxImage>
      <LogoBoxImage name="okta">Okta</LogoBoxImage>
      <LogoBoxImage name="ansible">Ansible</LogoBoxImage>
    </LogoBoxRow>
    <LogoBoxRow>
      <LogoBoxImage name="oneLogin">One Login</LogoBoxImage>
      <LogoBoxImage name="auth0">Auth0</LogoBoxImage>
      <LogoBoxImage name="windows">Active Directory</LogoBoxImage>
      <LogoBoxImage name="k8s">Kubernetes</LogoBoxImage>
    </LogoBoxRow>
  </>
);

const AWSDisplay = (
  <>
    <LogoBoxRow>
      <LogoBoxImage name="aws">Amazon</LogoBoxImage>
      <LogoBoxImage name="cloudtrail">AWS Cloudtrail</LogoBoxImage>
      <LogoBoxImage name="marketplace">AWS Marketplace</LogoBoxImage>
      <LogoBoxImage name="linux">Linux</LogoBoxImage>
    </LogoBoxRow>
    <LogoBoxRow>
      <LogoBoxImage name="puppet">Puppet</LogoBoxImage>
      <LogoBoxImage name="chef">Chef</LogoBoxImage>
      <LogoBoxImage name="okta">Okta</LogoBoxImage>
      <LogoBoxImage name="ansible">Ansible</LogoBoxImage>
    </LogoBoxRow>
    <LogoBoxRow>
      <LogoBoxImage name="oneLogin">One Login</LogoBoxImage>
      <LogoBoxImage name="auth0">Auth0</LogoBoxImage>
      <LogoBoxImage name="windows">Active Directory</LogoBoxImage>
      <LogoBoxImage name="k8s">Kubernetes</LogoBoxImage>
    </LogoBoxRow>
  </>
);

export const WorksWith = ({ AWS = false, title, children }: WorksWithProps) => {
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
          {AWS ? AWSDisplay : WWDefault}
        </Flex>
      </Flex>
    </StyledBG>
  );
};
