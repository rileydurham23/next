import { ready as recaptchaReady } from "./recaptcha";

const API_URL = "https://teleport.sh";

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

export async function renderSignupRequestForm(element: Element): Promise<void> {
  try {
    const [lib] = await Promise.all([loadLib(), recaptchaReady()]);

    return lib.renderSignupRequestForm(element, {
      apiUrl: API_URL,
    });
  } catch (e) {
    console.error(e);
  }

  return null;
}
