import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import theme from "components/theme";
import "components/global-styles.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
