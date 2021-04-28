import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import theme from "components/theme";
import { GTMPageView } from "utils/gtm";
import * as Fathom from "fathom-client";
import "components/global-styles.css";
import "components/Search/search.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;

    Fathom.load(process.env.NEXT_PUBLIC_FATHOM_ID, {
      includedDomains: [process.env.NEXT_PUBLIC_DOMAIN],
    });

    const onRouteChangeComplete = (url: string) => {
      GTMPageView(url);
      Fathom.trackPageview();
    };

    router.events.on("routeChangeComplete", onRouteChangeComplete);

    const cleanup = () =>
      router.events.off("routeChangeComplete", onRouteChangeComplete);

    return cleanup;
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
