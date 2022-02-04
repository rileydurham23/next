import { useState } from "react";
import Icon from "components/Icon";

import { styled } from "@stitches/react";

const ToggleMenu = ({ buttons, onChange, selectedDefault }) => {
  const [selected, setSelected] = useState(selectedDefault);

  // console.log("selected", selected);

  const handleClick = (event) => {
    const os = event.target.value;
    setSelected(os);
    onChange(os);
    // console.log("handle click", os);
  };

  const toggleButtons = buttons.map((button) => {
    const isSelected = selected === button.value ? true : false;

    // console.log(`${button.value} `, isSelected);

    return (
      <StyledButton
        key={button.value}
        onClick={handleClick}
        value={button.value}
        // @ts-expect-error placeholder, will fix tomorrow
        selected={isSelected}
      >
        {button.name}
      </StyledButton>
    );
  });

  return <>{toggleButtons}</>;
};

export default ToggleMenu;

const StyledButton = styled("button", {
  background: "white",
  border: " 1px solid grey",
  cursor: "pointer",
  fontSize: "13px",
  fontWeight: `${({ selected }) => (selected ? 600 : 300)}`,
  alignItems: "center",
  display: "flex",
  height: "40px",
  padding: "20px",

  "&:first-child": {
    borderRadius: "4px 0px 0px 4px",
    borderRight: "none",
  },

  "&:last-child": {
    borderRadius: "0px 4px 4px 0px",
    borderLeft: "none",
  },
});
