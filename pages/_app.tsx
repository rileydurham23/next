import Script from "next/script";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { DocsContextProvider } from "layouts/DocsPage/context";
import { GTMPageView } from "utils/gtm";

import "styles/varaibles.css";
import "styles/fonts-ubuntu.css";
import "styles/fonts-lato.css";
import "styles/global.css";
import "styles/algolia-search.css";

const { NEXT_PUBLIC_GTM_ID } = process.env;
const { NEXT_PUBLIC_GTAG_ID } = process.env;

const Analytics = () => {
  return (
    <>
      {NEXT_PUBLIC_GTM_ID && (
        <>
          {/* Google Tag Manager */}
          <Script id="script_gtm">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','${NEXT_PUBLIC_GTM_ID}');`}
          </Script>

          {/* End Google Tag Manager */}
          {/* Google Tag Manager (noscript) */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${NEXT_PUBLIC_GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
          {/* End Google Tag Manager (noscript) */}
        </>
      )}
      {NEXT_PUBLIC_GTAG_ID && (
        <>
          {/* GTag */}
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GTAG_ID}`}
          />
          <Script id="script_gtag">
            {`window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', "${NEXT_PUBLIC_GTAG_ID}");`}
          </Script>
          {/* End GTag */}
        </>
      )}
    </>
  );
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;

    const onRouteChangeComplete = (url: string) => GTMPageView(url);

    router.events.on("routeChangeComplete", onRouteChangeComplete);

    const cleanup = () =>
      router.events.off("routeChangeComplete", onRouteChangeComplete);

    return cleanup;
  }, [router.events, router.query]);

  return (
    <>
      <Analytics />
      <DocsContextProvider>
        <Component {...pageProps} />
      </DocsContextProvider>
    </>
  );
};

export default MyApp;
