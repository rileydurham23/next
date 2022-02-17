import styled from "styled-components";
import css from "@styled-system/css";

export interface CaseStudyTableProps {
  children: React.ReactNode;
}

export const CaseStudyTable = ({ children }: CaseStudyTableProps) => {
  return <StyledTable>{children}</StyledTable>;
};

const StyledTable = styled("table")(
  css({
    width: "100%",
    borderCollapse: "collapse",
    boxShadow: "0 1px 4px rgb(0, 0, 0, .24)",
    lineHeight: "md",
    mb: 5,
    thead: {
      tr: {
        backgroundColor: "dark-purple",
      },
      th: {
        py: 2,
        px: [1, 3],
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
        py: 3,
        px: [1, 3],
        fontSize: ["text-sm", "text-md"],
        verticalAlign: "top",
        overflowWrap: "break-word",
      },
      "ul > li": {
        fontSize: ["text-sm", "text-md"],
        px: [0, "auto"],
        listStylePosition: "outside",
      },
    },
  })
);
