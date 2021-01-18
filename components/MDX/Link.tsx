import css from "@styled-system/css";
import BaseLink from "components/Link";

const Link = (props) => {
  return (
    <BaseLink
      {...props}
      color="note"
      css={css({
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
