import Box from "components/Box";
import Flex, { FlexProps } from "components/Flex";
import css from "@styled-system/css";
import { RecaptchaTOC } from "components/MarketoForm";
import { useNewsletter } from "./useNewsletter";

const SubscriptionForm = () => {
  const {
    disabled,
    UID,
    buttonLabel,
    error,
    value,
    submitting,
    submitted,
    onChange,
    onSubmit,
  } = useNewsletter();

  return disabled ? null : (
    <>
      <Flex as="form" onSubmit={onSubmit} mt={[0, "19px"]}>
        <Box
          as="input"
          type="email"
          aria-required="true"
          value={value}
          placeholder="Email address"
          disabled={submitting}
          onChange={onChange}
          borderTopLeftRadius="default"
          borderBottomLeftRadius="default"
          boxSizing="border-box"
          border="1px solid"
          borderColor="light-gray"
          borderRight={0}
          width="100%"
          fontSize="text-xl"
          px={2}
          minHeight="40px"
          css={css({
            "&:focus": {
              outline: "none",
            },
            "&::placeholder": {
              fontSize: ["14px", "18px"],
            },
            "&:disabled": {
              opacity: 0.5,
            },
          })}
        />
        <Box
          as="button"
          type="submit"
          disabled={submitting}
          color="gray"
          px={5}
          bg="lightest-gray"
          border="1px solid"
          borderColor="light-gray"
          borderTopRightRadius="default"
          borderBottomRightRadius="default"
          minHeight="40px"
          textTransform="uppercase"
          cursor="pointer"
          flex="0 0 auto"
          css={css({
            "&:focus, &:hover": {
              outline: "none",
              bg: "light-gray",
            },
            "&::disabled": {
              opacity: 0.5,
              pointerEvents: "none",
            },
          })}
        >
          {buttonLabel}
        </Box>
      </Flex>
      <Box
        color="gray"
        fontSize="text-sm"
        textAlign="center"
        mt={1}
        minHeight="15px"
      >
        {!submitted && !error && (
          <Box visibility={value.length > 0 ? "visible" : "hidden"}>
            <RecaptchaTOC />
          </Box>
        )}
        {!!submitted && <Box color="green">Submitted successfully!</Box>}
        {!!error && <Box color="red">{error}</Box>}
      </Box>
      <Box
        id={UID}
        css={css({
          ".grecaptcha-badge": { visibility: "hidden" },
        })}
      ></Box>
    </>
  );
};

export function EmailSubscribe({ ...props }: FlexProps) {
  return (
    <Flex
      backgroundColor="white"
      justifyContent="center"
      alignItems={["stretch", "center"]}
      flexDirection={["column", "row"]}
      py={2}
      {...props}
    >
      <Box as="p" text={["text-xl", "header-4"]} color="darkest">
        Get the latest product updates and engineering blog posts
      </Box>
      <Box
        ml={[0, 4]}
        mt={[2, 0]}
        minHeight="40px"
        minWidth={["auto", "500px"]}
      >
        <SubscriptionForm />
      </Box>
    </Flex>
  );
}
