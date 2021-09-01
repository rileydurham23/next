import styled from "styled-components";
import css from "@styled-system/css";
import Flex from "components/Flex";
import Box from "components/Box";
import {
  StyledCertBox,
  HiddenDiv,
  StyledPrompt,
  AnimatedCursor,
  AnimatedFadeIn,
  StyledSpan,
} from "./AnimationUtilities";

const StyledTextContainer = styled(Flex)(
  css({
    flexDirection: "column",
    fontFamily: "monospace",
    fontSize: ["text-sm", "text-md"],
    py: 2,
    color: "white",
  })
);

//HOMEPAGE text
const H1 = (
  <StyledTextContainer>
    <Flex flexDirection="row">
      <StyledPrompt />
      <AnimatedFadeIn color="#f97685">tsh login</AnimatedFadeIn>
    </Flex>
    <HiddenDiv>Placeholder</HiddenDiv>
  </StyledTextContainer>
);

const H2 = (
  <StyledTextContainer>
    <Flex flexDirection="row">
      <StyledPrompt />
      <Box color="#f97685">tsh login</Box>
    </Flex>
    <AnimatedFadeIn pl={5}>
      Launching SSO with 2FA via browser...
    </AnimatedFadeIn>
  </StyledTextContainer>
);

const H3 = (
  <StyledTextContainer>
    <Flex flexDirection="row">
      <StyledPrompt />
      <Box color="#f97685">tsh login</Box>
    </Flex>
    <AnimatedFadeIn ml={3}>
      Successfully issued short-lived certificates:
    </AnimatedFadeIn>
    <Flex flexDirection="column">
      <StyledCertBox>SSH</StyledCertBox>
      <StyledCertBox>Kubernets API</StyledCertBox>
      <StyledCertBox>PostgreSQL</StyledCertBox>
      <StyledCertBox>Jenkins</StyledCertBox>
      <StyledCertBox>Grafana</StyledCertBox>
      <Box ml={3}>
        Your role is <StyledSpan>[dev-team]</StyledSpan>.
      </Box>
      <Box ml={3} color="white">
        Your access expires in 8 hours.
      </Box>
    </Flex>
    <Flex flexDirection="row">
      <StyledPrompt />
      <AnimatedCursor />
    </Flex>
  </StyledTextContainer>
);

export const HomePageText = {
  1: H1,
  2: H2,
  3: H3,
};

//DATABASE text

const D1 = (
  <StyledTextContainer>
    <Flex flexDirection="row">
      <StyledPrompt />
      <AnimatedFadeIn color="#f97685">tsh login db-proxy</AnimatedFadeIn>
    </Flex>
    <HiddenDiv>Placeholder</HiddenDiv>
  </StyledTextContainer>
);

const D2 = (
  <StyledTextContainer>
    <Flex flexDirection="row">
      <StyledPrompt />
      <Box color="#f97685">tsh login db-proxy</Box>
    </Flex>
    <AnimatedFadeIn pl={5}>
      Launching SSO with 2FA via browser...
    </AnimatedFadeIn>
  </StyledTextContainer>
);

const D3 = (
  <StyledTextContainer>
    <Flex flexDirection="row">
      <StyledPrompt />
      <Box color="#f97685">tsh login db-proxy</Box>
    </Flex>
    <AnimatedFadeIn ml={3}>
      Successfully issued short-lived certificates:
    </AnimatedFadeIn>
    <Flex flexDirection="column">
      <StyledCertBox>PostgreSQL</StyledCertBox>
      <StyledCertBox>MongoDB</StyledCertBox>
      <StyledCertBox>MySQL</StyledCertBox>
      <Box ml={3}>
        Your role is <StyledSpan>[dev-team]</StyledSpan>.
      </Box>
      <Box ml={3}>Your access expires in 8 hours.</Box>
    </Flex>
    <Flex flexDirection="row">
      <StyledPrompt />
      <Box>tsh db ls</Box>
    </Flex>
    <Box ml={5}>staging-db</Box>
    <Box ml={5}>prod-db</Box>
    <Flex flexDirection="row">
      <StyledPrompt />
      <Box>tsh db login prod-db</Box>
    </Flex>
    <Flex flexDirection="row">
      <StyledPrompt />
      <Box>psql &ldquo;service=prod-db&rdquo;</Box>
    </Flex>
    <Flex ml={3} flexDirection="row">
      <Box color="#f97685">psql &gt;&nbsp;</Box>
      <AnimatedCursor />
    </Flex>
  </StyledTextContainer>
);

