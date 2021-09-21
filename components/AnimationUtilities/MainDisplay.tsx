import styled from "styled-components";
import css from "@styled-system/css";
import NextImage from "next/image";
import Flex, { FlexProps } from "components/Flex";
import { green_check, error, play, rain, sun } from "./assets";

interface BarProps {
  bg: string;
}
const Bar = ({ bg, ...props }: BarProps & FlexProps) => {
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

const grayBar = <Bar bg="#E2E2E3" width="100%" />;
const blueBar = <Bar bg="#B2C2DB" width="100%" />;
const darkBar = <Bar bg="#C8C8CA" width="100%" />;

export const MainDisplay = () => {
  return (
    <>
      <DisplayRow
        icon1="gray"
        icon2="gray"
        icon3="gray"
        icon4="gray"
        icon6="gray"
        playIcon={false}
        height="15px"
        borderBottom="1px solid #A9D4FF"
        mr={2}
        backgroundColor="#F2F2F4"
      />
      <DisplayRow icon1="red" icon2="rain" playIcon={true} height="30px" />
      <DisplayRow
        icon1="none"
        icon2="sun"
        playIcon={false}
        bg="#F2F2F4"
        height="30px"
      />
      <DisplayRow icon1="green" icon2="sun" playIcon={true} height="30px" />
      <DisplayRow
        icon1="green"
        icon2="sun"
        playIcon={true}
        bg="#F2F2F4"
        height="30px"
      />
    </>
  );
};
interface DisplayRowProps {
  icon1?: string;
  icon2: string;
  icon3?: string;
  icon4?: string;
  icon6?: string;
  playIcon: boolean;
  bg?: string;
}
const DisplayRow = ({
  icon1,
  icon2,
  icon3 = "blue",
  icon4 = "dark",
  icon6 = "dark",
  playIcon,
  bg = "#FFFFFFF",
  ...props
}: DisplayRowProps & FlexProps) => {
  const greenCheck = (
    <NextImage
      src={green_check}
      alt="status indicator"
      height={20}
      width={20}
    />
  );
  const redError = (
    <NextImage src={error} alt="status indicator" height={20} width={20} />
  );
  const sunshine = (
    <NextImage src={sun} alt="status indicator" height={20} width={20} />
  );
  const raincloud = (
    <NextImage src={rain} alt="status indicator" height={20} width={20} />
  );

  const sorter = {
    green: greenCheck,
    red: redError,
    gray: grayBar,
    blue: blueBar,
    dark: darkBar,
    sun: sunshine,
    rain: raincloud,
  };

  return (
    <Flex flexDirection="row" backgroundColor={bg} width="95%" {...props}>
      <Container width="40px">{sorter[icon1]}</Container>
      <Container width="40px">{sorter[icon2]}</Container>
      <Container width="40px">{icon3 && sorter[icon3]} </Container>
      <Container width="80px">{icon4 && sorter[icon4]} </Container>
      <Container width="30px" flexShrink={3} />
      <Container width="70px">{icon6 && sorter[icon6]}</Container>
      <Container width="50px">
        {playIcon && (
          <NextImage src={play} alt="status indicator" height={20} width={20} />
        )}
      </Container>
    </Flex>
  );
};

const Container = styled(Flex)(
  css({
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  })
);
const Navline = styled(Flex)(
  css({
    height: "6px",
    borderRadius: "md",
    mx: 2,
  })
);
