import { variant } from "styled-system";
import styled from "styled-components";
import Box from "components/Box";
import Flex, { FlexProps } from "components/Flex";
import { css, StyledSystemProps, transition } from "components/system";
import { CompanyId } from "components/Company";

type Props = {
  pages: CompanyId[];
  selected: number;
  dark?: boolean;
  onClick: (index: number) => void;
} & FlexProps;

export default function Pagination({
  pages,
  onClick,
  selected,
  dark = false,
  ...props
}: Props) {
  return (
    <Flex
      as="ul"
      m="0"
      p="0"
      listStyle="none"
      width="100%"
      justifyContent="center"
      {...props}
    >
      {pages.map((_, i) => (
        <Box
          as="li"
          lineHeight={0}
          key={i}
          aria-label={`Review ${i + 1} of ${pages.length}`}
        >
          <StyledDot
            onClick={() => onClick(i)}
            active={selected === i}
            dark={dark}
          />
        </Box>
      ))}
    </Flex>
  );
}
interface StyledDotProps extends StyledSystemProps {
  active?: boolean | boolean[];
  dark?: boolean | boolean[];
}

const StyledDot = styled("button")<StyledDotProps>(
  css({
    position: "relative",
    height: "24px",
    width: "24px",
    m: 0,
    p: 2,
    bg: "transparent",
    border: "none",
    cursor: "pointer",
    "&:hover, &:focus": {
      outline: "none",
    },
    "&:hover::after, &:focus::after": { opacity: 1 },
    "&::after": {
      content: '""',
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate3d(-50%, -50%, 0)",
      display: "block",
      height: "10px",
      width: "10px",
      boxShadow: "1px 1px 3px #607D8B",
      borderRadius: "circle",
      opacity: 0.32,
      transition: transition([["opacity", "interaction"]]),
    },
  }),
  variant({
    prop: "active",
    variants: {
      true: {
        "&::after": {
          opacity: 1,
        },
      },
    },
  }),
  variant({
    prop: "dark",
    variants: {
      true: {
        "&::after": {
          bg: "white",
        },
      },
      false: {
        "&::after": {
          bg: "dark-purple",
        },
      },
    },
  })
);
