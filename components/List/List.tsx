import { ReactNode } from "react";
import styled from "styled-components";
import css from "@styled-system/css";
import { StyledSystemProps } from "components/system";
import { variant } from "styled-system";
import Heading from "components/Heading";
import Box from "components/Box";
import Icon, { IconName } from "components/Icon";
import { Centrator } from "components/Layout";
import terminalUrl from "./assets/terminal.png";
import waveUrl from "./assets/wave.png";

const waveBg = `url(${waveUrl}) -477px 73px no-repeat`;
const terminalBg = `url(${terminalUrl}) right center no-repeat`;

type Child = React.ReactElement<typeof ListItem>;

interface Props {
  children: Child | Array<Child>;
  grid?: boolean;
  title?: string;
  subtitle?: string;
}

export default function List({
  title,
  subtitle,
  grid = false,
  children,
}: Props) {
  return (
    <Box as="section" background={waveBg} pt={[5, 10]} pb={[6, 11]}>
      <Centrator flexDirection="column">
        <Heading title={title} subtitle={subtitle} />
        <Box
          background={grid ? undefined : ["none", "none", terminalBg]}
          backgroundSize={grid ? undefined : ["", "", "384px 320px"]}
        >
          <StyledUL grid={grid}>{children}</StyledUL>
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
    <StyledItem>
      {icon && <StyledIcon name={icon} size="xl" />}
      <StyledContentWrapper>{children}</StyledContentWrapper>
    </StyledItem>
  );
}

const StyledIcon = styled(Icon)(css({ flexShrink: 0, mr: 4 }));

const StyledItem = styled("li")(css({ display: "flex", mt: 7 }));

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

interface ULProps extends StyledSystemProps {
  grid?: boolean | boolean[];
}

const StyledUL = styled("ul")<ULProps>(
  css({
    listStyle: "none",
    m: 0,
    p: 0,
    maxWidth: ["100%", "100%", "60%"],
  }),
  variant({
    prop: "grid",
    variants: {
      true: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        maxWidth: ["100%", "100%", "100%"],
        [StyledItem]: {
          width: "33%",
        },
      },
    },
  })
);
