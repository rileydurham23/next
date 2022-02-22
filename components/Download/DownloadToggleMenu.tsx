import React, { useState } from "react";
import { styled } from "./stitches.config";

import { Flex } from "./components/Flex";

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
        // ensures screen readers can tab through and select OS options
        aria-pressed={isSelected}
        key={button.value}
        onClick={handleClick}
        value={button.value}
      >
        {button.name}
      </StyledButton>
    );
  });

  return (
    <Flex role="group" aria-label="Choose operating system">
      {toggleButtons}
    </Flex>
  );
};

export default DownloadToggleMenu;

const StyledButton = styled("button", {
  backgroundColor: "transparent",
  border: " 1px solid $blue-gray",
  color: "$gray",
  cursor: "pointer",
  fontSize: "$text-sm",
  height: "40px", // theming
  transition: "all 0.3s",
  width: "100px",

  "&:first-child": {
    borderRadius: "4px 0px 0px 4px",
    borderRight: "none",
  },

  "&:last-child": {
    borderLeft: "none",
    borderRadius: "0px 4px 4px 0px",
  },

  "&[aria-pressed='true']": {
    borderBottom: "3px solid #651fff",
    boxShadow: "rgb(0 0 0 / 24%) 0px 1px 4px inset",
    color: "rgb(101, 31, 255)",
  },
});
