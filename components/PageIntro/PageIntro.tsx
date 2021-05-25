import { ReactNode } from "react";
import { variant } from "styled-system";
import styled from "styled-components";
import css from "@styled-system/css";
import Box, { BoxProps } from "components/Box";
import { all, media, StyledSystemProps } from "components/system";

type Theme = "light" | "dark";

export type Props = {
  title: string;
  description: string;
  subject?: string;
  theme?: Theme;
  verticalResponsive?: boolean;
  children?: ReactNode;
} & BoxProps;

export default function PageIntro({
  title,
  subject,
  description,
  theme = "dark",
  verticalResponsive: vr = true,
  children,
  ...props
}: Props) {
  return (
    <StyledWrapper vr={vr} {...props}>
      <StyledLeft vr={vr}>
        {subject && (
          <StyledSubject variant={theme} vr={vr}>
            {subject}
          </StyledSubject>
        )}
        <StyledHeading variant={theme} vr={vr}>
          {title}
        </StyledHeading>
      </StyledLeft>
      <StyledDescription variant={theme} vr={vr}>
        {description}
      </StyledDescription>
      {children && <Box mt="5">{children}</Box>}
    </StyledWrapper>
  );
}

interface ThemedProps extends StyledSystemProps {
  variant?: Theme | Theme[];
  vr?: boolean | boolean[];
}

const pickTheme = (fn) => (theme) => fn({ theme });

const StyledSubject = styled("p")<ThemedProps>(
  css({
    boxSizing: "border-box",
    fontSize: "text-xl",
    lineHeight: "md",
    fontWeight: "bold",
    m: 0,
  }),
  variant({
    prop: "vr",
    variants: {
      true: pickTheme(
        media("mdVertical", {
          fontSize: "text-md",
          lineHeight: "lg",
        })
      ),
    },
  }),
  variant({
    variants: {
      dark: {
        color: "dark-purple",
      },
      light: {
        color: "white",
      },
    },
  })
);

const StyledHeading = styled("h1")<ThemedProps>(
  css({
    boxSizing: "border-box",
    fontSize: "hero-header",
    lineHeight: "hero-header",
    fontWeight: "black",
    m: 0,
    mt: 3,
    "&:first-child": { mt: 0 },
  }),
  media("md", {
    fontSize: "header-1",
    lineHeight: "xl",
    mt: 0,
  }),
  variant({
    prop: "vr",
    variants: {
      true: pickTheme(
        media("mdVertical", {
          fontSize: "header-3",
          lineHeight: "lg",
          fontWeight: "bold",
          mt: 0,
        })
      ),
    },
  }),
  variant({
    variants: {
      light: {
        color: "white",
      },
    },
  })
);

const StyledDescription = styled("p")<ThemedProps>(
  css({
    boxSizing: "border-box",
    fontSize: "text-xl",
    lineHeight: "lg",
    m: 0,
    mt: 2,
  }),
  variant({
    prop: "vr",
    variants: {
      true: pickTheme(
        media("mdVertical", {
          fontSize: "text-md",
          lineHeight: "md",
          pt: 0,
          ml: 10,
        })
      ),
    },
  }),
  media("md", {
    ml: 0,
  }),
  variant({
    variants: {
      dark: {
        color: "darkest",
      },
      light: {
        color: "white",
      },
    },
  })
);

const StyledLeft = styled("div")<ThemedProps>(
  css({
    boxSizing: "border-box",
  }),
  variant({
    prop: "vr",
    variants: {
      true: pickTheme(media("mdVertical", { flexShrink: 0 })),
    },
  })
);

const StyledWrapper = styled("div")<ThemedProps>(
  css({
    boxSizing: "border-box",
  }),
  variant({
    prop: "vr",
    variants: {
      true: pickTheme(
        media("mdVertical", {
          display: "flex",
          alignItems: "center",
        })
      ),
    },
  }),
  media("md", {
    py: 4,
    display: "block",
    ml: [0, 3],
  }),
  all
);
