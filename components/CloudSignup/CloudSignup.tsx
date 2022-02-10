import { useEffect, useRef } from "react";
import styled from "styled-components";
import { all, css, StyledSystemProps } from "components/system";
import { BoxProps } from "components/Box";
import { renderSignupRequestForm } from "utils/cloud-signup";
import { GTMEvent } from "utils/gtm";

export default function CloudSignup(props: BoxProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const API_URL = process.env.NEXT_PUBLIC_TELEPORT_API_URL;

    if (ref) {
      renderSignupRequestForm(ref.current, {
        apiUrl: API_URL,
        onSuccess: () => {
          GTMEvent("formSubmit", { formType: "Free Trial Signup" });
        },
      });
    }
  }, [ref]);

  return (
    <StyledWrapper {...props} id="me">
      <div ref={ref}></div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled("div")<StyledSystemProps>(
  css({
    bg: "white",
    width: ["100%", "100%"],
    maxWidth: ["100%", "320px"],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ".pro-signup": {
      width: "100%",
      boxShadow: "none",
    },
    ".pro-signup__info": {
      display: "none",
    },
    ".pro-signup__form": {
      width: "100%",
      boxSizing: "border-box",
    },
    button: {
      mt: ["12px", 5],
    },
  }),
  all
);
