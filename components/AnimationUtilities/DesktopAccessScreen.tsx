import styled from "styled-components";
import css from "@styled-system/css";
import NextImage from "next/image";
import Flex from "components/Flex";
import Logo from "components/Logo";
import { searchGlass } from "./assets";

export const DesktopAccessScreen = () => {
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
          <Flex
            fontWeight="bold"
            pl={4}
            color="white"
            width="70%"
            fontSize={["text-md", "text-lg"]}
          >
            Desktop Access
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
        {/* Main Screen Section */}
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
          height={226}
          px={2}
          pt={2}
        >
          <StyledItemBar
            height={30}
            bg="#273264"
            alignItems="center"
            justifyContent="space-around"
          >
            <StyledSearchBar
              width={["45%", 140]}
              bg="#131D49"
              ml={2}
              pl={2}
              flexShrink={0}
              justifyContent="flex-start"
            >
              <Flex
                height="12px"
                width="12px"
                alignSelf="center"
                position="relative"
              >
                <NextImage
                  src={searchGlass}
                  alt="search-glass"
                  layout="fill"
                  objectFit="contain"
                />
              </Flex>
            </StyledSearchBar>
            <Flex width={160} />
            <StyledMainLine
              width={[60, 80]}
              bg="#4A5479"
              flexShrink={0}
              mr={[1, 0]}
            />
          </StyledItemBar>
          <StyledItemBar height={12} bg="#151D46"></StyledItemBar>
          <StyledItemBar height={46} bg="#273264">
            <ItemBarContent dot="#00BEA4" />
          </StyledItemBar>
          <StyledItemBar height={46} bg="#273264">
            <ItemBarContent dot="#00BEA4" />
          </StyledItemBar>
          <StyledItemBar height={46} bg="#273264">
            <ItemBarContent dot="#00BEA4" />
          </StyledItemBar>
          <StyledItemBar
            height={32}
            bg="#273264"
            alignItems="center"
            justifyContent="space-around"
          >
            <StyledMainLine width={40} bg="#4A5479" ml={12} flexShrink={0} />
            <Flex width={180} />
            <StyledMainLine width={80} bg="#4A5479" flexShrink={0} />
          </StyledItemBar>
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

const StyledItemBar = styled(Flex)(
  css({
    width: "100%",
    // justifyContent: "center",
    mx: 3,
    borderBottom: "1px solid #1D2858",
  })
);

const StyledMainLine = styled(Flex)(
  css({
    height: "8px",
    borderRadius: "md",
  })
);

const StyledSearchBar = styled(StyledMainLine)({
  height: "16px",
});

const StyledDot = styled(Flex)({
  borderRadius: "999px",
  height: "10px",
  width: "10px",
  minWidth: "10px",
});

const StyledConnectButton = () => (
  <Flex
    color="white"
    bg="#1E2751"
    width="80px"
    minWidth="80px"
    height="30px"
    borderRadius="3px"
    border="2px solid #081247"
    textAlign="center"
    justifyContent="center"
    fontSize="text-sm"
    flexShrink={0}
    ml={[1, 3]}
  >
    CONNECT
  </Flex>
);

interface ItemBarProps {
  dot: string;
}

const ItemBarContent = ({ dot }: ItemBarProps) => {
  return (
    <Flex
      flexDirection="row"
      justifyContent={["space-around", "center"]}
      width="100%"
      alignItems="center"
      color="#969696"
      fontSize="text-md"
      fontWeight="bold"
      textOverflow="clip"
      overflow="hidden"
      whiteSpace="nowrap"
    >
      <StyledDot bg={dot} ml={[12, 12]} />
      <StyledMainLine
        width={40}
        bg="#777F9B"
        display={["none", "flex"]}
        ml={3}
        mr={3}
      />
      Windows 10
      <StyledMainLine
        width={30}
        bg="#777F9B"
        ml={3}
        display={["none", "flex"]}
      />
      <StyledMainLine
        width={16}
        bg="#081247"
        ml={3}
        display={["none", "flex"]}
      />
      <StyledMainLine
        width={40}
        bg="#081247"
        display={["none", "flex"]}
        ml={1}
      />
      <StyledConnectButton />
    </Flex>
  );
};
