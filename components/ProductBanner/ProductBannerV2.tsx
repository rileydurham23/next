import css from "@styled-system/css";
import styled from "styled-components";

import Centrator from "components/Centrator";
import Flex from "components/Flex";
import Box from "components/Box";
import Section from "components/Section";

export interface HeaderEntry {
  description: string;
  title: string;
}

interface ProductBannerV2Props {
  children: React.ReactNode;
  description: string;
  details: [HeaderEntry, HeaderEntry, HeaderEntry, HeaderEntry];
  subtitle: string;
  title: string;
}

const ProductBannerV2: React.FC<ProductBannerV2Props> = ({
  children,
  description,
  details,
  subtitle,
  title,
}) => {
  return (
    <Section bg="lines">
      <StyledCentrator>
        <Top>
          {children}
          <TopText
            description={description}
            subtitle={subtitle}
            title={title}
          />
        </Top>

        <Bottom>
          <TextRow details={details} />
        </Bottom>
      </StyledCentrator>
    </Section>
  );
};

const TopText = ({ description, subtitle, title }) => {
  return (
    <Flex
      flexDirection="column"
      maxWidth={["auto", "50%"]}
      mt={[4, 0]}
      pl={[1, 6]}
    >
      <Box
        color="dark-purple"
        fontSize={["text-lg", "text-xl"]}
        fontWeight="bold"
        lineHeight="lg"
        mb={[2, 4]}
      >
        {subtitle}
      </Box>
      <Box
        as="h2"
        fontSize={["header-3", "header-1"]}
        fontWeight="black"
        lineHeight={["xl", "xxl"]}
        mb={2}
      >
        {title}
      </Box>
      <Box
        color="darkest"
        fontSize="text-xl"
        lineHeight="lg"
        mb={3}
        mt={[0, 3]}
      >
        {description}
      </Box>
    </Flex>
  );
};

const TextRow = ({ details }) => {
  return (
    <TextRowContainer>
      {details.map((detail, i) => (
        <ProductBannerV2Item
          description={detail.description}
          key={i}
          title={detail.title}
        />
      ))}
    </TextRowContainer>
  );
};

const ProductBannerV2Item = ({ description, title }) => {
  return (
    <Flex
      alignItems="flex-start"
      flex="0 1 auto"
      flexDirection="column"
      pb={2}
      pl={[0, 3]}
      width="100%"
    >
      <Box
        fontSize={["text-lg", "text-md"]}
        fontWeight="bold"
        lineHeight="lg"
        mb={2}
      >
        {title}
      </Box>
      <Box
        alignItems="flex-start"
        color="darkest"
        fontSize={["text-lg", "text-md"]}
        lineHeight="md"
        mb={[3, 0]}
        mr={[0, 3]}
      >
        {description}
      </Box>
    </Flex>
  );
};

const Top = styled(Flex)(
  css({
    flexDirection: ["column", "row"],
    alignItems: ["center", "flex-start"],
    justifyContent: "space-around",
    py: 3,
  })
);

const Bottom = styled(Box)(
  css({
    pt: [1, 6],
    width: "100%",
  })
);

const StyledCentrator = styled(Centrator)(
  css({
    alignItems: ["center", "flex-start"],
    flexDirection: "column",
    px: 2,
    py: [1, 9],
    textAlign: "left",
  })
);

const TextRowContainer = styled(Flex)(
  css({
    flexDirection: ["column", "row"],
  })
);

export default ProductBannerV2;
