import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
  theme: {
    colors: {
      "blue-gray": "#BDCAD0",
      darkest: "#37474F",
      "dark-purple": "#512FC9",
      gray: "#607D8B",
      "light-blue": "#0091EA",
      "lighter-gray": "#D2DBDF",
      "lightest-gray": "#F0F2F4",
      "light-purple": "#651FFF",
      "page-bg": "#f6f8f9",
    },
    space: {
      0: "0px",
      1: "4px",
      2: "8px",
      3: "16px",
      4: "24px",
      5: "32px",
      6: "40px",
      7: "48px",
      8: "56px",
      9: "64px",
      10: "72px",
      11: "80px",
    },
    fontSizes: {
      "text-xs": "10px",
      "text-sm": "12px",
      "text-md": "14px",
      "text-lg": "16px",
      "text-xl": "18px",
      "header-4": "20px",
      "header-3": "24px",
      "header-2": "28px",
      "header-1": "32px",
    },
    fonts: {
      untitled: "Untitled Sans, apple-system, sans-serif",
      mono: "Söhne Mono, menlo, monospace",
    },
    fontWeights: {
      regular: 400,
      bold: 700,
      black: 900,
    },
    lineHeights: {
      sm: "16px",
      md: "24px",
      lg: "32px",
      xl: "40px",
      xxl: "48px",
    },
    radii: {
      sm: "2px",
      md: "8px",
      lg: "16px",
      default: "4px",
      circle: "99999px",
    },
  },
  media: {
    initial: "1200px",
    bp1: "900px",
  },
});
