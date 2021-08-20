import styled from "styled-components";
import css from "@styled-system/css";
import { transition } from "components/system";

export const Input = ({ ...props }) => {
  return <StyledInput {...props} />;
};

export const StyledInput = styled("input")(
  css({
    flexGrow: 1,
    px: 2,
    border: "1px solid",
    borderColor: "light-gray",
    bg: "white",
    boxSizing: "border-box",
    color: "darkest",
    display: "block",
    fontSize: "text-md",
    fontWeight: "regular",
    height: "40px",
    outline: "none",
    borderRadius: "default",
    transition: transition([
      ["borderColor", "interaction"],
      ["backgroundColor", "interaction"],
    ]),
    "&::placeholder": {
      color: "gray",
    },
    "&:focus": {
      borderColor: "light-purple",
    },
    "&:disabled": {
      bg: "lightest-gray",
      color: "gray",
    },
  })
);
