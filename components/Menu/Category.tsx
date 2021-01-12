import styled from "styled-components";
import css from "@styled-system/css";
import { useClickAway } from "react-use";
import { useCallback, useRef } from "react";
import Box from "components/Box";
import Button from "components/Button";
import Image from "components/Image";
import Flex from "components/Flex";
import MenuItem, { MenuItemProps } from "./Item";

export interface MenuCategoryProps {
  title: string;
  description: string;
  href: string;
  children: MenuItemProps[];
  cover?: string;
}

interface MenuCategoryComponentProps extends MenuCategoryProps {
  id: number;
  opened: boolean;
  onToggleOpened: (id: number) => void;
}

const MenuCategory = ({
  id,
  opened,
  title,
  description,
  children,
  href,
  cover,
  onToggleOpened,
}: MenuCategoryComponentProps) => {
  const ref = useRef(null);
  const hasCover = !!cover;

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
        <Dropdown opened={opened} large={hasCover}>
          {hasCover && (
            <Flex
              flex="0 0 240px"
              flexDirection="column"
              background="linear-gradient(125deg,#f0f2f4,#fff)"
            >
              <DropdownHeader>{description}</DropdownHeader>
              <CoverLink href={href}>
                <Image src={cover} width="180" height="144" />
                <Button shape="sm" type="secondary" as="div">
                  Learn more
                </Button>
              </CoverLink>
            </Flex>
          )}
          <Box flexGrow={1}>
            {!hasCover && <DropdownHeader>{description}</DropdownHeader>}
            <Box pt={1} px={4} py={2}>
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

const CoverLink = styled("a")(
  css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexGrow: 1,
    border: "1px solid transparent",
    borderRadius: "4px",
    lineHeight: "24px",
    m: 3,
    px: 3,
    pb: 3,
    textAlign: "center",
    textDecoration: "none",
    transition: "all 0.3s",
    "&:focus, &:hover": {
      background: "white",
      borderColor: "dark-purple",
    },
  })
);

const MainLink = styled("a")(({ active }: { active: boolean }) =>
  css({
    position: "relative",
    display: "flex",
    alignItems: "center",
    height: "100%",
    px: 3,
    border: "0 solid dark-purple",
    borderBottomWidth: active ? "2px" : "0",
    cursor: "pointer",
    fontSize: "text-md",
    fontWeight: "bold",
    color: "darkest",
    textDecoration: "none",
    outline: "none",
    transition: "background 0.3s",
    "&:focus, &:hover": {
      color: "dark-purple",
      background: "rgba(240, 242, 244, 0.56)",
    },
  })
);

const Dropdown = styled("div")(
  ({ opened, large }: { opened: boolean; large: boolean }) =>
    css({
      display: opened ? "flex" : "none",
      position: "absolute",
      top: "80px",
      left: 0,
      zIndex: "3000",
      overflow: "hidden",
      minWidth: large ? "740px" : "540px",
      ml: large ? "-180px" : "-80px",
      p: 0,
      borderRadius: "default",
      boxShadow: "0 4px 40px rgba(0, 0, 0, 0.24)",
      background: "white",
      color: "black",
    })
);

const DropdownHeader = styled("h3")(({ center }: { center?: boolean }) =>
  css({
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
    background: "hsla(0, 0%, 100%, .7)",
  })
);
