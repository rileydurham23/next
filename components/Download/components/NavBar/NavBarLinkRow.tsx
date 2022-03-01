import { styled } from "../../stitches.config";
import { useClickAway } from "react-use";
import { useCallback, useRef } from "react";
import Box from "components/Box";

import { DropdownMenu } from "../DropdownMenu/DropdownMenu";
import { DropdownMenuItem } from "../DropdownMenu/DropdownMenuItem";
import { DropdownMenuOverlay } from "../DropdownMenu/DropdownMenuOverlay";

import { MenuItemProps } from "../DropdownMenu/DropdownMenuItem";

export interface NavBarLinkRowProps {
  title: string;
  description: string;
  href: string;
  items: MenuItemProps[];
}

interface NavBarLinkRowComponentProps extends NavBarLinkRowProps {
  id: number;
  opened: boolean;
  onToggleOpened: (id: number | null) => void;
}

const NavBarLinkRow = ({
  id,
  opened,
  title,
  description,
  items,
  href,
  onToggleOpened,
}: NavBarLinkRowComponentProps) => {
  const ref = useRef(null);

  console.log("opened", opened);

  useClickAway(ref, () => {
    if (opened) {
      onToggleOpened(null);
    }
  });

  const toggleOpened = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (items) {
        e.preventDefault();

        onToggleOpened(opened ? null : id);
      }
    },
    [opened, items, id, onToggleOpened]
  );

  return (
    <>
      {opened && <DropdownMenuOverlay />}
      <Box position="relative" ref={ref}>
        <MainLink
          href={href}
          onClick={toggleOpened}
          activity={opened ? "active" : null}
        >
          {title}
        </MainLink>
        <DropdownContainer>
          {items && (
            <DropdownMenu title={description}>
              {items.map((props) => (
                <DropdownMenuItem key={props.href} {...props} />
              ))}
            </DropdownMenu>
          )}
        </DropdownContainer>
      </Box>
    </>
  );
};

const DropdownContainer = styled("div", {
  left: 0,
  marginLeft: 0,
  position: "absolute",
  width: "auto",
  minWidth: "540px",
  zIndex: 3000,
  display: "none",

  "@bp1": {
    position: "relative",
    width: "100%",
    minWidth: 0,
  },

  variant: {
    activity: {
      active: {
        display: "block",
      },
    },
  },
});

const MainLink = styled("a", {
  boxSizing: "border-box",
  color: "$darkest",
  cursor: "pointer",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "15px",
  bg: "transparent",
  fontWeight: 500,
  height: "80px",
  outline: "none",
  padding: "0 16px",
  position: "relative",
  textDecoration: "none",
  transition: "all .3s",
  "&:focus, &:hover": {
    color: "$dark-purple",
    background: "$lightest-gray",
  },
  "@bp1": {
    color: "$darkest",
    bg: "$lightest-gray",
    borderRadius: "default",
    float: "none",
    fontSize: "$text-lg",
    mb: 2,
    lineHeight: "56px",
    textAlign: "left",
    width: "100%",
  },
  variants: {
    activity: {
      active: {
        backgroundColor: "$lightest-gray",
        color: "$dark-purple",
      },
    },
  },
});

export default NavBarLinkRow;
