import { useCallback, MouseEvent } from "react";
import { BoxProps } from "components/Box";
import styled from "styled-components";
import { css, all, transition } from "components/system";

type Size = "sm" | "default";

const getSizeStyle = (size: Size) => {
  switch (size) {
    case "sm": {
      return {
        fontSize: "text-xs",
        lineHeight: "sm",
        px: 2,
      };
    }
    default:
      return {
        fonSize: "text-sm",
        lineHeight: "md",
        px: 3,
      };
  }
};

type TagsProps = {
  tags: string[];
  size?: Size;
} & BoxProps;

export function Tags({ tags, size, ...props }: TagsProps) {
  const handleClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const button = e.target as HTMLButtonElement;
    //TODO: in the next task
    console.log(button.innerText);
  }, []);

  return (
    <StyledUL {...props}>
      {tags.map((tag, index) => (
        <li key={index}>
          <StyledButton {...getSizeStyle(size)} onClick={handleClick}>
            {tag}
          </StyledButton>
        </li>
      ))}
    </StyledUL>
  );
}

const StyledUL = styled("ul")(
  css({
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    m: 0,
    p: 0,

    "& li + li": {
      ml: 3,
    },
  }),
  all
);

const StyledButton = styled("button")(
  css({
    borderWidth: "1px",
    borderColor: "lighter-gray",
    borderStyle: "solid",
    backgroundColor: "white",
    borderRadius: "default",
    cursor: "pointer",
    transition: transition([
      ["borderColor", "interaction"],
      ["color", "interaction"],
    ]),

    "&:hover, &:focus": {
      outline: "none",
      borderColor: "dark-purple",
      color: "dark-purple",
    },
  }),
  all
);
