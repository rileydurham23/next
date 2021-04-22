import Box from "components/Box";
import Flex, { FlexProps } from "components/Flex";
import styled from "styled-components";
import css from "@styled-system/css";
import { transition } from "components/system";
import { useMarketo } from "utils/marketo";

const { NEXT_PUBLIC_EMAIL_SUBSCRIPTION_FORM_ID } = process.env;

export function EmailSubscribe({ ...props }: FlexProps) {
  const formLoaded = useMarketo({
    formId: NEXT_PUBLIC_EMAIL_SUBSCRIPTION_FORM_ID,
  });

  return (
    <Flex
      backgroundColor="white"
      justifyContent="center"
      alignItems={["stretch", "center"]}
      flexDirection={["column", "row"]}
      py="4"
      {...props}
    >
      <Box as="p" text={["text-xl", "header-4"]} color="darkest">
        Get the latest product updates and engineering blog posts
      </Box>
      <Box
        ml={[0, 4]}
        mt={[4, 0]}
        minHeight="40px"
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
    display: "flex",
    p: "0 !important",
    width: "auto !important",
    "& .mktoButton": {
      color: "gray",
      px: 5,
      bg: "lightest-gray",
      border: "1px solid",
      boxSizing: "border-box",
      whiteSpace: "nowrap",
      borderColor: "light-gray",
      borderTopRightRadius: "default",
      borderBottomRightRadius: "default",
      minHeight: "40px",
      textTransform: "uppercase",
    },
    "& .mktoEmailField": {
      borderTopLeftRadius: "default",
      borderBottomLeftRadius: "default",
      boxSizing: "border-box",
      border: "1px solid",
      borderColor: "light-gray",
      borderRight: 0,
      m: 0,
      transition: transition([
        ["backgroundColor", "interaction"],
        ["borderColor", "interaction"],
      ]),
      width: "200px !important",
      fontSize: "18px !important",
      px: "8px !important",
      minHeight: "40px",
      "&:focus, &:hover": {
        borderColor: "light-blue",
        bg: "rgba(0,145,234,.04)",
      },
    },
    "& .mktoFormRow:first-of-type, & .mktoFieldDescriptor, & .mktoFieldWrap, & .mktoEmailField": {
      width: "100% !important",
    },
    "& .mktoFieldDescriptor": { mb: "0 !important" },
    "& .mktoButtonWrap": { ml: "0 !important" },
    "& .mktoOffset, & .mktoLabel, & .mktoGutter": { display: "none" },
  })
);
