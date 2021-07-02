import Box from "components/Box";
import Flex, { FlexProps } from "components/Flex";
import styled from "styled-components";
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
      py="4"
      {...props}
    >
      <Box
        ml={[0, 2]}
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

const StyledFormFormWrapper = styled.form`
  padding: 0 !important;
  width: auto !important;

  .mktoButton {
    color: ${(props) => props.theme.colors.code};
    padding: 0 5px;
    background: #651fff;
    border: 1px solid code;
    box-sizing: border-box;
    white-space: nowrap;
    border-radius: 4px;
    min-height: 40px;
    text-transform: uppercase;
  }

  .mktoLabel {
    display: block;
    float: none;
  }
`;
