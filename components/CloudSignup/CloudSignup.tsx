import { useEffect, useRef } from "react";
import styled from "styled-components";
import { all, css, StyledSystemProps } from "components/system";
import { BoxProps } from "components/Box";
import { renderSignupRequestForm } from "utils/cloud-signup";

export default function CloudSignup(props: BoxProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref) {
      renderSignupRequestForm(ref.current);
    }
  }, [ref]);

  return (
    <StyledWrapper {...props}>
      <div ref={ref}></div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled("div")<StyledSystemProps>(
  css({
    bg: "white",
    mt: ["auto", "auto", "-99px"],
    width: ["100%", "640px", "488px"],
    maxWidth: ["100%", "640px", "30vw"],
    ".pro-signup": {
      width: "100%",
    },
    ".pro-signup__info": {
      display: "none",
    },
    ".pro-signup__form": {
      width: "100%",
      boxSizing: "border-box",
    },
  }),
  all
);
