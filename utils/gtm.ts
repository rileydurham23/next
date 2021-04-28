interface PageEventProps {
  event: string;
  page: string;
}

declare global {
  var dataLayer: PageEventProps[]; // eslint-disable-line no-var
}

export const GTMPageView = (url: string) => {
  const pageEvent: PageEventProps = {
    event: "pageview",
    page: url,
  };

  window && window.dataLayer && window.dataLayer.push(pageEvent);
  return pageEvent;
};
