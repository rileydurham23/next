/*
 * Initializes sign-up widget from the main app. Can be removed if we delete sign-up page.
 */

import { load as loadRecaptcha } from "./recaptcha";

const API_URL = process.env.NEXT_PUBLIC_TELEPORT_API_URL;

function loadLib(): Promise<typeof window.teleport> {
  return new Promise((resolve) => {
    if (window.teleport) {
      return resolve(window.teleport);
    }

    const scriptElement = document.createElement("script");

    scriptElement.src = `${API_URL}/lib.js`;
    scriptElement.onload = () => {
      if (window.teleport) {
        return resolve(window.teleport);
      }
    };

    document.body.appendChild(scriptElement);
  });
}

interface optionsInt {
  apiUrl: string;
  onSuccess: () => void;
}

export async function renderSignupRequestForm(
  //element is a container element for the form, not the form itself.
  element: Element,
  options: optionsInt
): Promise<void> {
  try {
    const lib = await loadLib();
    await loadRecaptcha();

    return lib.renderSignupRequestForm(element, options);
  } catch (e) {
    console.error(e);
  }

  return null;
}
