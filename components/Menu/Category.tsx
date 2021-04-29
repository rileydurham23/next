import styled from "styled-components";
import { useClickAway } from "react-use";
import { useCallback, useRef } from "react";
import { css, media, transition } from "components/system";
import Box from "components/Box";
import MenuItem, { MenuItemProps } from "./Item";

export interface MenuCategoryProps {
  title: string;
  description: string;
  href: string;
  children: MenuItemProps[];
}

interface MenuCategoryComponentProps extends MenuCategoryProps {
  id: number;
  opened: boolean;
  onToggleOpened: (id: number | null) => void;
}

const MenuCategory = ({
  id,
  opened,
  title,
  description,
  children,
  href,
  onToggleOpened,
}: MenuCategoryComponentProps) => {
  const ref = useRef(null);

  useClickAway(ref, () => {
    if (opened) {
      onToggleOpened(null);
    }
  });

  const toggleOpened = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();

      onToggleOpened(opened ? null : id);
    },
    [opened]
  );

  return (
    <>
      {opened && <Overlay />}
      <Box position="relative" ref={ref}>
        <MainLink href={href} onClick={toggleOpened} active={opened}>
          {title}
        </MainLink>
        <Dropdown opened={opened}>
          <Box flexGrow={1}>
            <DropdownHeader>{description}</DropdownHeader>
            <Box px={[3, 4]} pt={2} pb={[3, 2]}>
              {children.map((props) => (
                <MenuItem key={props.href} {...props} />
              ))}
            </Box>
          </Box>
        </Dropdown>
      </Box>
    </>
  );
};

export default MenuCategory;

const MainLink = styled("a")(({ active }: { active: boolean }) => [
  css({
    boxSizing: "border-box",
    color: active ? "dark-purple" : "darkest",
    cursor: "pointer",
    display: "block",
    fontSize: "15px",
    bg: active ? "rgba(240, 242, 244, 0.56)" : "transparent",
    fontWeight: 500,
    float: "left",
    lineHeight: "80px",
    outline: "none",
    padding: "0 16px",
    position: "relative",
    textDecoration: "none",
    transition: transition([["background", "interaction"]]),
    "&:focus, &:hover": {
      color: "dark-purple",
      bg: "rgba(240, 242, 244, 0.56)",
    },
  }),
  media("sm", {
    color: "darkest",
    bg: "lightest-gray",
    borderRadius: "default",
    float: "none",
    fontSize: "text-lg",
    mb: 2,
    lineHeight: "56px",
    textAlign: "left",
    width: "100%",
  }),
]);

const Dropdown = styled("div")(({ opened }: { opened: boolean }) => [
  css({
    background: "white",
    borderRadius: "default",
    boxShadow: "0 4px 40px rgba(0, 0, 0, 0.24)",
    color: "black",
    display: opened ? "flex" : "none",
    left: "0",
    ml: "-80px",
    overflow: "hidden",
    p: 0,
    position: "absolute",
    minWidth: "540px",
    top: "80px",
    zIndex: 3000,
  }),
  media("sm", {
    borderRadius: 0,
    ml: 0,
    minWidth: "auto",
    position: "relative",
    left: 0,
    top: 0,
    boxShadow: "none",
    width: "100%",
  }),
]);

const DropdownHeader = styled("h3")(({ center }: { center?: boolean }) =>
  css({
    display: ["none", "block"],
    alignItems: "center",
    textAlign: center ? "center" : "left",
    mx: 5,
    my: 0,
    borderBottom: "1px solid",
    borderColor: "lightest-gray",
    fontSize: "text-xl",
    lineHeight: "64px",
  })
);

const Overlay = styled("div")(
  css({
    position: "fixed",
    top: "80px",
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1000,
    background: "blur(60px)",
  }),
  media("sm", {
    display: "none",
  })
);
