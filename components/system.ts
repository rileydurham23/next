import css, {
  AllSystemCSSProperties,
  CssFunctionReturnType,
  SystemStyleObject,
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
  animationDelay?: ResponsiveValue<Property.AnimationDelay, RequiredTheme>;
  animationDuration?: ResponsiveValue<
    Property.AnimationDuration,
    RequiredTheme
  >;
  borderCollapse?: ResponsiveValue<Property.BorderCollapse, RequiredTheme>;
  boxSizing?: ResponsiveValue<Property.BoxSizing, RequiredTheme>;
  css?: CssFunctionReturnType | string;
  breakInside?: ResponsiveValue<Property.BreakInside, RequiredTheme>;
  columns?: ResponsiveValue<Property.Columns, RequiredTheme>;
  columnGap?: ResponsiveValue<Property.ColumnGap, RequiredTheme>;
  cursor?: ResponsiveValue<Property.Cursor, RequiredTheme>;
  float?: ResponsiveValue<Property.Float, RequiredTheme>;
  listStyle?: ResponsiveValue<Property.ListStyle, RequiredTheme>;
  listStyleType?: ResponsiveValue<Property.ListStyleType, RequiredTheme>;
  pointerEvents?: ResponsiveValue<Property.PointerEvents, RequiredTheme>;
  textDecoration?: ResponsiveValue<Property.TextAlign, RequiredTheme>;
  textOverflow?: ResponsiveValue<Property.TextOverflow, RequiredTheme>;
  textTransform?: ResponsiveValue<Property.TextTransform, RequiredTheme>;
  transition?: ResponsiveValue<Property.Transition, RequiredTheme>;
  whiteSpace?: ResponsiveValue<Property.WhiteSpace, RequiredTheme>;
  animationName?: ResponsiveValue<Property.AnimationName, RequiredTheme>;
  animationFillMode?: ResponsiveValue<
    Property.AnimationFillMode,
    RequiredTheme
  >;
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
    animationDelay: true,
    animationDuration: true,
    borderCollapse: true,
    boxSizing: true,
    breakInside: true,
    columnGap: true,
    columns: true,
    cursor: true,
    float: true,
    listStyle: true,
    listStyleType: true,
    pointerEvent: true,
    textDecoration: true,
    textOverflow: true,
    textTransform: true,
    transition: true,
    whiteSpace: true,
    animationName: true,
    animationFillMode: true,
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

const media =
  (mediaKey = "", styles: SystemStyleObject) =>
  ({ /* props,  */ theme }) => {
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
