import { variant } from "styled-system";
import styled from "styled-components";
import Flex, { FlexProps } from "components/Flex";
import { css, StyledSystemProps, transition } from "components/system";
import { CompanyId } from "components/Company";

type Props = {
  pages: CompanyId[];
  selected: number;
  onClick: (index: number) => void;
} & FlexProps;

export default function Pagination({
  pages,
  onClick,
  selected,
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
        <StyledDotItem
          key={i}
          aria-label={`Review ${i + 1} of ${pages.length}`}
        >
          <StyledDot onClick={() => onClick(i)} active={selected === i} />
        </StyledDotItem>
      ))}
    </Flex>
  );
}

const StyledDotItem = styled("li")(
  css({
    lineHeight: 0,
    "& + &": {
      ml: 2,
    },
  })
);

interface StyledDotProps extends StyledSystemProps {
  active?: boolean | boolean[];
}

const StyledDot = styled("button")<StyledDotProps>(
  css({
    position: "relative",
    height: "16px",
    width: "16px",
    m: 0,
    p: 2,
    border: "1px solid",
    borderColor: "gray",
    bg: "white",
    borderRadius: "circle",
    cursor: "pointer",
    transition: transition([
      ["borderColor", "interaction"],
      ["boxShadow", "interaction"],
    ]),
    "&:hover, &:focus": {
      borderColor: "light-purple",
      boxShadow: "1px 1px 3px #607D8B",
      outline: "none",
    },
    "&:hover::after, &:focus::after": { bg: "light-purple" },
    "&::after": {
      content: '""',
      left: "50%",
      top: "50%",
      transform: "translate3d(-50%, -50%, 0)",
      display: "block",
      height: "10px",
      width: "10px",
      bg: "gray",
      borderRadius: "circle",
      transition: transition([["backgroundColor", "interaction"]]),
    },
  }),
  variant({
    prop: "active",
    variants: {
      true: {
        borderColor: "dark-purple",
        "&::after": {
          bg: "dark-purple",
        },
      },
    },
  })
);
