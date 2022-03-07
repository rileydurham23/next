import React from "react";

export declare global {
  interface Window {
    MktoForms2?: {
      loadForm: (
        baseUrl: string,
        munchkinId: string,
        formId: string | number,
        callback?: () => void
      ) => void;
      setOptions: ({ formXDPath: string }) => void;
      whenRendered?: (form: React.ReactNode) => void;
    };
    teleport?: {
      renderSignupRequestForm: (
        element: Element,
        options: { apiUrl: string }
      ) => void;
    };
  }
}
