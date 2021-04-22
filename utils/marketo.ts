import { useState, useEffect } from "react";

const { NEXT_PUBLIC_MARKTO_MUNCHKIN_ID } = process.env;
const { NEXT_PUBLIC_MARKTO_BASE_URL } = process.env;

function loadScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (window.MktoForms2) {
      return resolve(true);
    }

    const scriptElement = document.createElement("script");

    scriptElement.src = `${NEXT_PUBLIC_MARKTO_BASE_URL}/js/forms2/js/forms2.min.js`;
    scriptElement.onload = () => {
      if (window.MktoForms2) {
        return resolve(true);
      }
    };

    document.body.appendChild(scriptElement);
  });
}

interface UseMarketoProps {
  formId: string;
  callback?: () => void;
}

export function useMarketo({ formId, callback }: UseMarketoProps): boolean {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      loadScript().then(setLoaded);
      return;
    }

    window.MktoForms2.loadForm(
      NEXT_PUBLIC_MARKTO_BASE_URL,
      NEXT_PUBLIC_MARKTO_MUNCHKIN_ID,
      formId,
      callback
    );
  }, [loaded, formId, callback]);

  return loaded;
}
