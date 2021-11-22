import Flex from "components/Flex";
import Icon from "components/Icon";
import type { IconName } from "../Icon/types";

export type IconSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface BadgeProps {
  name: IconName;
  size?: IconSize;
}

export const Badge = ({ name, size = "md" }: BadgeProps) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      bg="dark-purple"
      border="1px solid white"
      borderRadius="circle"
      height={48}
      width={48}
      boxShadow="0px 8px 16px rgba(12, 12, 14, 0.24)"
    >
      <Icon name={name} size={size} color="white" />
    </Flex>
  );
};
