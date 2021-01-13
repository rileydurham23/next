import { CssFunctionReturnType } from "@styled-system/css";
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  variant,
} from "styled-system";
import theme, { TextStyle } from "components/theme";

interface TextProps {
  text?: TextStyle;
}

export interface StyledSystemProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TextProps,
    TypographyProps {
  css?: CssFunctionReturnType | string;
}

export const all = compose(
  background,
  border,
  color,
  flexbox,
  layout,
  position,
  shadow,
  space,
  typography,
  variant({
    prop: "text",
    variants: theme.textStyles,
  })
);

export {
  background,
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  shadow,
  space,
  typography,
  variant,
};

export type {
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
};
