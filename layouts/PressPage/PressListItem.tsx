import { format } from "date-fns";
import styled from "styled-components";
import css from "@styled-system/css";
import NextImage, { ImageProps } from "next/image";
import { transition } from "components/system";
import { truncate } from "utils/string";
import Link from "components/Link";
import ImageBG from "./assets/wave-double-offset.png";

export interface PressListItemProps {
  link: string;
  image: Exclude<ImageProps["src"], string>;
  publication: string;
  author: string;
  date: Date;
  title: string;
  description: string;
}

export const PressListItem = ({
  link,
  image,
  publication,
  author,
  date,
  title,
  description,
}: PressListItemProps) => {
  return (
    <StyledWrapper href={link}>
      <StyledImageBlock>
        <StyledImageWrapper>
          <NextImage
            src={image}
            alt={publication}
            layout="intrinsic"
            objectFit="contain"
          />
        </StyledImageWrapper>
      </StyledImageBlock>
      <StyledContent>
        <StyledMeta>
          by {author} - {format(date, "MMM d, yyyy")}
        </StyledMeta>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{truncate(description, 106)}</StyledDescription>
      </StyledContent>
    </StyledWrapper>
  );
};

const StyledWrapper = styled(Link)(
  css({
    display: "block",
    background: "white",
    borderRadius: "md",
    boxShadow: "0 1px 4px rgba(0,0,0,.12)",
    minHeight: "160px",
    position: "relative",
    textDecoration: "none",
    transition: transition([["all", "interaction"]]),
    "&:hover, &:focus": {
      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.24)",
      transform: "translateY(-4px)",
    },
  })
);

const StyledImageBlock = styled("div")(
  css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "220px",
    width: "100%",
    borderTopLeftRadius: "md",
    borderTopRightRadius: "md",
    background: `url('${ImageBG}') center center no-repeat`,
    backgroundSize: "cover",
  })
);

const StyledImageWrapper = styled("div")(
  css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "70%",
    height: "70%",
    "& > *": {
      maxHeight: "100%",
    },
  })
);

const StyledMeta = styled("em")(
  css({
    color: "dark-gray",
    display: "block",
    fontSize: "text-sm",
    fontStyle: "normal",
    lineHeight: "md",
    mb: 2,
  })
);

const StyledTitle = styled("strong")(
  css({
    color: "black",
    display: "block",
    fontWeight: "bold",
    fontSize: ["text-md", "text-lg"],
    lineHeight: "md",
    mb: 2,
  })
);

const StyledDescription = styled("p")(
  css({
    color: "dark-gray",
    fontSize: ["text-sm", "text-md"],
    fontWeight: "regular",
    lineHeight: "md",
    m: 0,
  })
);

const StyledContent = styled("div")(
  css({
    pt: 3,
    px: 3,
    pb: 4,
  })
);
