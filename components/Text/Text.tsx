/* 
  Dependencies 
*/
import styled from "styled-components";
import css from "@styled-system/css";
import { all } from "components/system";

/* 
  Text Components 
  
  @description Semantic & SEO friendly base text components that are used throughout the website  
  @param all - These components are overload with "all" from styled system. 
               You can use properties to help with additional positioning and colors (ex. mb={5})

  @components - H1, H2, H3, H4, H5, P, UL, OL, LI, TABLE
*/

/* 
  DIRECTIONS FOR EDITING 
  ----------------------

  const H1 = styled("h1")(
    // THIS SECTION PROVIDE ACCESS TO STYLED SYSTEM THEME VALUES
    css({
      mt: 2,
      mb: 5,
      fontSize: "header-1",
      fontWeight: "black",
      lineHeight: "xl",
      color: "black",
    }),

    // OVERLOADS ELEMENT WITH ADDITION PROPS FOR SPACING/COLOR/ETC
    all, 
    // YOU CAN ADD STYLED COMPONENT CSS HERE, WRITTEN LIKE NORMAL CSS AND CAN LEVER FUNCTIONS
    `
    color: red;  
    // THIS FUNCTION IS PASSED PROPS AND YOU RETURN CSS VALUES IF NEEDED
    ${someFunction}
    `
  )

  // YOU ALSO HAVE THE OPTION OF OVERLOADING A COMPONENT AS YOU SEE BELOW
  export function H3(props) {
    return (
      <Header
        as="h3"
        fontSize={["header-4", "header-3"]}
        lineHeight={["md", "lg"]}
        fontWeight="bold"
        mt={3}
        mb={2}
        {...props}
      />
    );
  }
*/

/* 
  H1 - SHOULD ONLY BE USED ONCE PER PAGE MAX (USED IN HERO)
*/
const H1 = styled("h1")(
  css({
    m: 0,
    fontSize: "hero-header",
    fontWeight: "black",
    lineHeight: "hero-header",
    color: "black",
  }),
  all
);

/* 
  H2 - GENERAL HEADLINE USED THROUGHOUT PAGES ON THE SITE 
*/
const H2 = styled("h2")(
  css({
    mt: 0,
    mb: 2,
    fontSize: "header-1",
    fontWeight: "black",
    lineHeight: "xxl",
    color: "black",
    "&:last-child": {
      mb: 0,
    },
  }),
  all
);

/* 
  H3 - A SUBTITLE GENERALLY USED ABOVE H2 TAGS TO ADD ADDITIONAL CONTEXT 
*/
const H3 = styled("h3")(
  css({
    mt: 0,
    mb: 5,
    fontSize: "text-xl",
    fontWeight: "bold",
    lineHeight: "lg",
    color: "dark-purple",
  }),
  all
);

const H4 = styled("h4")(
  css({
    mt: 0,
    mb: 2,
    fontSize: "text-lg",
    fontWeight: "bold",
    lineHeight: "lg",
    color: "black",
  }),
  all
);

const H5 = styled("h5")(
  css({
    my: 2,
    fontSize: "text-lg",
    fontWeight: "bold",
    lineHeight: "lg",
    color: "black",
    "&:last-child": {
      mb: 0,
    },
  }),
  all
);

/* 
  P - STADARD PARAGRAPH ELEMENT USED FOR BLOCKS OF TEXT
*/
const P = styled("p")(
  css({
    color: "darkest",
    mt: 0,
    mb: 3,
    lineHeight: "lg",
    fontSize: "text-xl",
    "&:last-child": {
      mb: 0,
    },
  }),
  all
);
/* 
  SMALL - SMALL TEXT PARAGRAPH ELEMENT USED FOR BLOCKS OF TEXT
*/
const SMALL = styled("p")(
  css({
    color: "darkest",
    mt: 0,
    mb: 3,
    lineHeight: "md",
    fontSize: "text-lg",
    "&:last-child": {
      mb: 0,
    },
  }),
  all
);

/* 
  UL - STADARD UNORDERD LIST ELEMENT (BULLET LIST)
*/
const UL = styled("ul")(
  css({
    mt: 0,
    mb: 3,
    pl: 4,
    "&:last-child": {
      mb: 0,
    },
  }),
  all
);

/* 
  UL - STADARD ORDERD LIST ELEMENT (NUMBERED LIST)
*/
const OL = styled("ol")(
  css({
    mt: 0,
    mb: 3,
    pl: 4,
    "&:last-child": {
      mb: 0,
    },
  }),
  all
);

/* 
  LI - INDIVIDUAL LIST ITEMS USED IN OL/UL LISTS
*/
const LI = styled("li")(
  css({
    fontSize: ["text-lg", "text-lg"],
    mb: 2,
    "&:last-child": {
      mb: 0,
    },
  }),
  all
);

/* 
  Table - TABLE ELEMENT USED FOR TABULAR DATA
*/
const Table = styled("table")(
  css({
    width: "100%",
    borderCollapse: "collapse",
    boxShadow: "0 1px 4px rgb(0, 0, 0, .24)",
    lineHeight: "md",
    mb: 5,
    "&:last-child": {
      mb: 0,
    },
    thead: {
      tr: {
        backgroundColor: "dark-purple",
      },
      th: {
        py: 2,
        px: 3,
        fontSize: "text-sm",
        textTransform: "uppercase",
        whiteSpace: ["auto", "nowrap"],
        color: "white",
        textAlign: "left",
      },
    },
    tbody: {
      "tr:nth-child(2n)": {
        bg: "lightest-gray",
      },
      td: {
        p: 3,
        fontSize: "text-md",
        verticalAlign: "top",
      },
      "ul > li": {
        fontSize: "text-md",
      },
    },
  }),
  all
);

export { H1, H2, H3, H4, H5, P, SMALL, UL, OL, LI, Table };
