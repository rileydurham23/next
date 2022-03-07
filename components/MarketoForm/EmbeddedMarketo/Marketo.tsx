import styled from "styled-components";
import css from "@styled-system/css";
import Box from "components/Box";
import { transition, StyledSystemProps } from "../../system";
import { useMarketo } from "utils/marketo-utils";

interface MarketoProps {
  id: string;
}

export const Marketo = ({ id }: MarketoProps) => {
  const loaded = useMarketo({ formId: id });

  return (
    <>
      {!loaded && (
        <Box textAlign="center" p={4}>
          Loading...
        </Box>
      )}
      <StyledFormWrapper id={`mktoForm_${id}`} loaded={loaded} />
    </>
  );
};

const StyledFormWrapper = styled("form")<
  StyledSystemProps & { loaded: boolean }
>(({ loaded }) =>
  css({
    ".mktoForm": {
      //do not remove - see useMarketo
      visibility: "hidden",
    },
    ".mktoForm[data-styles-ready=true]": {
      //do not remove - see useMarketo
      visibility: "visible",
    },
    width: "100%",
    p: "0",
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
      fontSize: "text-lg",
      minHeight: "40px",
      mt: 3,
      overflow: "hidden",
      px: 5,
      position: "relative",
      textDecoration: "none",
      textAlign: "center",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      transition: transition([["opacity", "interaction"]]),
      width: "100%",
    },
    ".mktoButton:hover, .mktoButton:focus": {
      opacity: 0.8,
    },
    ".mktoLabel": {
      float: "none",
      width: "auto",
      color: "black",
      display: "flex",
      fontSize: "text-sm",
      fontWeight: "bold",
      lineHeight: 3,
      m: 0,
      mb: 2,
    },
    ".mktoButtonWrap": {
      m: 0,
    },
    ".mktoFieldWrap, & .mktoFormCol": {
      float: "none",
    },
    ".mktoAsterix": {
      float: "none",
      color: "red",
      ml: 1,
      order: 2,
    },
    "input[type=text], input[type=email], input[type=tel]": {
      width: "100%",
      p: "0 8px",
      border: "1px solid",
      borderColor: "light-gray",
      bg: "white",
      boxSizing: "border-box",
      boxShadow: "none",
      color: "darkest",
      display: "block",
      fontSize: "text-md",
      fontWeight: "regular",
      height: "40px",
      outline: "none",
      margin: "0 0 8px",
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
      p: 0,
      ml: 5,
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "max-content",
    },
    "input[type=checkbox]": {
      appearance: "none",
      width: 0,
      height: 0,
      opacity: 0,
      position: "relative",
      zIndex: 10,
      "& + label": {
        ml: 5,
        fontSize: "text-lg",
        lineHeight: "md",
      },
      "& + label::before": {
        content: '""',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "24px",
        height: "24px",
        position: "absolute",
        fontSize: "text-xl",
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
      width: "100%",
      padding: "8px",
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
