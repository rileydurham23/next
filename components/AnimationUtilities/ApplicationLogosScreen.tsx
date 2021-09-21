import styled from "styled-components";
import css from "@styled-system/css";
import NextImage from "next/image";
import Flex from "components/Flex";
import Logo from "components/Logo";
import {
  bitbucket,
  gitlab,
  grafana,
  jenkins_avatar,
  k8s,
  splunk,
} from "./assets";

export const ApplicationLogosScreen = () => {
  return (
    <Flex width="100%" height="100%" flexDirection="row">
      {/* Sidebar */}
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        backgroundColor="#273264"
        width="20%"
        height={276}
      >
        <SidebarLogo>
          <Logo width="85%" />
        </SidebarLogo>
        <SidebarBox />
        <SpecialSidebarBox />
        <SidebarBox />
        <SidebarBox />
      </Flex>
      {/* Main Window */}
      <Flex backgroundColor="#101C52" width="80%" flexDirection="column">
        {/* Top Nav */}
        <Flex
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="center"
          height="50px"
          width="100%"
          borderBottom="2px solid #192559"
        >
          <Flex fontWeight="bold" pl={4} color="white" width="70%">
            Applications
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="70px"
            py={2}
          >
            <StyledSidebarLine />
          </Flex>
          <Flex width="15%" justifyContent="center">
            <StyledAvatar color="white">T</StyledAvatar>
          </Flex>
        </Flex>
        {/* Applications Logo Section */}
        <Flex
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="space-evenly"
          overflow="hidden"
          height={226}
          px={2}
          pt={2}
        >
          <StyledLogoBox src={gitlab} />
          <StyledLogoBox src={bitbucket} />
          <StyledLogoBox src={jenkins_avatar} />
          <StyledLogoBox src={splunk} />
          <StyledLogoBox src={k8s} />
          <StyledLogoBox src={grafana} />
        </Flex>
      </Flex>
    </Flex>
  );
};

const SidebarBox = () => {
  return (
    <StyledSidebarBox>
      <StyledSidebarLine />
    </StyledSidebarBox>
  );
};

const SpecialSidebarBox = () => {
  return (
    <StyledSidebarBox backgroundColor="#33427E !important" position="relative">
      <Flex
        position="absolute"
        height="100%"
        width="5px"
        backgroundColor="#6E17FF"
        alignSelf="flex-start"
      />
      <StyledSidebarLine position="absolute" />
    </StyledSidebarBox>
  );
};

interface StyledLogoBoxProps {
  src: string;
}

const StyledLogoBox = ({ src }: StyledLogoBoxProps) => {
  return (
    <StyledLogoShell>
      <NextImage src={src} alt="" height="48px" width="48px" />
    </StyledLogoShell>
  );
};

const SidebarLogo = styled(Flex)(
  css({
    height: "50px",
    width: "100%",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  })
);
const StyledSidebarBox = styled(Flex)(
  css({
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "32px",
    backgroundColor: "#273264",
  })
);

const StyledSidebarLine = styled(Flex)(
  css({
    width: "70%",
    height: "5px",
    backgroundColor: "#717BA5",
    borderRadius: "md",
  })
);

const StyledAvatar = styled(Flex)(
  css({
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: "20px",
    width: "20px",
    fontSize: "text-sm",
    backgroundColor: "#6E17FF",
    borderRadius: "50%",
  })
);

const StyledLogoShell = styled(Flex)(
  css({
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#273264",
    height: "70px",
    width: "70px",
    borderRadius: "md",
    m: 3,
  })
);
