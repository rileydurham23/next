import type { AppProps } from "next/app";
import { Global, ThemeProvider } from "@emotion/react";

import styles from "components/global-styles";
import theme from "components/theme";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Global styles={styles} />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
