import { useEffect } from "react";
import { useRouter } from "next/router";
import { getHash } from "utils/url";

const scroll = (hash?: string) => {
  if (hash) {
    const idEl = document.getElementById(hash);
    if (idEl) {
      idEl.scrollIntoView();

      return;
    }

    const nameEl = document.getElementsByName(hash)[0];
    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }
};

const Loading = () => {
  const router = useRouter();
  const hash = getHash(router.asPath);

  useEffect(() => {
    return () => {
      requestAnimationFrame(() => {
        scroll(hash);
      });
    };
  }, []);

  return <div>Loading...</div>;
};

export default Loading;
