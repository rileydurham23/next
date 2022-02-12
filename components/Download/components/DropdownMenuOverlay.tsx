import { styled } from "@stitches/react";

export const DropdownMenuOverlay = styled("div", {
  // display: ["none", "block"],
  display: "block",
  position: "fixed",
  top: "80px",
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 1000,
  // background: "blur(60px)",
});
