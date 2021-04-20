import css, {
  AllSystemCSSProperties,
  CssFunctionReturnType,
} from "@styled-system/css";
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
import { camelCaseToDash } from "utils/string";

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
  whiteSpace?: ResponsiveValue<Property.WhiteSpace, RequiredTheme>;
  textOverflow?: ResponsiveValue<Property.TextOverflow, RequiredTheme>;
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
    textOverflow: true,
    textTransform: true,
    listStyle: true,
    whiteSpace: true,
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

type Easing = string;

type Item = [
  keyof AllSystemCSSProperties,
  keyof typeof theme.transitionTimings,
  Easing?
];

export function transition(items: Item[]): string {
  return items
    .map((item) => {
      const prop = camelCaseToDash(item[0]);
      const timing = theme.transitionTimings[item[1]];
      const easing = item[2] ? ` ${item}` : "";

      return `${prop} ${timing}ms${easing}`;
    })
    .join(",");
}

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
