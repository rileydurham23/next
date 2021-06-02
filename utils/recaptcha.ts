let loaded = false;

const RECAPTCHA_URL = "https://www.google.com/recaptcha/enterprise.js";

function load(): Promise<void> {
  return new Promise((resolve) => {
    if (loaded) {
      return resolve();
    }

    const scriptElement = document.createElement("script");

    scriptElement.onload = () => {
      loaded = true;
      resolve();
    };
    scriptElement.src = RECAPTCHA_URL;

    document.body.appendChild(scriptElement);
  });
}

export function ready(): Promise<void> {
  return load();
}
