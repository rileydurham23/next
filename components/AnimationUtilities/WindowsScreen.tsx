import styled from "styled-components";
import css from "@styled-system/css";
import NextImage from "next/image";
import Flex from "components/Flex";
import Grid from "components/Grid";
import {
  windows,
  desktop1,
  desktop2,
  desktop3,
  desktop4,
  desktop5,
  desktop6,
  desktop7,
} from "./assets";

export const WindowsScreen = () => {
  return (
    <Flex width="100%" height={276} flexDirection="column">
      {/* Screen */}
      <Screen flexDirection="row" height="100%">
        {/* Icons */}
        <Flex width={["40%", "30%"]} flexShrink={0} alignItems="center">
          <Grid
            gridTemplateColumns="1fr 1fr"
            gridTemplateRows="repeat(4, 1fr)"
            justifyItems="center"
            alignItems="center"
            width="100%"
            maxHeight="100%"
            gridRowGap="4px"
          >
            <NextImage src={desktop7} alt="icon" height="44px" width="44px" />
            <NextImage src={desktop5} alt="icon" height="44px" width="44px" />
            <NextImage src={desktop6} alt="icon" height="44px" width="44px" />
            <NextImage src={desktop1} alt="icon" height="44px" width="44px" />
            <NextImage src={desktop3} alt="icon" height="44px" width="44px" />
            <NextImage src={desktop4} alt="icon" height="44px" width="44px" />
            <NextImage src={desktop2} alt="icon" height="44px" width="44px" />
          </Grid>
        </Flex>
        {/* Big Logo */}
        <Flex
          width={["60%", "70%"]}
          justifyContent="center"
          alignItems="center"
          ml={[6, 10]}
        >
          <Flex justifyContent="center" alignItems="center">
            <BigWindows />
          </Flex>
        </Flex>
      </Screen>
      {/* Bottom Tray */}
      <Flex width="100%" height="40px" bg="#C2D8EB">
        {/* Left Section of Tray */}
        <Flex justifyContent="flex-start" alignItems="center" width="50%">
          <Flex p={1} background="#E1ECF5">
            <WindowsBox>
              <NextImage
                src={windows}
                alt="windows logo"
                layout="fill"
                objectFit="contain"
              />
            </WindowsBox>
          </Flex>
          <IconBox />
          <IconBox />
          <IconBox />
          <IconBox display={["none", "flex"]} />
          <IconBox display={["none", "flex"]} />
          <IconBox />
        </Flex>
        {/* Right Section of Tray */}
        <Flex justifyContent="flex-end" alignItems="center" width="50%">
          <IconBox />
          <IconBox />
          <IconBox display={["none", "flex"]} />
          <IconBox mr={3} />
        </Flex>
      </Flex>
    </Flex>
  );
};

const Screen = styled(Flex)(
  css({
    background: "linear-gradient(70deg, #0545C4, #01ADFF)",
  })
);

const WindowsBox = styled(Flex)({
  height: "26px",
  width: "26px",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
});

const IconBox = styled(Flex)(
  css({
    height: "16px",
    width: "20px",
    borderRadius: "sm",
    background: "#EDF3F9",
    ml: "12px",
  })
);

const BigWindows = () => {
  return (
    <Grid
      gridTemplateColumns="1fr 1fr"
      gridTemplateRows="1fr 1fr"
      gridGap="4px 4px"
      justifyItems="center"
      alignItems="center"
    >
      <Flex
        background="#4DA8EE"
        borderBottom="1px solid #3BB8F0"
        borderLeft="1px solid #3BB8F0"
        borderTop="1px solid #03D6FA"
        borderRight="1px solid #03D6FA"
        height={["50px", "70px"]}
        width={["50px", "70px"]}
      />
      <Flex
        background="#4DA8EE"
        borderBottom="1px solid #03D6FA"
        borderLeft="1px solid #03D6FA"
        borderTop="1px solid #00FFFF"
        borderRight="1px solid #00FFFF"
        height={["50px", "70px"]}
        width={["50px", "70px"]}
      />
      <Flex
        background="#4DA8EE"
        borderLeft="1px solid #3BB8F0"
        borderBottom="1px solid #3BB8F0"
        borderTop="1px solid #3BB8F0"
        borderRight="1px solid #3BB8F0"
        height={["50px", "70px"]}
        width={["50px", "70px"]}
      />
      <Flex
        background="#4DA8EE"
        borderBottom="1px solid #3BB8F0"
        borderLeft="1px solid #3BB8F0"
        borderTop="1px solid #03D6FA"
        borderRight="1px solid #03D6FA"
        height={["50px", "70px"]}
        width={["50px", "70px"]}
      />
    </Grid>
  );
};
