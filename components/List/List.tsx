import { ReactNode } from "react";
import styled from "styled-components";
import css from "@styled-system/css";
import { StyledSystemProps } from "components/system";
import Heading from "components/Heading";
import Box from "components/Box";
import Flex from "components/Flex";
import Icon, { IconName } from "components/Icon";
import { Centrator } from "components/Layout";
import terminalUrl from "./assets/terminal.png";
import waveUrl from "./assets/wave.png";

const waveBg = `url(${waveUrl}) -477px 73px no-repeat`;
const terminalBg = `url(${terminalUrl}) right center no-repeat`;

type Child = React.ReactElement<typeof ListItem>;

interface Props {
  title: string;
  children: Child | Array<Child>;
  subtitle?: string;
}

export default function List({ title, subtitle, children }: Props) {
  return (
    <Box as="section" background={waveBg} pt="10" pb="11">
      <Centrator flexDirection="column">
        <Heading title={title} subtitle={subtitle} />
        <Box
          background={["none", "none", terminalBg]}
          backgroundSize={["", "", "384px 320px"]}
        >
          <Box as="ul" listStyle="none" maxWidth={["100%", "100%", "60%"]}>
            {children}
          </Box>
        </Box>
      </Centrator>
    </Box>
  );
}

interface ListItemProps {
  children: ReactNode;
  icon?: IconName;
}

export function ListItem({ children, icon }: ListItemProps) {
  return (
    <Flex mt="7">
      {icon && <StyledIcon name={icon} size="xl" />}
      <StyledContentWrapper>{children}</StyledContentWrapper>
    </Flex>
  );
}

const StyledIcon = styled(Icon)(css({ flexShrink: 0, mr: 4 }));

const StyledContentWrapper = styled("div")<StyledSystemProps>(
  css({
    "> h2": {
      fontSize: "header-4",
      lineHeight: "20px",
      fontWeight: "bold",
      "> a": {
        display: "none !important",
      },
    },
    "> p": {
      fontSize: "text-xl",
      lineHeight: "lg",
      m: 0,
      mt: 3,
    },
  })
);
