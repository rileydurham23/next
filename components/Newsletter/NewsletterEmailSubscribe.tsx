import Box from "components/Box";
import Flex, { FlexProps } from "components/Flex";
import styled from "styled-components";
import css from "@styled-system/css";
import { transition } from "components/system";
import { useMarketo } from "utils/marketo";

const { NEXT_PUBLIC_EMAIL_SUBSCRIPTION_FORM_ID } = process.env;

export function NewsletterEmailSubscribe({ ...props }: FlexProps) {
  const formLoaded = useMarketo({
    formId: NEXT_PUBLIC_EMAIL_SUBSCRIPTION_FORM_ID,
  });

  return (
    <Flex
      backgroundColor="white"
      justifyContent="center"
      alignItems={["stretch", "center"]}
      flexDirection={["column", "row"]}
      {...props}
    >
      <Box
        ml={[0, 2]}
        mt={[4, 0]}
        minHeight="44px"
        minWidth="340px"
        bg={formLoaded ? "transparent" : "lightest-gray"}
        transition={transition([["backgroundColor", "interaction"]])}
      >
        <StyledFormFormWrapper
          id={`mktoForm_${NEXT_PUBLIC_EMAIL_SUBSCRIPTION_FORM_ID}`}
        />
      </Box>
    </Flex>
  );
}

const StyledFormFormWrapper = styled("form")(
  css({
    padding: "0 !important",
    width: "auto !important",

    ".mktoButton": {
      color: "#fff",
      padding: "0 5px",
      background: "#651fff",
      boxSizing: "border-box",
      whiteSpace: "nowrap",
      borderRadius: "4px",
      height: ["44px", "48px"],
      width: ["307px", "304px"],
      border: "none",
    },

    ".mktoLabel": {
      display: "none",
    },

    ".mktoButtonWrap": {
      margin: ["0 0 0 18px !important", "0 0 0 43px !important"],
    },

    button: {
      fontSize: ["text-lg", "header-4"],
    },

    input: {
      height: ["44px !important", "48px !important"],
      width: ["307px !important", "304px !important"],
      margin: ["0 0 16px 18px !important", "0 80px 16px 39px !important"],
      backgroundColor: "#f0f2f4",
      border: "1px solid #bdcad0",
      borderRadius: "4px",
    },
  })
);
