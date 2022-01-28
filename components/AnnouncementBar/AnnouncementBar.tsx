import { useState, useEffect } from "react";
import styled from "styled-components";
import css from "@styled-system/css";
import Link from "components/Link";
import { LogoRow, Logo, Gray } from "./data";
import { transition, variant } from "components/system";

type AnnouncementBarType = "case" | "big" | "default" | "newHomepage";

export interface ItemProps {
  src: string;
  url?: string;
  variant: AnnouncementBarType;
}

export const Item = ({ src, url, variant }: ItemProps) => {
  if (variant === "case") {
    const boxProps = url
      ? {
          as: Link,
          href: url,
        }
      : {};

    return (
      <StyledCase link={!!url} {...boxProps}>
        <StyledImage src={src} alt="" variant={variant} />
      </StyledCase>
    );
  }

  return <StyledImage src={src} alt="" variant={variant} />;
};
export interface AnnouncementBarProps {
  type?: AnnouncementBarType;
  rows?: LogoRow[];
}

export const AnnouncementBar = ({
  type = "default",
  rows = Gray,
}: AnnouncementBarProps) => {
  const [currentRow, setCurrentRow] = useState(0);
  const [animationPaused, setAnimationPaused] = useState(false);

  useEffect(() => {
    let current = currentRow;

    const interval = setInterval(() => {
      if (animationPaused) return;

      const next = current < rows.length - 1 ? current + 1 : 0;

      setCurrentRow(next);
      current = next;
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [rows.length, currentRow, animationPaused]);

  return (
    <>
      {type === "case" && (
        <StyledHeader>
          Trusted by{" "}
          <Link href="/case-study/" scheme="site">
            leading organizations
          </Link>
        </StyledHeader>
      )}
      <StyledRowWrapper
        variant={type}
        onMouseEnter={() => setAnimationPaused(true)}
        onMouseLeave={() => setAnimationPaused(false)}
      >
        {rows.map((row: LogoRow, index: number) => {
          return (
            <StyledRow
              key={`row${index}`}
              hidden={currentRow !== index}
              variant={type}
            >
              {row.map((company: Logo) => (
                <Item
                  key={company.src}
                  src={company.src}
                  url={company.url}
                  variant={type}
                />
              ))}
            </StyledRow>
          );
        })}
      </StyledRowWrapper>
    </>
  );
};

const StyledHeader = styled("h3")(
  css({
    marginBottom: [2, 3],
    color: "dark-purple",
    fontSize: ["text-lg", "text-xl"],
    lineHeight: "xxl",
    fontWeight: "bold",
    textAlign: "center",
  })
);

const StyledRowWrapper = styled("div")<{ variant: AnnouncementBarType }>(
  css({
    position: "relative",
  }),
  variant({
    variants: {
      default: {
        height: "112px",
      },
      big: {
        height: "112px",
      },
      case: {
        height: ["60px", "120px"],
      },
      newHomepage: {
        backgroundColor: "transparent",
        height: "112px",
      },
    },
  })
);

const StyledRow = styled("div")<{
  hidden: boolean;
  variant: AnnouncementBarType;
}>(
  ({ hidden }) =>
    css({
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: hidden ? 0 : 1,
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      gap: ["12px", "30px"],
      justifyContent: "center",
      alignItems: "center",
      opacity: hidden ? "0" : "1",
      transition: hidden ? "none" : "opacity 2.5s",
      "& > *:nth-child(1n+4)": {
        display: ["none", "flex"],
      },
    }),
  variant({
    variants: {
      default: {
        py: 6,
      },
      big: {
        py: "21px",
      },
      newHomepage: {
        py: "21px",
        px: 11,
      },
    },
  })
);

const StyledCase = styled("div")<{
  link: boolean;
  variant: AnnouncementBarType;
}>(({ link }) =>
  css({
    boxSizing: "border-box",
    display: "flex",
    flex: "0 1 206px",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    p: 2,
    borderRadius: ["md", "lg"],
    border: link ? "1px solid #651fff" : "none",
    backgroundColor: "white",
    boxShadow: "0 1px 4px rgb(0 0 0 / 24%)",
    transition: transition([["boxShadow", "interaction"]]),
    "&:hover": link
      ? {
          boxShadow: "0 4px 16px rgba(0, 0, 0, .24)",
        }
      : {},
  })
);
const StyledImage = styled("img")<{ variant: AnnouncementBarType }>(
  css({
    display: "flex",
    width: "auto",
  }),
  variant({
    variants: {
      default: {
        maxWidth: [120, 160],
        minWidth: [null, 80],
        maxHeight: "100%",
        opacity: "0.56",
      },
      big: {
        maxWidth: [120, 160],
        minWidth: [null, 80],
        maxHeight: "100%",
      },
      case: {
        maxWidth: ["100%", "144px"],
        maxHeight: "80%",
      },
      newHomepage: {
        maxWidth: [120, 160],
        minWidth: [null, 80],
        maxHeight: "100%",
        marginRight: [0, 5],
      },
    },
  })
);
