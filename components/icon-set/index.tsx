import * as icons from "./svg";
import styled from "@emotion/styled";
import { compose, space, color, variant } from "styled-system";

interface IconSetProps {
  name: keyof typeof icons;
  color: string;
  size: "small" | "medium" | "large";
}

const IconSet = ({ name, ...props }: IconSetProps) => {
  const Icon = styled(icons[name])(
    compose(
      space,
      color,
      variant({
        prop: "size",
        variants: {
          small: {
            size: 12,
          },
          medium: {
            size: 24,
          },
          large: {
            size: 48,
          },
        },
      })
    )
  );

  return <Icon {...props} />;
};

export default IconSet;
