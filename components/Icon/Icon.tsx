import { ComponentProps } from "react";
import Box from "components/Box";
import * as icons from "./icons";

const sizes = {
  sm: 12,
  md: 24,
  lg: 32,
  xl: 40,
};

export type IconName = keyof typeof icons;

export interface IconProps
  extends Omit<ComponentProps<typeof Box>, "name" | "size"> {
  name: IconName;
  size?: keyof typeof sizes;
}

const Icon = ({ name, size = "md", ...props }: IconProps) => {
  const IconSVG = icons[name];

  if (!IconSVG) {
    return <Box size={sizes[size]} {...props} />;
  }

  return (
    <Box size={sizes[size]} {...props}>
      <IconSVG width={sizes[size]} height={sizes[size]} display="block" />
    </Box>
  );
};

export default Icon;
