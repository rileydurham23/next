import Box, { BoxProps } from "components/Box";
import Marketo from "components/Marketo";

const { NEXT_PUBLIC_ENTERPRISE_SIGNUP_FORM_ID } = process.env;

export default function EnterpriseSignup(props: BoxProps) {
  return (
    <Box
      width={["100%", "640px", "488px"]}
      maxWidth={["100%", "640px", "30vw"]}
      boxShadow="0 8px 32px rgb(0 0 0 / 24%)"
      p="5"
      bg="white"
      borderRadius="md"
      {...props}
    >
      <Marketo id={NEXT_PUBLIC_ENTERPRISE_SIGNUP_FORM_ID} />
    </Box>
  );
}
