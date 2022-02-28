import { styled } from "../../stitches.config";

export const DropdownMenuOverlay = styled("div", {
  display: "none",
  position: "fixed",
  top: "80px",
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 1000,
  background: "blur(60px)",
  "@bp1": {
    display: "block",
  },
});
