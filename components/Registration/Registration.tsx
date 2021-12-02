import styled from "styled-components";
import { css, StyledSystemProps } from "components/system";
import NextImage from "next/image";
import Box from "components/Box";
import Flex from "components/Flex";
import Pattern1 from "components/Pattern1";
import { MarketoBrowserForm } from "components/MarketoForm";
import engineers from "./assets/engineers.png";

/**
 *
 * @returns a standalone, full-page component with email subscription form.
 * ***Not intended to be used within an MDX file.***
 * The button text must be changed in marketo.
 */

export interface RegistrationProps {
  headTitle: string;
  headDescription: string;
  mainImage?: string;
  title: string;
  description: string | React.ReactNode;
  CTA: string;
  subCTA: string;
  formID?: string;
}

export const Registration = ({
  headTitle,
  headDescription,
  mainImage = `${engineers}`,
  title,
  description,
  CTA,
  subCTA,
  formID,
}: RegistrationProps) => {
  return (
    <Pattern1
      headTitle={headTitle}
      headDescription={headDescription}
      colorStyle="purple"
    >
      <Flex flexDirection={["column", "row-reverse"]}>
        {/* Side with image, title, description */}
        <StyledAccessPlane order={[2, 1]}>
          <Flex
            flexDirection="column"
            justifyContent="center"
            maxWidth={["420px", "initial"]}
          >
            <Flex
              position="relative"
              width="auto"
              height={[158, 300]}
              mt={[4, 8]}
              p={1}
            >
              <NextImage
                src={mainImage}
                alt={title}
                layout="fill"
                objectFit="contain"
              />
            </Flex>
            <Box
              fontSize={["header-4", "header-3"]}
              lineHeight="md"
              fontWeight="bold"
              px={[3, 8]}
              py={[2, 3]}
            >
              {title}
            </Box>
            <Box
              fontSize="text-lg"
              lineHeight="md"
              fontWeight="regular"
              px={[3, 8]}
              pb={[5, 8]}
              whiteSpace="pre-wrap"
            >
              {description}
            </Box>
          </Flex>
        </StyledAccessPlane>

        {/* Side with email form */}
        <StyledEmailCTA>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            maxWidth={["420px", "initial"]}
            px={[3, 9]}
            pt={[6, 4]}
            pb={[0, 4]}
          >
            <Box justifyContent="center">
              <Box
                as="h1"
                fontSize={["header-3", "header-1"]}
                lineHeight={["lg", "xl"]}
                pb={[2, 3]}
                fontWeight={"bold"}
              >
                {CTA}
              </Box>
              <Box fontSize="text-xl" pb={[0, 3]}>
                {subCTA}
              </Box>
            </Box>
            <Flex
              backgroundColor="white"
              alignItems="stretch"
              flexDirection="column"
              mb={[5, 0]}
              mt={[4, 0]}
              width="100%"
              minHeight="44px"
              minWidth={["auto", "304px"]}
            >
              <MarketoBrowserForm id={formID} />
            </Flex>
          </Flex>
        </StyledEmailCTA>
      </Flex>
    </Pattern1>
  );
};

const StyledAccessPlane = styled(Flex)(
  css({
    backgroundImage: [
      "linear-gradient(141deg, #eff1fe 0%, #ffffff 100%)",
      "linear-gradient(-68deg, #eff1fe 0%, #ffffff 100%,)",
    ],
    borderTopLeftRadius: [0, "md"],
    borderBottomLeftRadius: "md",
    borderBottomRightRadius: ["md", 0],
    justifyContent: "center",
  })
);

const StyledEmailCTA = styled("div")<StyledSystemProps>(
  css({
    display: "flex",
    justifyContent: "center",
    background: "white",
    borderRadius: "md",
    boxSizing: "border-box",
  })
);
