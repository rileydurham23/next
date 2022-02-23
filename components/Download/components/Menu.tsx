import { useState } from "react";
import { Flex } from "./Flex";
import MenuCategory from "./MenuCategory";
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
        <MenuCategory
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
