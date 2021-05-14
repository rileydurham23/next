type Align = "left" | "center" | "right";
type FlexAlign = "flex-start" | "center" | "flex-end";

export function toFlexAlign(align: Align): FlexAlign {
  const map: Record<Align, FlexAlign> = {
    left: "flex-start",
    center: "center",
    right: "flex-end",
  };

  return map[align];
}
