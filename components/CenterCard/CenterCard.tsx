import styled from "styled-components";
import css from "@styled-system/css";
import Section from "components/Section";
import Flex from "components/Flex";
import wavelight from "./assets/wave-light.png";
import Badge, { BadgeProps } from "components/Badge";
import Icon, { IconName } from "components/Icon";
export interface CenterCardProps extends BadgeProps {
  title: string;
  text: string;
  iconName?: IconName;
  badgeIconName?: IconName;
}

export const CenterCard = ({
  title,
  text,
  size,
  badgeIconName,
  iconName,
}: CenterCardProps) => {
  return (
    <Section
      display="flex"
      flexDirection="column"
      bg="purple"
      justifyContent="center"
      alignItems="center"
      minHeight={[null, 632]}
    >
      <StyledCard>
        {badgeIconName ? (
          <Badge name={badgeIconName} size={size} />
        ) : (
          <Icon name={iconName} size={size} />
        )}
        <Flex
          as="h2"
          color="black"
          fontSize={["text-lg", "header-1"]}
          lineHeight={["md", "xxl"]}
          mb={[3, 5]}
          mt={0}
          px={5}
          fontWeight="black"
          textAlign="center"
          flexWrap="wrap"
        >
          {title}
        </Flex>
        <Flex
          as="p"
          color="black"
          fontSize={["text-md", "text-xl"]}
          lineHeight={["md", "lg"]}
          mt={0}
          mb={[0, 5]}
          maxWidth={["90%", "75%"]}
          textAlign="center"
        >
          {text}
        </Flex>
      </StyledCard>
    </Section>
  );
};

const StyledCard = styled(Flex)(
  css({
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "74%",
    maxWidth: [null, 1400],
    width: ["86%", "67%"],
    py: [5, 9],
    my: [6, 3],
    borderRadius: "md",
    backgroundColor: "white",
    backgroundImage: `url(${wavelight})`,
    backgroundSize: "cover",
  })
);
