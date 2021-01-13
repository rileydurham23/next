import css from "@styled-system/css";
import Box from "components/Box";

const Table = (props) => {
  return (
    <Box
      as="table"
      width={1}
      my={4}
      boxShadow="0 1px 4px rgba(0,0,0,.24)"
      borderRadius="default"
      css={css({
        borderCollapse: "collapse",
        "& thead": {
          boxShadow: "0 1px 0 #D2DBDF",
        },
        "& tbody": {},
        "& th": {
          fontSize: "text-lg",
          lineHeight: "md",
          fontWeight: "bold",
          textAlign: "left",
          px: 3,
          py: 2,
        },
        "& td": {
          color: "darkest",
          fontSize: "text-lg",
          lineHeight: "md",
          px: 3,
          py: 2,
        },
        "& tbody tr:nth-child(even)": {
          bg: "lightest-gray",
        },
        "tr:last-child": {
          borderBottomLeftRadius: "default",
          borderBottomRightRadius: "default",
        },
      })}
      {...props}
    />
  );
};

export default Table;
