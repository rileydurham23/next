import css from "@styled-system/css";
import Box from "components/Box";
import Link from "components/Link";

export interface HeaderMeta {
  rank: number;
  id: string;
  title: string;
}

interface AnchorNavigationProps {
  headers: HeaderMeta[];
}

const AnchorNavigation = ({ headers }: AnchorNavigationProps) => {
  return (
    <Box width="240px" p={4} flexShrink={0} position="sticky" top="0">
      <Box
        text="text-sm"
        py={1}
        fontWeight="bold"
        color="darkest"
        borderBottom="1px solid"
        borderColor="lightest-gray"
      >
        Table of Contents
      </Box>
      {headers.map(({ id, title }) => {
        return (
          <Box key={id} pt={2}>
            <Link
              href={`#${id}`}
              fontSize="text-sm"
              lineHeight="sm"
              textDecoration="none"
              color="dark-gray"
              css={css({
                "&:focus, &:hover": {
                  color: "dark-purple",
                },
                "& + &": {
                  mt: 2,
                },
              })}
            >
              {title}
            </Link>
          </Box>
        );
      })}
    </Box>
  );
};

export default AnchorNavigation;
