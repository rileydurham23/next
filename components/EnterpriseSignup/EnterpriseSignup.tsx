import Box, { BoxProps } from "components/Box";
import { MarketoBrowserForm } from "components/MarketoForm";

const { NEXT_PUBLIC_ENTERPRISE_SIGNUP_FORM_ID } = process.env;

export default function EnterpriseSignup(props: BoxProps) {
  return (
    <Box
      mt={["auto", "auto", "-99px"]}
      width={["100%", "640px", "488px"]}
      maxWidth={["100%", "640px", "30vw"]}
      boxShadow="0 8px 32px rgb(0 0 0 / 24%)"
      p="5"
      bg="white"
      borderRadius="md"
      {...props}
    >
      <MarketoBrowserForm
        id={NEXT_PUBLIC_ENTERPRISE_SIGNUP_FORM_ID}
        minHeight="620px"
      />
    </Box>
  );
}
