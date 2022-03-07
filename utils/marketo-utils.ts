import { useState, useEffect } from "react";

function loadScript(): Promise<boolean> {
  return new Promise((resolve) => {
    //if the MktoForms2 object already exists, resolve
    if (window.MktoForms2) {
      return resolve(true);
    }

    const scriptElement = document.createElement("script");

    scriptElement.src = `https://learn.goteleport.com/js/forms2/js/forms2.min.js`;

    //defines what happens on script load: check if obj exists and resolve if so
    //only runs after appended to the document below
    scriptElement.onload = () => {
      if (window.MktoForms2) {
        return resolve(true);
      }
    };

    //attaches fully-defined script object to the document
    document.body.appendChild(scriptElement);
  });
}

interface UseMarketoProps {
  formId: string;
}

export function useMarketo({ formId }: UseMarketoProps): boolean {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    //isMounted flag: prevents memory leak if component is unmounted before setLoaded runs
    let isMounted = true;
    if (!loaded) {
      loadScript().then(() => {
        if (isMounted) {
          setLoaded(true);
        }
      });
      return () => {
        isMounted = false;
      };
    }

    // setOptions method is necessary to circumvent the tracking protection of Firefox, et al
    // more info: https://nation.marketo.com/t5/product-blogs/really-finally-winning-the-marketo-forms-vs-tracking-protection/ba-p/244434

    window.MktoForms2.setOptions({
      formXDPath: "/rs/819-WHT-483/images/marketo-xdframe-relative.html",
    });

    window.MktoForms2.loadForm("//learn.goteleport.com", "819-WHT-483", formId);

    //once the form is rendered, the destyling function is run
    window.MktoForms2.whenRendered(function (form) {
      destyleMktoForm(form);
    });
  }, [loaded, formId]);

  return loaded;
}

//these style-related functions strip all embedded marketo styles
//based on this codepen from Sanford Whiteman: https://codepen.io/figureone/pen/dLqxPG

function destyleMktoForm(mktoForm?, moreStyles?) {
  const formEl = mktoForm.getFormElem()[0];

  //create an array consiting of <form> and children
  const styledEls = Array.from(formEl.querySelectorAll("[style]")).concat(
    formEl
  );

  // remove style attribute from each element
  styledEls.forEach(function (el: HTMLElement) {
    el.removeAttribute("style");
  });

  //these declarations are not present in the original code but necessary for our TS compiler
  const mktoForms2BaseStyle = document.getElementById("mktoForms2BaseStyle");
  const mktoForms2ThemeStyle = document.getElementById("mktoForms2ThemeStyle");

  // create an array of all stylesheets in document
  const styleSheets = Array.from(document.styleSheets);

  // loop through stylesheets and check for ownerNode properties on each
  styleSheets.forEach(function (ss: CSSStyleSheet) {
    if (
      //array of <link/> elements tied to stylesheets
      [mktoForms2BaseStyle, mktoForms2ThemeStyle].indexOf(
        ss.ownerNode as HTMLElement
      ) != -1 ||
      formEl.contains(ss.ownerNode)
    ) {
      ss.disabled = true;
    }
  });

  // the form default visibility is "hidden", this code sets the
  // visibility to "visible" once the appropriate
  // stylsheets are disabled - see Marketo.tsx
  if (!moreStyles) {
    formEl.setAttribute("data-styles-ready", "true");
  }
}
