import styled from "styled-components";
import css from "@styled-system/css";
import NextImage from "next/image";
import Flex from "components/Flex";
import Box from "components/Box";
import AvatarDropdown from "./AvatarDropdown";

type AvatarListItemProps = {
  brief?: string;
  children: React.ReactNode;
  date?: string;
  imgSize?: number;
  speaker?: React.ReactNode;
  src: string;
  title: string;
};

function AvatarListItem({
  brief,
  children,
  date,
  imgSize = 240,
  speaker,
  src,
  title,
  ...props
}: AvatarListItemProps) {
  return (
    <StyledItem {...props}>
      <Flex
        position="relative"
        height={imgSize}
        width={imgSize}
        flexShrink={0}
        mb={[3, 0]}
      >
        <NextImage
          alt="portrait of the speaker"
          objectFit="contain"
          layout="fill"
          src={src}
        />
      </Flex>
      <Flex flexDirection="column" ml={[3, 52]}>
        <StyledItemText fontSize="header-4" pt={1}>
          {title}
        </StyledItemText>
        <StyledItemText fontSize="text-lg" pt={1} pb={1}>
          {speaker}
        </StyledItemText>
        <StyledItemText fontSize="text-lg" pt={1} pb={1}>
          {date}
        </StyledItemText>
        <AvatarDropdown brief={brief}>{children}</AvatarDropdown>
      </Flex>
    </StyledItem>
  );
}

const StyledItem = styled("li")(
  css({
    position: "relative",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: ["column", "row"],
    alignItems: ["center", "flex-start"],
    mt: 7,
  })
);

const StyledItemText = styled(Box)(
  css({
    fontWeight: "bold",
    lineHeight: "lg",
    mt: 0,
  })
);

export default AvatarListItem;