export const DatabaseText = {
  1: D1,
  2: D2,
  3: D3,
};

//KUBERNETES text

const K1 = (
  <StyledTextContainer>
    <Flex flexDirection="row">
      <StyledPrompt />
      <AnimatedFadeIn color="#f97685">tsh login k8s-proxy</AnimatedFadeIn>
    </Flex>
    <HiddenDiv>Placeholder</HiddenDiv>
  </StyledTextContainer>
);

const K2 = (
  <StyledTextContainer>
    <Flex flexDirection="row">
      <StyledPrompt />
      <Box color="#f97685">tsh login k8s-proxy</Box>
    </Flex>
    <AnimatedFadeIn pl={5}>
      Launching SSO with 2FA via browser...
    </AnimatedFadeIn>
  </StyledTextContainer>
);

const K3 = (
  <StyledTextContainer>
    <Flex flexDirection="row">
      <StyledPrompt />
      <Box color="#f97685">tsh login k8s-proxy</Box>
    </Flex>
    <AnimatedFadeIn ml={3}>
      Successfully issued short-lived certificates:
    </AnimatedFadeIn>
    <Flex flexDirection="column">
      <StyledCertBox>Kubernetes API</StyledCertBox>
      <StyledCertBox>SSH</StyledCertBox>
      <Box ml={3}>
        Your role is <StyledSpan>[dev-team]</StyledSpan>. Access expires in 8
        hours.
      </Box>
    </Flex>
    <Flex flexDirection="row">
      <StyledPrompt />
      <Box>tsh db ls</Box>
    </Flex>
    <Box ml={5}>staging</Box>
    <Box ml={5}>production</Box>
    <Box ml={5}>edge-network</Box>
    <Flex flexDirection="row">
      <StyledPrompt />
      <Box color="white">kubectl exec --tty shell -- /bin/bash</Box>
    </Flex>
    <Flex ml={3} flexDirection="row">
      <Box color="#f97685">shell &gt;&nbsp;</Box>
      <AnimatedCursor />
    </Flex>
  </StyledTextContainer>
);

export const KubernetesText = {
  1: K1,
  2: K2,
  3: K3,
};

//SERVER text

const S1 = (
  <StyledTextContainer>
    <Flex flexDirection="row">
      <StyledPrompt />
      <AnimatedFadeIn color="#f97685">tsh login access-proxy</AnimatedFadeIn>
    </Flex>
    <HiddenDiv>Placeholder</HiddenDiv>
  </StyledTextContainer>
);

const S2 = (
  <StyledTextContainer>
    <Flex flexDirection="row">
      <StyledPrompt />
      <Box color="#f97685">tsh login access-proxy</Box>
    </Flex>
    <AnimatedFadeIn pl={5}>
      Launching SSO with 2FA via browser...
    </AnimatedFadeIn>
  </StyledTextContainer>
);

const S3 = (
  <StyledTextContainer>
    <Flex flexDirection="row">
      <StyledPrompt />
      <Box color="#f97685">tsh login access-proxy</Box>
    </Flex>
    <AnimatedFadeIn ml={3}>
      Successfully issued short-lived certificates:
    </AnimatedFadeIn>
    <Flex flexDirection="column">
      <StyledCertBox>SSH</StyledCertBox>
      <StyledCertBox>RDP</StyledCertBox>
      <Box ml={3}>
        Your role is <StyledSpan>[dev-team]</StyledSpan>. Access expires in 8
        hours.
      </Box>
    </Flex>
    <Flex flexDirection="row">
      <StyledPrompt />
      <Box>tsh clusters</Box>
    </Flex>
    <Box ml={5}>staging</Box>
    <Box ml={5}>production</Box>
    <Box ml={5}>edge-network</Box>
    <Box ml={3}>
      Your role is <StyledSpan>[dev-team]</StyledSpan>.
    </Box>
    <Box ml={3}>Your access expires in 8 hours.</Box>
    <Flex flexDirection="row">
      <StyledPrompt />
      <AnimatedCursor />
    </Flex>
  </StyledTextContainer>
);

export const ServerText = {
  1: S1,
  2: S2,
  3: S3,
};
