import css, { CssFunctionReturnType } from "@styled-system/css";
import { Property } from "csstype";
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
  RequiredTheme,
  ResponsiveValue,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  system,
  typography,
  TypographyProps,
  variant,
} from "styled-system";
import theme from "components/theme";

type GenericProp<K extends string, T extends Record<string, unknown>> = {
  [I in K]?: keyof T | Array<keyof T>;
};

export interface StyledSystemProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps,
    GenericProp<"text", typeof theme.textStyles>,
    GenericProp<"gradient", typeof theme.gradients> {
  css?: CssFunctionReturnType | string;
  textDecoration?: ResponsiveValue<Property.TextAlign, RequiredTheme>;
  textTransform?: ResponsiveValue<Property.TextTransform, RequiredTheme>;
  listStyle?: ResponsiveValue<Property.ListStyle, RequiredTheme>;
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
  system({
    textDecoration: true,
    textTransform: true,
    listStyle: true,
  }),
  variant({
    prop: "text",
    variants: theme.textStyles,
  }),
  variant({
    prop: "gradient",
    variants: theme.gradients,
  })
);

export interface StyledSystemWrapperProps
  extends FlexboxProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    GenericProp<"text", typeof theme.textStyles> {}

export const wrapper = compose(flexbox, layout, position, shadow, space);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const media = (mediaKey = "", styles: any) => ({ /* props,  */ theme }) => {
  const key = theme.media[mediaKey];
  return {
    [key]: css(styles)(theme),
  };
};

export {
  media,
  css,
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
