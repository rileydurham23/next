import { ComponentProps } from "react";
import Box from "components/Box";
import * as icons from "./icons";

const sizes = {
  xs: 12,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 40,
};

export type IconName = keyof typeof icons;

export interface IconProps
  extends Omit<ComponentProps<typeof Box>, "name" | "fill" | "size"> {
  name: IconName;
  fill?: string;
  size?: keyof typeof sizes;
}

const Icon = ({ name, size = "md", fill, ...props }: IconProps) => {
  const IconSVG = icons[name];

  if (!IconSVG) {
    return <Box size={sizes[size]} {...props} />;
  }

  return (
    <Box size={sizes[size]} {...props}>
      <IconSVG width="100%" height="100%" display="block" fill={fill} />
    </Box>
  );
};

export default Icon;
