import styled from "styled-components";
import Link from "components/Link";
import Box from "components/Box";
import Button from "components/Button";
import Section from "components/Section";
import Centrator from "components/Centrator";

export interface MessageBannerProps {
  title: string;
  children: string;
  href: string;
  linkText: string;
}

export const MessageBanner = ({
  title,
  children,
  href,
  linkText,
}: MessageBannerProps) => {
  return (
    <>
      <BorderBox />
      <Section bg="double">
        <Centrator
          flexDirection="column"
          justifContent="space-between"
          alignItems="center"
          textAlign="center"
          py={[5, 11]}
        >
          <Box
            as="h3"
            fontSize={["header-2", "header-1"]}
            fontWeight="black"
            color="black"
            lineHeight={["xl", "xxl"]}
            mb={3}
          >
            {title}
          </Box>
          <Box
            fontSize={["text-lg", "header-4"]}
            lineHeight="lg"
            color="darkest"
            mb={3}
            maxWidth={["90%", "70%"]}
          >
            {children}
          </Box>
          <Button
            as={Link}
            mt={2}
            variant="secondary"
            shape="outline"
            href={href}
          >
            {linkText}
          </Button>
        </Centrator>
      </Section>
    </>
  );
};

const BorderBox = styled(Box)({
  borderTop: "1px solid #f0f2f4",
  width: "100%",
});
