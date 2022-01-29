import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Flex from "components/Flex";
import Logo from "components/Logo";
import NextImage from "next/image";
import Icon, { IconName } from "components/Icon";
import avatar from "./assets/avatar.png";
import AnimationScreens from "./AnimationScreens";
import { items, infraType } from "./constants";
import { MFA } from "./MFA";

const intervalTime = 5000;

export const ApplicationShell = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const [animationPaused, setAnimationPaused] = useState(true);
  const [showMFA, setMFAAnimation] = useState(true);

  useEffect(() => {
    const start = setTimeout(() => setAnimationPaused(false), 3200);

    // HIDE THUMBNAIL COMPONENT AFTER X SECONDS TO ENABLE CLICKS OF BUTTONS
    const hide = setTimeout(() => setMFAAnimation(false), 5000);

    //current and currentItem values that are array indices
    let current = currentItem;

    const interval = setInterval(() => {
      if (animationPaused) return;

      //are we at the end of the array? then start over at 0.
      const next = current < items.length - 1 ? current + 1 : 0;

      setCurrentItem(next);
      current = next;
    }, intervalTime);

    return () => {
      clearInterval(interval);
      clearTimeout(start);
      clearTimeout(hide);
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
      zIndex={0}
      boxShadow="0px 8px 32px rgba(0, 0, 0, 0.24)"
      mt={[5, 0]}
      pt={[6, 0]}
    >
      {showMFA && <MFA />}
      {/* SideBar */}
      <StyledSidebar>
        <Flex
          mt={[2, 3]}
          mb={[2, 3]}
          ml={[4, 0]}
          color="dark-purple"
          justifyContent="center"
        >
          <Logo width={"100px"} height={"24px"} marginBottom="2px" />
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
            mb={2}
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
      <Flex flexDirection="column" width="100%" position="relative">
        {/* TopBar */}
        <TopBar currentItem={currentItem} />
        {/* Central Screen */}
        {/* Sets the central screen to the index of the current item */}
        <ScreenShell selected={currentItem === 0}>
          {AnimationScreens[0]}
        </ScreenShell>
        <ScreenShell selected={currentItem === 1}>
          {AnimationScreens[1]}
        </ScreenShell>
        <ScreenShell selected={currentItem === 2}>
          {AnimationScreens[2]}
        </ScreenShell>
        <ScreenShell selected={currentItem === 3}>
          {AnimationScreens[3]}
        </ScreenShell>
        <ScreenShell selected={currentItem === 4}>
          {AnimationScreens[4]}
        </ScreenShell>
        <ScreenShell selected={currentItem === 5}>
          {AnimationScreens[5]}
        </ScreenShell>
        <ScreenShell selected={currentItem === 6}>
          {AnimationScreens[6]}
        </ScreenShell>
      </Flex>
    </Flex>
  );
};

interface ScreenShellProps {
  selected: boolean;
  children: React.ReactNode;
}

function ScreenShell({ selected, children }: ScreenShellProps) {
  return (
    <AnimatedScreenContainer
      height="auto"
      position="absolute"
      top={[56, 58]}
      display="block"
      opacity={selected ? 1 : 0}
      visibility={selected ? "inherit" : "hidden"}
      right="0"
      left="0"
      bottom="0"
    >
      {children}
    </AnimatedScreenContainer>
  );
}

const AnimatedScreenContainer = styled(Flex)`
  transition: opacity 800ms;
`;

interface TopBarProps {
  currentItem: number;
}

const TopBar = ({ currentItem }: TopBarProps) => {
  let ctaButton = null;

  // ADD BUTTON IF THERE IS A CALL TO ACTION (CTA)
  if (items[currentItem].cta) {
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
          {items[currentItem].cta}
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
        <Flex fontSize="16px" lineHeight="24px" color="#37474F">
          {items[currentItem].infra}
        </Flex>
        <Flex fontSize="11px" lineHeight="16px" color="#ADBCC4">
          {items[currentItem].subtitle}
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

interface SidebarItemProps {
  src: IconName;
  infra: infraType;
  selected: boolean;
}

function SidebarItem({ src, infra, selected }: SidebarItemProps) {
  return (
    <AnimatedItemContainer
      width="100%"
      justifyContent="flex-start"
      alignItems="center"
      color={selected ? "code" : "gray"}
      backgroundColor={selected ? "#fbfbfc" : "white"}
    >
      {/* The purple "selected" flag on left hand side of item */}
      <PurpleFlag
        height="100%"
        width="4px"
        bg="dark-purple"
        mr={2}
        opacity={selected ? 1 : 0}
        visibility={selected ? "inherit" : "hidden"}
      />
      <AnimatedIcon
        name={src}
        width="18px"
        color={selected ? "code" : "lighter-gray"}
      />
      <Flex ml="12px" fontSize="text-sm">
        {infra}
      </Flex>
    </AnimatedItemContainer>
  );
}

const PurpleFlag = styled(Flex)`
  transition: opacity 1400ms;
`;

const AnimatedItemContainer = styled(Flex)`
  transition: all 800ms;
`;

const AnimatedIcon = styled(Icon)`
  transition: all 800ms;
`;

const StyledSidebar = styled(Flex)`
  flex-direction: column;
  background: white;
  height: auto;
  width: 168px;
  borderradius: 4px 0 0 4px;

  // SIDE NAV MOVES TO TOP ON MOBILE
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
