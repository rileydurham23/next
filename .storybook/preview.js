import { ThemeProvider } from "styled-components";
import theme from "components/theme";
import { Lato, UbuntuMono } from "components/Fonts";
import GlobalStyles from "components/GlobalStyles";
import * as NextImage from "next/image";
// https://storybook.js.org/addons/storybook-addon-next-router
import { RouterContext } from "next/dist/shared/lib/router-context"; // next 12

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
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Lato />
      <UbuntuMono />
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
