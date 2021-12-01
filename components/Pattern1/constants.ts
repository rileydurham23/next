import webBackground from "./assets/newsletter_web.png";
import mobBackground from "./assets/newsletter_mob.png";

export type IdiomClass = "purple" | "white";

interface ColorStyles {
  background: {
    backgroundImage?: string | string[];
    backgroundSize?: string | string[];
    backgroundRepeat?: string;
    background?: string;
  };
  logo: {
    color: string;
  };
  copyColor: {
    color: string;
  };
  scheme: string;
}

export const IDIOM: Record<IdiomClass, ColorStyles> = {
  purple: {
    background: {
      backgroundImage: [`url(${mobBackground})`, `url(${webBackground})`],
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
    logo: { color: "white" },
    copyColor: { color: "white" },
    scheme: "termsPurple",
  },
  white: {
    background: { background: "linear-gradient(125deg, #F7F8F9, #FDFDFC)" },
    logo: { color: "dark-purple" },
    copyColor: { color: "gray" },
    scheme: "termsWhite",
  },
};
