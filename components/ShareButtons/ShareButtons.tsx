import styled from "styled-components";
import css from "@styled-system/css";
import { transition } from "components/system";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";
import Box from "components/Box";

export interface ShareButtonsProps {
  title: string;
}

export default function ShareButtons({ title }: ShareButtonsProps) {
  let href = "";
  if (typeof window !== "undefined") {
    href = window.location.href;
  }

  return (
    <Box mt={[5, 7]}>
      <Box as="p" textTransform="uppercase">
        Share this page
      </Box>
      <StyledList>
        <li>
          <TwitterShareButton url={href} title={title}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </li>
        <li>
          <FacebookShareButton url={href} quote={title}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </li>
        <li>
          <LinkedinShareButton url={href}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </li>
      </StyledList>
    </Box>
  );
}

const StyledList = styled("ul")(
  css({
    display: "flex",
    listStyle: "none",
    m: 0,
    mt: 2,
    pl: 0,

    "& li:not(:first-of-type)": {
      ml: 3,
    },

    "& li button": {
      transition: transition([["opacity", "interaction"]]),
      "&:hover, &:focus": {
        opacity: "0.7",
      },
    },
  })
);
