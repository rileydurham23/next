import Button, { ButtonVariant } from "components/Button";
import Icon from "components/Icon";
import Box from "components/Box";
import Flex, { FlexProps } from "components/Flex";

export type SectionPlanCardProps = {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  actions: {
    title: string;
    url: string;
    type: ButtonVariant;
    comment?: string;
  }[];
  large?: boolean;
} & FlexProps;

export default function SectionPlanCard({
  title,
  subtitle,
  description,
  features,
  actions,
  large,
  ...props
}: SectionPlanCardProps) {
  return (
    <Flex
      as="article"
      width="100%"
      flexDirection="column"
      borderTopLeftRadius="md"
      borderTopRightRadius={large ? "md" : ["md", 0]}
      borderBottomLeftRadius="md"
      borderBottomRightRadius={large ? "md" : ["md", 0]}
      p={4}
      border="1px solid"
      backgroundColor="white"
      borderColor={large ? "dark-purple" : "light-gray"}
      boxShadow={large ? "0 8px 32px rgb(0 0 0 / 24%)" : "none"}
      {...props}
    >
      <Flex alignItems="center">
        <Box
          text={["text-md", "text-lg"]}
          lineHeight="lg"
          fontWeight="bold"
          color="dark-purple"
          alignSelf="flex-end"
        >
          {subtitle}
        </Box>
      </Flex>
      <Box
        as="h2"
        fontSize={["header-2", "banner"]}
        lineHeight={["lg", "xl"]}
        color="black"
        fontWeight="black"
      >
        {title}
      </Box>
      <Box as="p" text={["text-sm", "text-md"]} color="gray" mt={2}>
        {description}
      </Box>
      <Box as="ul" mt={3} columns={large ? [1, 2] : 1} columnGap="16px">
        {features.map((feature, index) => (
          <Flex as="li" key={index} mb={2} breakInside="avoid">
            <Icon name="check" size="sm" color="green" mt={1} />
            <Box as="p" text="text-md" fontWeight="bold" color="black" ml={2}>
              {feature}
            </Box>
          </Flex>
        ))}
      </Box>
      <Box mt="auto" pt={[2, 3]} columns={large ? [1, 2] : 1} columnGap="16px">
        {actions.map(({ url, type, title, comment }, index) => (
          <Flex
            key={index}
            mt={[2, 0]}
            flexDirection="column"
            alignItems="stretch"
            breakInside="avoid"
          >
            <Button as="a" href={url} variant={type} shape="lg">
              {title}
            </Button>
            {comment && (
              <Box
                mt={2}
                fontSize="text-sm"
                lineHeight="sm"
                fontStyle="italic"
                textAlign="center"
                color="gray"
              >
                {comment}
              </Box>
            )}
          </Flex>
        ))}
      </Box>
    </Flex>
  );
}
