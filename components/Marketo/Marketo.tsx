import styled from "styled-components";
import css from "@styled-system/css";
import { transition, StyledSystemProps } from "components/system";
import { useMarketo } from "utils/marketo";

interface MarketoProps {
  id: string;
}

export const Marketo = ({ id }: MarketoProps) => {
  const loaded = useMarketo({ formId: id });

  return <StyledFormFormWrapper id={`mktoForm_${id}`} loaded={loaded} />;
};

const StyledFormFormWrapper = styled("form")<
  StyledSystemProps & { loaded: boolean }
>(({ loaded }) =>
  css({
    width: "100% !important",
    p: "0 !important",
    opacity: loaded ? 1 : 0,
    transition: transition([["opacity", "interaction"]]),
    ".mktoButton": {
      alignItems: "center",
      justifyContent: "center",
      appearance: "none",
      bg: "dark-purple",
      border: "none",
      borderRadius: "default",
      boxSizing: "border-box",
      color: "white",
      cursor: "pointer",
      display: "inlineFlex",
      fontWeight: "black",
      fontSize: "text-sm",
      minHeight: "40px",
      mt: "16px !important",
      overflow: "hidden",
      px: 5,
      position: "relative",
      textDecoration: "none",
      textAlign: "center",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      transition: transition([["opacity", "interaction"]]),
    },
    ".mktoButton:hover, .mktoButton:focus": {
      opacity: 0.8,
    },
    ".mktoLabel": {
      float: "none !important" as "none",
      width: "auto !important",
      color: "black",
      display: "flex",
      fontSize: "text-sm",
      fontWeight: "bold",
      lineHeight: "24px !important",
      m: 0,
      mb: 2,
    },
    ".mktoButtonWrap": {
      m: "0 !important",
    },
    ".mktoFieldWrap, & .mktoFormCol": {
      float: "none !important" as "none",
    },
    ".mktoAsterix": {
      float: "none !important" as "none",
      order: 2,
    },
    "input[type=text], input[type=email], input[type=tel]": {
      width: "100% !important",
      p: "0 8px !important",
      border: "1px solid",
      borderColor: "light-gray",
      bg: "lightest-gray",
      boxSizing: "border-box",
      color: "darkest",
      display: "block",
      fontSize: "text-md",
      fontWeight: "regular",
      height: "40px !important",
      outline: "none",
      margin: "0 0 8px !important",
      borderRadius: "sm",
      transition: transition([
        ["borderColor", "interaction"],
        ["backgroundColor", "interaction"],
      ]),
      "&::placeholder": {
        color: "gray",
      },
    },
    ".mktoCheckboxList": {
      p: "0 !important",
      position: "relative",
      width: "100% !important",
    },
    "input[type=checkbox]": {
      appearance: "none",
      width: "24px !important",
      height: "24px !important",
      opacity: 0,
      position: "relative",
      zIndex: 10,
      "& + label::before": {
        content: '""',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "24px",
        height: "24px",
        position: "absolute",
        fontSize: "18px",
        top: 0,
        left: 0,
        color: "darkest",
        bg: "lightest-gray",
        border: "1px solid",
        borderColor: "light-gray",
        borderRadius: "sm",
        transition: transition([
          ["borderColor", "interaction"],
          ["backgroundColor", "interaction"],
        ]),
      },
      "&:hover + label::before": {
        borderColor: "light-blue",
      },
      "&:checked + label::before": {
        content: '"✓"',
      },
      "& + label": {
        marginLeft: "32px",
        fontSize: "text-sm",
        fontWeight: "bold",
        lineHeight: "24px !important",
      },
    },
    textarea: {
      border: "1px solid",
      borderColor: "light-gray",
      bg: "lightest-gray",
      color: "black",
      display: "block",
      fontWeight: "regular",
      lineHeight: "28px",
      minHeight: "112px",
      margin: "0 0 8px",
      width: "100% !important",
      padding: "8px !important",
      borderRadius: "default",
      transition: transition([
        ["borderColor", "interaction"],
        ["backgroundColor", "interaction"],
      ]),
    },
    "input:hover, input:focus, textarea:hover, textarea:focus": {
      borderColor: "light-blue",
    },
    ".mktoGutter, .mktoOffset": { display: "none" },
  })
);
