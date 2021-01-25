import styled from "styled-components";
import { useClickAway } from "react-use";
import { useCallback, useRef } from "react";
import { css, media } from "components/system";
import Box from "components/Box";
import Button from "components/Button";
import Image from "components/Image";
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
            <DropdownCover>
              <DropdownHeader>{description}</DropdownHeader>
              <CoverLink href={href}>
                <Image src={cover} width="180" height="144" />
                <Button variant="secondary" as="div">
                  Learn more
                </Button>
              </CoverLink>
            </DropdownCover>
          )}
          <Box flexGrow={1}>
            {!hasCover && <DropdownHeader>{description}</DropdownHeader>}
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

const MainLink = styled("a")(({ active }: { active: boolean }) => [
  css({
    boxSizing: "border-box",
    color: active ? "dark-purple" : "darkest",
    cursor: "pointer",
    display: "block",
    fontSize: "15px",
    bg: active ? "rgba(240, 242, 244, 0.56)" : "white",
    fontWeight: 500,
    float: "left",
    lineHeight: "80px",
    outline: "none",
    padding: "0 16px",
    position: "relative",
    textDecoration: "none",
    transition: "background 0.3s",
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

const Dropdown = styled("div")(
  ({ opened, large }: { opened: boolean; large: boolean }) => [
    css({
      background: "white",
      borderRadius: "default",
      boxShadow: "0 4px 40px rgba(0, 0, 0, 0.24)",
      color: "black",
      display: opened ? "flex" : "none",
      left: "0",
      ml: large ? "-180px" : "-80px",
      overflow: "hidden",
      p: 0,
      position: "absolute",
      minWidth: large ? "740px" : "540px",
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
  ]
);

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

const DropdownCover = styled("div")(
  css({
    flex: "0 0 240px",
    border: "1px solid",
    borderColor: "transparent",
    borderRadius: "default",
    display: ["none", "flex"],
    flexDirection: "column",
    lineHeight: "24px",
    textAlign: "center",
    textDecoration: "none",
    transition: "all 0.3s",
    background: "linear-gradient(125deg,#f0f2f4,#fff)",
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
