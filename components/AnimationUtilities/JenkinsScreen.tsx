import styled from "styled-components";
import css from "@styled-system/css";
import NextImage from "next/image";
import Flex, { FlexProps } from "components/Flex";
import butler from "./assets/jenkins-avatar.svg";
import jenkinsLogo from "./assets/jenkins-type.svg";
import { MainDisplay } from "./MainDisplay";

export const JenkinsScreen = () => {
  return (
    <Flex width="100%" height="100%" flexDirection="column">
      <TopNav id="topnav">
        <SeveredButler />
        <JenkinsLogo />
        <AlignmentAdjustment width="100px" />
        <SearchBar />
        <Navline backgroundColor="#66ACD9" width="40px" />
      </TopNav>
      <Flex
        pl={3}
        alignItems="center"
        width="100%"
        height="30px"
        borderBottom="1px solid #B5B5B5"
        color="#949494"
      >
        Jenkins
      </Flex>
      <Flex id="main container" flexDirection="row">
        <Flex
          id="sidebar"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          width="20%"
        >
          <SidebarItem p={2} bg="#D2D2D2" width="90%" mt={1} />
          <SidebarItem p={2} bg="#D2D2D2" width="70%" />
          <SidebarItem p={2} bg="#D2D2D2" width="90%" />
          <SidebarItem p={2} bg="#D2D2D2" width="100%" />
          <SidebarItem p={2} bg="#D2D2D2" width="90%" />
          <SidebarItem p={2} bg="#B4B4B4" width="90%" mt={3} />
          <SidebarItem p={2} bg="#B2C2DB" width="100%" />
          <SidebarItem p={2} bg="#D2D2D2" width="70%" />
        </Flex>
        {/* Central Display */}
        <Flex
          width="80%"
          pl={3}
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Flex
            width="100%"
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <SidebarItem bg="#ECECEC" width="120px" ml={-2} />
            <AlignmentAdjustment width="120px" />
            <SidebarItem bg="#ECECEC" width="120px" />
          </Flex>
          {/* Tabs container */}
          <Flex
            width="100%"
            height="20px"
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <AllTab>All</AllTab>
            <AddTab pb={1}>+</AddTab>
          </Flex>
          <MainDisplay />
        </Flex>
      </Flex>
    </Flex>
  );
};

const TopNav = styled(Flex)(
  css({
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "50px",
    backgroundColor: "#0074C0",
    overflow: "hidden",
    position: "relative",
  })
);

const SeveredButler = () => {
  return (
    <Flex width="60px" position="absolute" top="10px" ml={2}>
      <NextImage src={butler} alt="jenkins the butler" height={60} width={60} />
    </Flex>
  );
};

const JenkinsLogo = () => {
  return (
    <Flex width="120px" ml={11}>
      <NextImage src={jenkinsLogo} alt="jenkins logo" height={40} width={110} />
    </Flex>
  );
};

const AlignmentAdjustment = styled(Flex)(
  css({
    height: "100%",
    flexShrink: 2,
  })
);

const SearchBar = styled(Flex)(
  css({
    backgroundColor: "#00558B",
    borderRadius: "default",
    height: "26px",
    width: "100px",
    mx: 2,
  })
);

const Navline = styled(Flex)(
  css({
    height: "6px",
    borderRadius: "md",
    mx: 2,
  })
);

interface SidebarItemProps {
  bg: string;
}
const SidebarItem = ({ bg, ...props }: SidebarItemProps & FlexProps) => {
  return (
    <Flex
      height="20px"
      justifyContent="flex-start"
      alignItems="center"
      {...props}
    >
      <Navline backgroundColor={bg} width="90%" />
    </Flex>
  );
};

const AllTab = styled(Flex)(
  css({
    backgroundColor: "#A9D4FF",
    width: "40px",
    height: "100%",
    fontSize: "text-md",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
  })
);
const AddTab = styled(Flex)(
  css({
    ml: 2,
    width: "24px",
    height: "100%",
    color: "blue",
    fontSize: "header-4",
    justifyContent: "center",
    borderLeft: "1px solid #D1EFFF",
    borderTop: "1px solid #D1EFFF",
    alignItems: "center",
    borderRight: "1px solid #D1EFFF",
  })
);
