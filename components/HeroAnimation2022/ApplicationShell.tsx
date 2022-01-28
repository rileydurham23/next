import { useEffect, useState } from "react";
import styled from "styled-components";
import Flex from "components/Flex";
import Logo from "components/Logo";
import NextImage from "next/image";
import Icon, { IconName } from "components/Icon";
import avatar from "./assets/avatar.png";
import AnimationScreens from "./AnimationScreens";
import { items } from "./constants";

// DATA THAT POPULATES TOPBAR
const sectionData = [
  { title: "Servers", subtitle: "1250 total", cta: "Add Server" },
  { title: "Databases", subtitle: "500 total", cta: "Add Database" },
  { title: "Kubernetes", subtitle: "15 total", cta: "" },
  { title: "Applications", subtitle: "110 total", cta: "Add Application" },
  { title: "Desktops", subtitle: "20 total", cta: "Add Desktop" },
  { title: "Activity", subtitle: "300 total", cta: "" },
  { title: "Team", subtitle: "5 total", cta: "Add User" },
];

const ApplicationShell = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const [animationPaused, setAnimationPaused] = useState(false);

  useEffect(() => {
    //current and currentItem values that are array indices
    let current = currentItem;

    const interval = setInterval(() => {
      if (animationPaused) return;

      //are we at the end of the array? then start over at 0.
      const next = current < items.length - 1 ? current + 1 : 0;

      setCurrentItem(next);
      current = next;
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [currentItem, animationPaused]);

  return (
    <Flex
      height={400}
      width={700}
      borderRadius="8px"
      bg="#F1F3F5"
      ml={[0, 3]}
      overflow="hidden"
      position="relative"
      boxShadow="0px 8px 32px rgba(0, 0, 0, 0.24)"
      mt={[5, 0]}
      pt={[6, 0]}
    >
      {/* SideBar */}
      <StyledSidebar>
        <Flex
          mt={[2, 3]}
          mb={[2, 3]}
          ml={[4, 0]}
          color="dark-purple"
          justifyContent="center"
        >
          <Logo width={"100px"} height={"24px"} />
        </Flex>
        <Flex
          className="clusters"
          flexDirection="column"
          alignItems="flex-start"
          color="gray"
        >
          <Flex fontSize="8px" ml={2}>
            CLUSTERS
          </Flex>
          <Flex
            justifyContent="space-between"
            fontSize="text-xs"
            border="1px solid #DBE2E6"
            borderRadius="2px"
            width="118px"
            boxSizing="border-box"
            px={2}
            mx={2}
            mb={3}
            alignItems="center"
          >
            teleport-asteroid
            <Icon size="xs" name="arrow" ml={2} />
          </Flex>
        </Flex>
        <div className="sidenav-buttons">
          {items.map((item, i) => {
            return (
              <Flex
                height={[34, 40]}
                key={item.name}
                onClick={() => {
                  // SELECT NAV ITEM
                  setCurrentItem(i);

                  // PAUSE ANIMATION
                  setAnimationPaused(true);
                }}
              >
                <SidebarItem
                  id={i}
                  src={item.name as IconName}
                  infra={item.infra as infraType}
                  selected={currentItem === i}
                />
              </Flex>
            );
          })}
        </div>
      </StyledSidebar>
      {/* Main Window */}
      <Flex flexDirection="column" width="100%">
        {/* TopBar */}
        <TopBar currentItem={currentItem} />
        {/* Central Screen */}
        {/* Sets the central screen to the index of the current item */}
        {AnimationScreens[currentItem]}
      </Flex>
    </Flex>
  );
};

export default ApplicationShell;

interface TopBarProps {
  currentItem: number;
}

const TopBar = ({ currentItem }: TopBarProps) => {
  let ctaButton = null;

  // ADD BUTTON IF THERE IS A CALL TO ACTION (CTA)
  if (sectionData[currentItem].cta) {
    ctaButton = (
      <Flex alignItems="center" justifyContent="center">
        <Flex
          borderRadius="4px"
          border="1px solid #512FC9"
          p={2}
          color="dark-purple"
          height="24px"
          fontSize="10px"
          alignItems="center"
          lineHeight="24px"
        >
          {sectionData[currentItem].cta}
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex
      height={60}
      mx={[4, 4]}
      borderBottom="1px solid #DBE2E6"
      justifyContent="space-between"
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        width={["28%", "40%"]}
      >
        <Flex
          fontFamily="Ubuntu"
          fontSize="16px"
          lineHeight="24px"
          color="#37474F"
        >
          {sectionData[currentItem].title}
        </Flex>
        <Flex fontSize="11px" lineHeight="16px" color="#ADBCC4">
          {sectionData[currentItem].subtitle}
        </Flex>
      </Flex>

      <Flex alignItems="center" justifyContent="right">
        {ctaButton}
        <Icon name="bell" width="16px" color="gray" mx={[3, 3]} />
        <NextImage src={avatar} alt="avatar" height={28} width={28} />
      </Flex>
    </Flex>
  );
};

type infraType =
  | "Servers"
  | "Databases"
  | "Kubernetes"
  | "Applications"
  | "Desktops"
  | "Activity"
  | "Team";

interface SidebarItemProps {
  id: number;
  src: IconName;
  infra: infraType;
  selected: boolean;
}

function SidebarItem({ src, infra, selected }: SidebarItemProps) {
  return (
    <Flex
      width="100%"
      justifyContent="flex-start"
      alignItems="center"
      color={selected ? "code" : "#607D8B"}
      bg={selected ? "#fbfbfc" : "white"}
    >
      <Flex
        bg="dark-purple"
        height="100%"
        width="4px"
        visibility={selected ? "inherit" : "hidden"}
        mr={2}
      />
      <Icon name={src} width="18px" color={selected ? "code" : "#D2DBDF"} />
      <Flex ml="12px" fontSize="text-sm">
        {infra}
      </Flex>
    </Flex>
  );
}

const StyledSidebar = styled(Flex)`
  flex-direction: column;
  background: white;
  height: auto;
  width: 168px;
  borderradius: 4px 0 0 4px;

  // SIDE NAV GOT TO TOP ON MOBILE
  @media (max-width: 800px) {
    position: absolute;
    top: 0;
    flex-direction: unset;
    height: auto;
    width: 100%;

    .clusters,
    .sidenav-buttons {
      display: none;
    }
  }
`;
