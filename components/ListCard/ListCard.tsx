import type { BGColor } from "components/Section/Section";
import css from "@styled-system/css";
import Flex from "components/Flex";
import Icon, { IconName } from "components/Icon";
import styled from "styled-components";

export interface ListCardContainerProps {
  children: React.ReactElement<typeof ListCardItem>;
  title: string;
}

export const ListCardContainer = ({ children }: ListCardContainerProps) => {
  return (
    <Flex
      alignItems="flex-start"
      display="flex"
      flexDirection={["column", "row"]}
      my={8}
    >
      {children}
    </Flex>
  );
};

export interface ListCardProps {
  bg?: BGColor;
  children: React.ReactElement<typeof ListCardItem>;
  subtitle?: string;
  title: string;
}

const ListCard = ({ bg, children, subtitle, title }: ListCardProps) => {
  return (
    <Flex
      alignItems="center"
      backgroundColor={bg || "transparent"}
      bg={bg}
      display="flex"
      flexDirection="column"
      height="100%"
      justifyContent="center"
      mr={3}
      textAlign="left"
    >
      <StyledCard>
        <Flex
          as="h2"
          color="black"
          flexWrap="wrap"
          fontSize={["header-3", "header-1"]}
          fontWeight="black"
          lineHeight={["xl", "xxl"]}
          mt={0}
          mx={[2, 5]}
          textAlign="left"
        >
          {title}
        </Flex>
        <Flex
          fontSize="text-xl"
          lineHeight="lg"
          maxWidth={["95%", "85%"]}
          mx={[2, 5]}
        >
          {subtitle}
        </Flex>
        <Flex lineHeight="lg" maxWidth={["98%", "90%"]} textAlign="center">
          <StyledUL>{children}</StyledUL>
        </Flex>
      </StyledCard>
    </Flex>
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
  iconColor = "dark-purple",
  mode = "normal",
}: ListCardItemProps) => {
  return (
    <StyledLi>
      <Icon
        color={iconColor}
        ml={mode === "compact" ? 2 : [5, 3]}
        mr={mode === "compact" ? 2 : [2, 3]}
        name={icon}
        size="md"
      />
      <StyledText>{children}</StyledText>
    </StyledLi>
  );
};

const StyledCard = styled(Flex)(
  css({
    alignItems: ["baseline", "center"],
    backgroundColor: "white",
    backgroundSize: "cover",
    borderRadius: "md",
    boxShadow: "0 1px 4px rgba(0, 0, 0, .12)",
    flexDirection: "column",
    height: "100%",
    justifyContent: "flex-start",
    m: [1, 3],
    px: [2, 3],
    py: [3, 9],
    width: "98%",
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
