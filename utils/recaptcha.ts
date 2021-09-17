import { useCallback, useEffect, useMemo, useState } from "react";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

let loaded = false;

export const load = (): Promise<void> => {
  return new Promise((resolve) => {
    if (loaded) {
      return resolve();
    }

    const scriptElement = document.createElement("script");

    scriptElement.onload = () => {
      loaded = true;
      resolve();
    };
    scriptElement.src = "https://www.google.com/recaptcha/enterprise.js";

    document.body.appendChild(scriptElement);
  });
};

export const useRecaptcha = (UID: string) => {
  const [error, setError] = useState<string>("");
  const [recaptchaID, setRecaptchaID] = useState<number>();
  const callbackFNName = `${UID}_callback`;

  const getToken = useCallback((): Promise<string> => {
    return new Promise((resolve) => {
      if (!Number.isInteger(recaptchaID)) {
        setError(
          "reCAPTCHA script is not initialized, wait and try submit again"
        );

        return;
      }

      window[callbackFNName] = (token: string) => resolve(token);

      window["grecaptcha"].enterprise.execute(recaptchaID);
    });
  }, [recaptchaID, callbackFNName]);

  useEffect(() => {
    if (!SITE_KEY) {
      return;
    }

    load().then(() => {
      window["grecaptcha"].enterprise.ready(() => {
        const ID = window["grecaptcha"].enterprise.render(UID, {
          sitekey: SITE_KEY,
          size: "invisible",
          callback: callbackFNName,
          "error-callback": () =>
            setError(
              "Cannot contact reCAPTCHA, please check your connection and try again"
            ),
          "expired-callback": () => {
            window["grecaptcha"].enterprise.reset();

            setError("reCAPTCHA response expired, please submit again");
          },
        });

        setRecaptchaID(ID);

        return () => {
          if (window[callbackFNName]) {
            delete window[callbackFNName];
          }
        };
      });
    });
  }, [UID, callbackFNName]);

  return useMemo(
    () => ({
      disabled: !SITE_KEY,
      error,
      ready: Number.isInteger(recaptchaID),
      getToken,
    }),
    [error, recaptchaID, getToken]
  );
};
