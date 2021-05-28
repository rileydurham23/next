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

export interface Props {
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
    <Box
      as="section"
      background={waveBg}
      pt={[5, 10]}
      pb={[6, 11]}
      width="100%"
    >
      <Centrator flexDirection="column">
        <Heading title={title} subtitle={subtitle} />
        <Box
          background={grid ? undefined : ["none", "none", terminalBg]}
          backgroundSize={grid ? undefined : ["", "", "384px 320px"]}
          mt={grid ? [0, 5] : 0}
        >
          <StyledUL grid={[false, grid]}>{children}</StyledUL>
        </Box>
      </Centrator>
    </Box>
  );
}

interface ListItemProps {
  children: ReactNode;
  icon?: IconName;
  src?: string;
}

export function ListItem({ children, src, icon }: ListItemProps) {
  return (
    <StyledItem>
      {(icon || src) && (
        <StyledIconWrapper>
          {icon ? (
            <Icon name={icon} size="xl" />
          ) : (
            <Box as="img" src={src} width="100%" height="100%" />
          )}
        </StyledIconWrapper>
      )}
      <StyledContentWrapper>{children}</StyledContentWrapper>
    </StyledItem>
  );
}

const StyledIconWrapper = styled(Icon)(
  css({
    position: "absolute",
    left: 0,
    top: 0,
    width: "40px",
    height: "40px",
  })
);

const StyledContentWrapper = styled("div")<StyledSystemProps>(
  css({
    "> h3": {
      fontSize: "header-4",
      fontWeight: "bold",
      m: 0,
      lineHeight: "40px",
      mb: "-40px",
      "> a": {
        display: "none !important",
      },
    },
    "> p": {
      fontSize: "text-lg",
      lineHeight: "28px",
      color: "darkest",
      m: 0,
      mt: 8,
    },
  })
);

const StyledItem = styled("li")(
  css({
    position: "relative",
    boxSizing: "border-box",
    display: "flex",
    mt: 7,
    [`${StyledIconWrapper} + ${StyledContentWrapper} > h3`]: {
      ml: "52px",
    },
    [`${StyledIconWrapper} + ${StyledContentWrapper} > p`]: {
      ml: "52px",
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
        [StyledIconWrapper]: {
          left: "40px",
        },
        [StyledItem]: {
          width: "33%",
          mt: 0,
          pl: 6,
          "&:nth-child(3n+1)": {
            pl: 0,
            [StyledIconWrapper]: {
              left: 0,
            },
          },
          "&:nth-child(n + 4)": {
            mt: 6,
          },
          [`${StyledIconWrapper} + ${StyledContentWrapper} > p`]: { ml: 0 },
        },
      },
    },
  })
);
