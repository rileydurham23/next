import css from "@styled-system/css";
import BaseLink from "components/Link";

const Link = (props) => {
  return (
    <BaseLink
      {...props}
      color="light-purple"
      css={css({
        "&:hover, &:active, &:focus": {
          color: "dark-purple",
        },
      })}
    />
  );
};

export default Link;
