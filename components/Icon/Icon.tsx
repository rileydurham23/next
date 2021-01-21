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
interface IconSetProps
  extends Omit<ComponentProps<typeof Box>, "name" | "size"> {
  name: IconName;
  size?: keyof typeof sizes;
}

const Icon = ({ name, size = "md", ...props }: IconSetProps) => {
  const Icon = icons[name];

  return (
    <Box size={sizes[size]} {...props}>
      <Icon width={sizes[size]} height={sizes[size]} />
    </Box>
  );
};

export default Icon;
