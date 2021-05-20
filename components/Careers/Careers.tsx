import styled from "styled-components";
import css from "@styled-system/css";
import { all, StyledSystemProps } from "components/system";
import Box from "components/Box";
import Heading from "components/Heading";
import { Centrator } from "components/Layout";
import Button from "components/Button";
import Link from "components/Link";
import CrewGallery from "components/CrewGallery";

export default function Careers() {
  return (
    <StyledWrapper gradient="lightGrayToDark">
      <Centrator flexDirection="column" alignItems="center">
        <Heading
          title="Careers at Teleport"
          subtitle="Join Us"
          align="center"
        />
        <Box as="p" mt="5" color="darkest" text="text-xl" textAlign="center">
          We are growing quickly. Join us to help move cloud computing into a
          brighter, and more secure, future.
        </Box>
        <Button as={Link} href="/careers" variant="primary" mt="6" shape="lg">
          Get Started
        </Button>
      </Centrator>
      <CrewGallery mt={[5, 10]} />
    </StyledWrapper>
  );
}

const StyledWrapper = styled("section")<StyledSystemProps>(
  css({
    boxSizing: "border-box",
    width: "100%",
    pt: [5, 10],
    pb: "4",
  }),
  all
);
