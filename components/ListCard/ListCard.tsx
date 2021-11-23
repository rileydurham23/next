import type { BGColor } from "components/Section/Section";
import css from "@styled-system/css";
import Flex from "components/Flex";
import Icon, { IconName } from "components/Icon";
import Section from "components/Section";
import styled from "styled-components";

export interface ListCardProps {
  bg?: BGColor;
  children: React.ReactElement<typeof ListCardItem>;
  title: string;
}

const ListCard = ({ bg = "grayWave", children, title }: ListCardProps) => {
  return (
    <Section
      alignItems="center"
      bg={bg}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      padding={[1, 6]}
    >
      <StyledCard>
        <Flex
          as="h2"
          color="black"
          flexWrap="wrap"
          fontSize={["header-2", "header-1", "header-1"]}
          fontWeight="black"
          lineHeight={["md", "xxl"]}
          mt={0}
          textAlign="center"
        >
          {title}
        </Flex>
        <Flex
          fontSize={["text-md", "text-xl"]}
          lineHeight="lg"
          maxWidth={["95%", "90%"]}
          textAlign="center"
        >
          <StyledUL>{children}</StyledUL>
        </Flex>
      </StyledCard>
    </Section>
  );
};

export type ListCardItemProps = {
  children: string;
  icon: IconName;
  iconColor?: string;
  listCardItemBold?: string;
  mode?: "normal" | "compact";
};

export const ListCardItem = ({
  children,
  icon = "circleCheck",
  iconColor = "purple",
  mode = "normal",
}: ListCardItemProps) => {
  return (
    <StyledLi>
      <Icon
        color={iconColor}
        mx={mode === "compact" ? 2 : 4}
        name={icon}
        size={mode === "compact" ? "sm" : "md"}
      />
      <StyledText>{children}</StyledText>
    </StyledLi>
  );
};

const StyledCard = styled(Flex)(
  css({
    alignItems: "center",
    backgroundColor: "white",
    backgroundSize: "cover",
    borderRadius: "md",
    boxShadow: "0 1px 4px rgba(0, 0, 0, .12)",
    flexDirection: "column",
    height: ["86%", "80%"],
    justifyContent: "center",
    my: [6, 3],
    py: [5, 9],
    width: "90%",
  })
);

const StyledLi = styled("li")(
  css({
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  })
);

const StyledText = styled("div")(
  css({
    display: "flex",
    flexDirection: "row",
    margin: [2, 3],
    textAlign: "left",
    width: "90%",
  })
);

const StyledUL = styled("ul")(
  css({
    listStyle: "none",
    margin: 0,
    padding: 0,
  })
);

export default ListCard;
