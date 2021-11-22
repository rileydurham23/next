import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { parseCookies, setCookie } from "nookies";
import { DocsContextProvider } from "layouts/DocsPage/context";
import theme from "components/theme";
import { GTMPageView } from "utils/gtm";
import { utmValidator, gValidator } from "utils/utm-cookies";
import { Lato, UbuntuMono } from "components/Fonts";
import GlobalStyles from "components/GlobalStyles";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const utmObj = router.query;
    const currentCookies = parseCookies();
    let existingUtmCookies = false;

    //check for existing utm cookies
    for (const key in utmValidator) {
      if (currentCookies[key]) existingUtmCookies = true;
    }

    for (const key in utmObj) {
      //check for gclid and gaid keys in params and set cookie
      if (gValidator.hasOwnProperty(key)) {
        setCookie(null, key, utmObj[key] as string, {
          maxAge: 365 * 24 * 60 * 60,
          path: "/",
        });
      }
      //if no utm cookies exist, set cookies if params contain utm keys
      if (!existingUtmCookies) {
        if (utmValidator.hasOwnProperty(key)) {
          setCookie(null, key, utmObj[key] as string, {
            maxAge: 365 * 24 * 60 * 60,
            path: "/",
          });
        }
      }
    }

    if (process.env.NODE_ENV !== "production") return;

    const onRouteChangeComplete = (url: string) => GTMPageView(url);

    router.events.on("routeChangeComplete", onRouteChangeComplete);

    const cleanup = () =>
      router.events.off("routeChangeComplete", onRouteChangeComplete);

    return cleanup;
  }, [router.events, router.query]);

  if (router.route.startsWith("/docs/")) {
    return (
      <DocsContextProvider>
        <ThemeProvider theme={theme}>
          <Lato />
          <UbuntuMono />
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </DocsContextProvider>
    );
  } else {
    return (
      <ThemeProvider theme={theme}>
        <Lato />
        <UbuntuMono />
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
};

export default MyApp;
