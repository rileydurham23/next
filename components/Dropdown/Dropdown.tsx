import { ReactNode } from "react";
import css from "@styled-system/css";
import styled from "styled-components";
import {
  ListboxInput,
  ListboxButton,
  ListboxPopover,
  ListboxList,
  ListboxOption,
} from "@reach/listbox";
import "@reach/listbox/styles.css";
import Box, { BoxProps } from "components/Box";
import { all, variant, transition } from "components/system";

type Variant = "light" | "dark";

interface StringOptions {
  options: string[];
  pickValue?: (item: string) => string;
  renderOption?: (option: string) => ReactNode;
}

interface ObjectOptions<T> {
  options: T[];
  pickValue: (item: T) => string;
  renderOption: (option: T) => ReactNode;
}

export type DropdownProps<T> = {
  onChange: (selected: string) => void;
  variant?: Variant;
  value?: string;
  icon?: ReactNode;
} & (StringOptions | ObjectOptions<T>) &
  BoxProps;

const echo = <T extends unknown>(thing: T): T => thing;

export function Dropdown<T>({
  value,
  icon,
  options,
  onChange,
  variant,
  renderOption = echo,
  pickValue = echo,
  ...props
}: DropdownProps<T>) {
  return (
    <Box {...props}>
      <StyledListboxInput value={value} onChange={onChange} variant={variant}>
        <StyledListboxButton arrow={icon} />
        <StyledListboxPopover>
          <ListboxList>
            {options.map((option) => {
              const value = pickValue(option);

              return (
                <StyledListboxOption key={value} value={value}>
                  {renderOption(option)}
                </StyledListboxOption>
              );
            })}
          </ListboxList>
        </StyledListboxPopover>
      </StyledListboxInput>
    </Box>
  );
}

const StyledListboxInput = styled(ListboxInput)<{ variant: Variant }>(
  css({
    display: "inline-flex",
    width: "100%",
    minHeight: ["32px", "36px"],
    border: "1px solid",
    borderColor: ["white", "transparent"],
    borderRadius: "default",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.32)",
    color: "white",
    cursor: "pointer",
    transition: transition([
      ["background", "interaction"],
      ["borderColor", "interaction"],
      ["color", "interaction"],
    ]),
    "&:focus-within, &:hover, &:active, &:focus": {
      borderColor: "white",
    },
  }),
  all,
  variant({
    variants: {
      dark: {
        color: "black",
        borderColor: ["transparent", "transparent"],
        "&:focus-within, &:focus, &:hover": {
          bg: "light-purple",
          borderColor: "light-purple",
          color: "white",
        },
      },
    },
  })
);

const StyledListboxButton = styled(ListboxButton)(
  css({
    display: "flex",
    alignItems: "center",
    fontSize: ["text-md", "text-sm"],
    fontWeight: "bold",
    lineHeight: "lg",
    cursor: "pointer",
    border: "none",
    px: 2,
    width: "100%",
    "&:focus": {
      outline: "none",
    },
    "& [data-reach-listbox-arrow]": {
      width: "16px",
      height: "16px",
      ml: 3,
      transition: transition([["transform", "interaction"]]),
      transform: "rotate(0deg)",
    },
    [`& [data-reach-listbox-arrow][data-expanded]`]: {
      transform: "rotate(180deg)",
    },
  }),
  all
);

const StyledListboxPopover = styled(ListboxPopover)(
  css({
    p: 0,
    border: "none",
    borderRadius: "sm",
    boxShadow: "0 4px 16px rgba(0,0,0,.24) !important",
    "&:focus-within": {
      outline: "none",
    },
  })
);

const StyledListboxOption = styled(ListboxOption)(
  css({
    fontSize: "text-md",
    fontWeight: "bold",
    lineHeight: "40px",
    px: 3,
    cursor: "pointer",
    transition: transition([["background", "interaction"]]),
    "&:hover, &:focus, &:active, &[aria-selected='true']": {
      color: "black",
      bg: "lightest-gray",
    },
    "&[data-current]": {
      bg: "lightest-gray",
      color: "dark-purple",
    },
    "&:first-child": {
      borderTopLeftRadius: "sm",
      borderTopRightRadius: "sm",
    },
    "&:last-child": {
      borderBottomLeftRadius: "sm",
      borderBottomRightRadius: "sm",
    },
  })
);
