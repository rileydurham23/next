import { ThemeProvider } from "styled-components";
import theme from "components/theme";
import "components/global-styles.css";
import * as NextImage from "next/image";

// NextImage will not work with Storybook out of the box
// because we don't have a server to process images in it,
// but if we add unoptimized prop to it, it will just return
// us original image path in src.

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
