import { useState } from "react";
import { Flex } from "./Flex";
import NavBarLinkRow from "./NavBarLinkRow";
import structure from "./structure";

const Menu = () => {
  const [openedCategoryId, setOpenedCategoryId] = useState<number>(null);

  return (
    <Flex
    // flexDirection={["column", "row"]}
    // marginRight="10px"
    // width={["100%", "auto"]}
    >
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
    </Flex>
  );
};

export default Menu;
