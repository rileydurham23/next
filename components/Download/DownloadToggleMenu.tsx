import React, { useState } from "react";

import { styled } from "@stitches/react";

import type { OS } from "./types";

interface ButtonNameMap {
  linux: "Linux";
  mac: "MacOS";
  windows: "Windows";
}

// enforce consistency between value/name/icons
interface BaseButton<T extends OS> {
  value: T;
  name: ButtonNameMap[T];
  icon: T;
}

type LinuxButton = BaseButton<"linux">;
type WindowsButton = BaseButton<"windows">;
type MacOSButton = BaseButton<"mac">;

type OSButton = LinuxButton | WindowsButton | MacOSButton;

interface ToggleMenuProps {
  onChange: (os: OS) => void;
  selectedDefault: OS;
}

const buttons: Array<OSButton> = [
  { value: "linux", name: "Linux", icon: "linux" },
  { value: "mac", name: "MacOS", icon: "mac" },
  { value: "windows", name: "Windows", icon: "windows" },
];

const DownloadToggleMenu: React.FC<ToggleMenuProps> = ({
  onChange,
  selectedDefault,
}) => {
  const [selected, setSelected] = useState(selectedDefault);

  const handleClick = (event) => {
    const os = event.target.value;
    setSelected(os);
    onChange(os);
  };

  const toggleButtons = buttons.map((button) => {
    const isSelected = selected === button.value ? true : false;

    return (
      <StyledButton
        key={button.value}
        onClick={handleClick}
        value={button.value}
        // selected={isSelected}
      >
        {button.name}
      </StyledButton>
    );
  });

  return <>{toggleButtons}</>;
};

export default DownloadToggleMenu;

const StyledButton = styled("button", {
  backgroundColor: "white",
  border: " 1px solid grey",
  cursor: "pointer",
  color: "red",
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
