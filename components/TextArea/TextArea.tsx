import styled from "styled-components";
import css from "@styled-system/css";
import { transition } from "components/system";

export const TextArea = ({ ...props }) => {
  return <StyledTextarea {...props} />;
};

const StyledTextarea = styled("textarea")(
  css({
    fontFamily: "inherit",
    border: "1px solid",
    borderColor: "light-gray",
    bg: "white",
    color: "black",
    display: "block",
    fontWeight: "regular",
    lineHeight: "28px",
    width: "100%",
    boxSizing: "border-box",
    px: 2,
    py: 1,
    borderRadius: "default",
    resize: "none",
    transition: transition([
      ["borderColor", "interaction"],
      ["backgroundColor", "interaction"],
    ]),
    "&:focus": {
      borderColor: "light-purple",
      outline: "none",
    },
    "&:disabled": {
      bg: "lightest-gray",
      color: "gray",
    },
  })
);
