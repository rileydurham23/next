import { useState } from "react";
import { Flex } from "./Flex";
import NavBarLinkRow from "./NavBar/NavBarLinkRow";
import structure from "./structure";
import { styled } from "../stitches.config";

const Menu = () => {
  const [openedCategoryId, setOpenedCategoryId] = useState<number>(null);

  return (
    <StyledMenuContainer>
      {structure.map((props, id) => (
        <NavBarLinkRow
          key={id}
          id={id}
          opened={id === openedCategoryId}
          onToggleOpened={setOpenedCategoryId}
          title={props.title}
          description={props.description}
          href={props.href}
          items={props.items}
        />
      ))}
    </StyledMenuContainer>
  );
};

export default Menu;

const StyledMenuContainer = styled(Flex, {
  flexDirection: "row",
  marginRight: "10px",
  width: "auto",

  "@bp1": {
    flexDirection: "column",
    width: "100%",
  },
});
