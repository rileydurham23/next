import { useEffect, ComponentProps } from "react";
import styled from "styled-components";
import {
  css,
  media,
  wrapper,
  StyledSystemWrapperProps,
} from "components/system";
import Box from "components/Box";
import Icon from "components/Icon";

interface SearchProps {
  id?: string;
}

const Search = ({
  id = "search",
  ...props
}: SearchProps & ComponentProps<typeof StyledWrapper>) => {
  // docsearch.js is using "window" inside, so it will break ssr if we import it directly
  useEffect(() => {
    import("docsearch.js").then(({ default: docsearch }) => {
      docsearch({
        apiKey: process.env.NEXT_PUBLIC_DOCSEARCH_API_KEY,
        indexName: "goteleport",
        inputSelector: `[data-docsearch-input="${id}"]`,
        debug: false,
        layout: "simple",
      });
    });
  }, []);

  return (
    <StyledWrapper {...props}>
      <Icon
        name="magnify"
        color="gray"
        mx="6px"
        flex="0 0 24px"
        display={["none", "block"]}
      />
      <Box flex="1 1 auto" position="relative">
        <StyledInput
          type="text"
          placeholder="Search docs..."
          data-docsearch-input={id}
        />
      </Box>
    </StyledWrapper>
  );
};

export default Search;

const StyledWrapper = styled("div")<StyledSystemWrapperProps>(
  css({
    width: ["auto", "200px"],
    bg: "white",
    display: "flex",
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "stretch",
    height: "32px",
    border: "1px solid",
    borderColor: "light-gray",
    borderRadius: "default",
    "&:focus-within": {
      borderColor: "dark-purple",
    },
  }),
  media("sm", {
    borderRadius: "circle",
  }),
  wrapper
);

const StyledInput = styled("input")(
  css({
    display: "block",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: ["auto", "162px"],
    fontSize: ["text-xl", "text-md"],
    lineHeight: "30px",
    color: "black",
    bg: "transparent",
    py: 0,
    px: [3, 0],
    border: "none",
    "&:placeholder": {
      color: "gray",
    },
    "&:focus": {
      outline: "none",
    },
  })
);
