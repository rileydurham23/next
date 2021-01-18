import { useRouter } from "next/router";
import { useState, useCallback } from "react";
import styled from "styled-components";
import css from "@styled-system/css";
import Box from "components/Box";
import HeadlessButton from "components/HeadlessButton";
import Link from "components/Link";
import Icon, { IconName } from "components/Icon";

export interface NavigationItem {
  title: string;
  slug: string;
}

export interface NavigationCategory {
  icon: IconName;
  title: string;
  entries: NavigationItem[];
}

interface DocNavigationCategoryProps extends NavigationCategory {
  id: number;
  opened: boolean;
  onToggleOpened: (value: number) => void;
}

const DocNavigationCategory = ({
  id,
  opened,
  onToggleOpened,
  icon,
  title,
  entries,
}: DocNavigationCategoryProps) => {
  const router = useRouter();
  const toggleOpened = useCallback(() => onToggleOpened(opened ? null : id), [
    opened,
  ]);

  return (
    <Box key={title}>
      <CategoryButton active={opened} onClick={toggleOpened}>
        <Icon name={icon} ml="12px" mr={2} />
        <Box text="text-md">{title}</Box>
      </CategoryButton>
      {opened && (
        <Box
          bg="lightest-gray"
          px={2}
          py={1}
          boxShadow="inset 0 1px 2px rgba(0, 0, 0, 0.24)"
        >
          {entries.map(({ title, slug }) => (
            <NavigationLink
              href={slug}
              active={slug === `${router.asPath}/`}
              key={slug}
            >
              {title}
            </NavigationLink>
          ))}
        </Box>
      )}
    </Box>
  );
};

export const getCurrentCategoryIndex = (
  categories: NavigationCategory[],
  href: string
) => {
  const index = categories.findIndex(({ entries }) =>
    entries.some(({ slug }) => slug === `${href}/`)
  );

  return index !== -1 ? index : null;
};

interface DocNavigationProps {
  data: NavigationCategory[];
}

const DocNavigation = ({ data }: DocNavigationProps) => {
  const router = useRouter();
  const [openedId, setOpenedId] = useState<number>(
    getCurrentCategoryIndex(data, router.asPath)
  );

  return (
    <Box
      width="240px"
      height="100%"
      borderRight="1px solid"
      borderColor="lightest-gray"
      overflow="auto"
    >
      <Box>
        {data.map((props, index) => (
          <DocNavigationCategory
            key={index}
            id={index}
            opened={index === openedId}
            onToggleOpened={setOpenedId}
            {...props}
          />
        ))}
      </Box>
    </Box>
  );
};

export default DocNavigation;

const CategoryButton = styled(HeadlessButton)(
  ({ active }: { active?: boolean }) =>
    css({
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: "56px",
      borderBottom: "1px solid",
      borderBottomColor: "lightest-gray",
      borderLeft: "4px solid",
      borderLeftColor: active ? "light-purple" : "white",
      color: active ? "dark-purple" : "gray",
      "&:focus, &:hover, &:active": {
        cursor: "pointer",
        outline: "none",
        color: "light-purple",
      },
    })
);

const NavigationLink = styled(Link)(({ active }: { active?: boolean }) =>
  css({
    display: "block",
    width: "100%",
    px: 2,
    borderRadius: "default",
    fontSize: "text-md",
    lineHeight: "lg",
    color: active ? "dark-purple" : "gray",
    fontWeight: active ? "bold" : "regular",
    textDecoration: "none",
    "&:focus, &:hover, &:active": {
      outline: "none",
      bg: "white",
    },
  })
);
