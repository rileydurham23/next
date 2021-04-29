import { ChangeEvent, ReactNode, useCallback } from "react";
import css from "@styled-system/css";
import styled from "styled-components";
import Box, { BoxProps } from "components/Box";
import Icon from "components/Icon";
import { all, variant, transition, StyledSystemProps } from "components/system";

export interface CheckboxProps {
  checked: boolean;
  children?: ReactNode;
  onChange?: (value: boolean) => void;
}

export function Checkbox({
  checked,
  onChange,
  children,
  ...props
}: CheckboxProps & BoxProps) {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.checked);
    },
    [onChange]
  );

  return (
    <StyledWrapper {...props}>
      <Box
        as="input"
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        position="absolute"
        opacity="0"
        width={0}
        height={0}
      />
      <StyledSquare
        variant={checked ? "selected" : "unselected"}
        mr={children ? "2" : "0"}
      >
        <StyledIcon name="check" size="sm" opacity={checked ? 1 : 0} />
      </StyledSquare>
      {children}
    </StyledWrapper>
  );
}

type variant = "selected" | "unselected";

interface StyledWrapperProps extends StyledSystemProps {
  variant?: variant | variant[];
}

const StyledIcon = styled(Icon)<StyledWrapperProps>(
  css({
    color: "dark-purple",
    lineHeight: "sm",
    transition: transition([["opacity", "interaction"]]),
  })
);

const StyledSquare = styled("div")<StyledWrapperProps>(
  css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    width: 24,
    height: 24,
    border: "2px solid",
    backgroundColor: "white",
    transition: transition([
      ["borderColor", "interaction"],
      ["color", "interaction"],
    ]),
    borderRadius: "default",
  }),
  variant({
    variants: {
      selected: {
        borderColor: "dark-purple",
      },
      unselected: {
        borderColor: "light-gray",
      },
    },
  }),
  all
);

const StyledWrapper = styled("label")<StyledSystemProps>(
  css({
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    cursor: "pointer",
    transition: transition([
      ["opacity", "interaction"],
      ["color", "interaction"],
    ]),
    "&:focus-within, &:focus, &:hover": {
      outline: "none",
      color: "light-purple",
      [StyledSquare]: {
        borderColor: "light-purple",
        color: "light-purple",
      },
    },
    "&:active": {
      opacity: "0.56",
    },
  })
);
