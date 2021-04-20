import css from "@styled-system/css";
import BaseLink from "components/Link";
import { transition } from "components/system";

const Link = (props) => {
  return (
    <BaseLink
      {...props}
      color="note"
      css={css({
        transition: transition([["color", "interaction"]]),
        "&:visited": {
          color: "dark-purple",
        },
        "&:hover, &:active, &:focus": {
          color: "light-purple",
        },
      })}
    />
  );
};

export default Link;
