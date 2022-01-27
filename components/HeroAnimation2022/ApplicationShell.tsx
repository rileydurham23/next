import { useEffect, useState } from "react";

import Flex from "components/Flex";
import Logo from "components/Logo";
import NextImage from "next/image";
import Icon, { IconName } from "components/Icon";
import avatar from "./assets/avatar.png";
import AnimationScreens from "./AnimationScreens";
import { items } from "./constants";

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
      borderRadius="md"
      bg="#F1F3F5"
      ml={[0, 3]}
      overflow="hidden"
      boxShadow="0px 0px 24px rgba(0, 0, 0, 0.24)"
      mt={[5, 0]}
    >
      {/* SideBar */}
      <Flex
        flexDirection="column"
        bg="white"
        height="100%"
        width={168}
        borderRadius="4px 0 0 4px"
      >
        <Flex mt={3} mb={3} color="dark-purple" justifyContent="center">
          <Logo width={["86px", "100px"]} height={["20px", "24px"]} />
        </Flex>
        <Flex flexDirection="column" alignItems="flex-start" color="gray">
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
        {items.map((item, i) => {
          return (
            <Flex
              height={[34, 40]}
              key={item.name}
              //pauses and restarts animation on hover
              onMouseEnter={() => setAnimationPaused(true)}
              onMouseLeave={() => setAnimationPaused(false)}
              //sets this item as "current"
              onClick={() => setCurrentItem(i)}
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
      </Flex>
      {/* Main Window */}
      <Flex flexDirection="column" width="100%">
        {/* TopBar */}
        <TopBar application="Application" applicationNumber="1250" />
        {/* Central Screen */}
        {/* Sets the central screen to the index of the current item */}
        {AnimationScreens[currentItem]}
      </Flex>
    </Flex>
  );
};

export default ApplicationShell;

interface TopBarProps {
  application: string;
  applicationNumber: string;
}

const TopBar = ({ application, applicationNumber }: TopBarProps) => {
  return (
    <Flex height={60} mx={[4, 4]} borderBottom="1px solid #DBE2E6">
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        width={["28%", "40%"]}
      >
        <Flex
          fontSize={["text-md", "text-lg"]}
          pt={1}
          lineHeight="md"
          fontWeight="bold"
        >
          {application + "s"}
        </Flex>
        <Flex fontSize="text-sm" lineHeight="sm" color="gray">
          {applicationNumber + " total"}
        </Flex>
      </Flex>
      <Flex alignItems="center" justifyContent="center">
        <Flex
          width={["80%", "auto"]}
          borderRadius="sm"
          border="1px solid #512FC9"
          p={2}
          color="dark-purple"
          height="auto"
          fontSize="text-sm"
          fontWeight="bold"
          alignContent="center"
          lineHeight="14px"
          mx={2}
        >
          Add {application}
        </Flex>
      </Flex>

      <Flex alignItems="center" justifyContent="center" mx={[2, 3]}>
        <Icon name="bell" size="md" color="dark-gray" />
      </Flex>

      <Flex alignItems="center" justifyContent="center" mr={[3, 0]}>
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
      <Icon name={src} size="sm" color={selected ? "code" : "#D2DBDF"} />
      <Flex ml="12px" fontSize="text-sm">
        {infra}
      </Flex>
    </Flex>
  );
}
