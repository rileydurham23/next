import { ReactNode } from "react";
import styled from "styled-components";
import css from "@styled-system/css";
import { StyledSystemProps, all } from "components/system";
import { variant } from "styled-system";
import Heading from "components/Heading";
import Box, { BoxProps } from "components/Box";
import Icon, { IconName } from "components/Icon";
import { Centrator } from "components/Layout";
import terminalUrl from "./assets/terminal.png";
import waveUrl from "./assets/wave.png";

const waveBg = `url(${waveUrl}) -477px 73px no-repeat`;
const terminalBg = `url(${terminalUrl}) right center no-repeat`;

type Child = React.ReactElement<typeof ListItem>;
type Size = "sm" | "md";

export type Props = {
  children: Child | Array<Child>;
  description: ReactNode;
  grid?: boolean;
  hideImage?: boolean;
  title?: string;
  subtitle?: string;
} & BoxProps;

function List({
  title,
  subtitle,
  description,
  hideImage = false,
  grid = false,
  children,
  ...props
}: Props) {
  const noImage = grid || hideImage;
  return (
    <Box
      as="section"
      background={waveBg}
      pt={[5, 10]}
      pb={[6, 11]}
      width="100%"
      {...props}
    >
      <Centrator flexDirection="column">
        <Heading title={title} subtitle={subtitle} />
        {description}
        <Box
          background={noImage ? undefined : ["none", "none", terminalBg]}
          backgroundSize={noImage ? undefined : ["", "", "384px 320px"]}
          mt={grid ? [0, 5] : 0}
        >
          <StyledUL grid={[false, grid]}>{children}</StyledUL>
        </Box>
      </Centrator>
    </Box>
  );
}

type ListItemProps = {
  children: ReactNode;
  size?: Size;
  icon?: IconName;
  src?: string;
} & BoxProps;

export function ListItem({
  children,
  src,
  icon,
  size = "md",
  ...props
}: ListItemProps) {
  const iconSize = size === "md" ? "40px" : "32px";
  return (
    <StyledItem {...props}>
      {(icon || src) && (
        <StyledIconWrapper width={iconSize} height={iconSize}>
          {icon ? (
            <Icon
              name={icon}
              size={size === "md" ? "xl" : "lg"}
              color="dark-purple"
            />
          ) : (
            <Box as="img" src={src} width="100%" height="100%" />
          )}
        </StyledIconWrapper>
      )}
      <StyledContentWrapper size={size}>{children}</StyledContentWrapper>
    </StyledItem>
  );
}

List.Item = ListItem;

export default List;

const StyledIconWrapper = styled(Icon)(
  css({
    position: "absolute",
    left: 0,
    top: 0,
  }),
  all
);

interface WrapperProps extends StyledSystemProps {
  size?: Size | Size[];
}

const StyledContentWrapper = styled("div")<WrapperProps>(
  css({
    "> h3": {
      fontSize: "header-4",
      fontWeight: "bold",
      lineHeight: "40px",
      m: 0,
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
  }),
  variant({
    prop: "size",
    variants: {
      sm: {
        "> h3": {
          color: "dark-gray",
          fontSize: "text-lg",
          lineHeight: "md",
        },
        "> p": {
          color: "dark-gray",
          lineHeight: "md",
        },
      },
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
  }),
  all
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
