export default {
  colors: {
    "dark-purple": "#512FC9",
    "light-purple": "#651FFF",
    white: "#FFFFFF",
    "lightest-gray": "#F0F2F4",
    "light-gray": "#D2DBDF",
    gray: "#607D8B",
    "dark-gray": "#455A64",
    darkest: "#37474F",
    black: "#000000",
  },
  fonts: {
    body: "'Lato', sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    avatar: 48,
  },
  radii: {
    default: 4,
    circle: 99999,
  },
  shadows: {
    card: "0 0 4px rgba(0, 0, 0, .125)",
  },
  // rebass variants
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
    display: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      fontSize: [5, 6, 7],
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.1em",
    },
  },
  styles: {
    root: {
      color: "dark-purple",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    body: {
      color: "red",
    },
  },
};
