import css from "@styled-system/css";
import Box from "components/Box";
import Button from "components/Button";
import { Centrator } from "components/Layout";
import Section from "components/Section";
import Link from "components/Link";

const TryTeleport = () => {
  return (
    <Section bg="purple">
      <Centrator
        color="white"
        flexDirection="column"
        alignItems="center"
        pt={[5, 9]}
        pb={[5, 6]}
      >
        <Box
          as="h2"
          fontSize={["header-1", "section-header"]}
          fontWeight="black"
          lineHeight="xxl"
          py={1}
        >
          Try Teleport Today
        </Box>
        <Box fontSize={["text-lg", "text-xl"]} lineHeight="md">
          In the Cloud, Self-hosted, or Open Source
        </Box>
        <Button
          as={Link}
          href="/pricing/"
          variant="secondary"
          shape="lg"
          mt={4}
          mb={3}
        >
          Get Started
        </Button>
        <Link
          href="/docs/"
          color="white"
          fontSize="text-md"
          lineHeight="md"
          css={css({
            "&:hover,&:active,&:focus": {
              textDecoration: "none",
            },
          })}
        >
          View Developer Docs
        </Link>
      </Centrator>
    </Section>
  );
};

export default TryTeleport;
